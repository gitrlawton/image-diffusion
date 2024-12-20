"use client";

import { useState } from "react";
import Image from "next/image";
import { PlusSquare, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function AddPhotoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [caption, setCaption] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  const [currentView, setCurrentView] = useState("generate");

  const handleGenerate = async e => {
    e.preventDefault();
    setGeneratedImageUrl(null);
    setIsGenerating(true);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: prompt }),
      });

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setGeneratedImageUrl(url);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNext = () => {
    setCurrentView("caption");
  };

  const handleBack = () => {
    setCurrentView("generate");
  };

  const resetModal = () => {
    setPrompt("");
    setCaption("");
    setCurrentView("generate");
    setGeneratedImageUrl(null);
    setIsGenerating(false);
  };

  // Not implemented
  const handlePublish = () => {
    // TODO: Handle posting the generated image with the caption
    console.log(
      "Publishing image:",
      generatedImageUrl,
      "with caption:",
      caption
    );
    setIsOpen(false);
    setPrompt("");
    setCaption("");
    setGeneratedImageUrl(null);
    setCurrentView("generate");
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={open => {
        setIsOpen(open);
        if (!open) {
          resetModal();
        }
      }}
    >
      <DialogTrigger asChild>
        <button className="text-gray-700 hover:text-blue-500 transition-colors">
          <PlusSquare size={24} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {currentView === "generate" ? "Create a new post" : "Add a caption"}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 px-4 pb-4">
          {currentView === "generate" ? (
            <>
              <div className="h-[400px] w-full bg-gray-100 relative rounded-lg overflow-hidden">
                {generatedImageUrl ? (
                  <Image
                    src={generatedImageUrl}
                    alt="Generated image"
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    {isGenerating ? "Generating..." : "Image will appear here"}
                  </div>
                )}
              </div>
              <Textarea
                placeholder="Enter a text prompt for the image"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                rows={3}
              />
              <div className="flex justify-between">
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt}
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                >
                  {generatedImageUrl ? "Regenerate" : "Generate"}
                </Button>
                {generatedImageUrl && (
                  <Button
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Next -&gt;
                  </Button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="h-[400px] w-full bg-gray-100 relative">
                {generatedImageUrl && (
                  <Image
                    src={generatedImageUrl}
                    alt="Generated image"
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <Textarea
                placeholder="Add a caption..."
                value={caption}
                onChange={e => setCaption(e.target.value)}
                rows={3}
              />
              <div className="flex justify-between">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                >
                  Publish
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
