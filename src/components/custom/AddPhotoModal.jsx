"use client";

import { useState } from "react";
import { PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddPhotoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-gray-700 hover:text-black">
          <PlusSquare size={24} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new photo</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p>Photo upload functionality not implemented in this demo.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
