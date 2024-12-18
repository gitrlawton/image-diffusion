"use client";

import Image from "next/image";
import { useState } from "react";
import { getPostById, getUserById } from "@/lib/data";
import { Heart, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PhotoPage({ params }) {
  const photo = getPostById(params.id);
  const [likes, setLikes] = useState(photo?.likes || 0);
  const [comments, setComments] = useState(photo?.comments || []);
  const [newComment, setNewComment] = useState("");

  if (!photo) return <div>Photo not found</div>;

  const user = getUserById(photo.userId);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = e => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now().toString(),
          userId: "currentUser",
          content: newComment.trim(),
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="container mx-auto pb-16 pt-4 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt={user?.username || ""}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2 font-semibold">{user?.username}</span>
        </div>
        <Image
          src={photo.imageUrl}
          alt="Post"
          width={600}
          height={600}
          className="w-full"
        />
        <div className="p-4">
          <div className="flex space-x-4 mb-2">
            <button
              onClick={handleLike}
              className="text-gray-700 hover:text-black"
            >
              <Heart size={24} />
            </button>
            <button className="text-gray-700 hover:text-black">
              <MessageCircle size={24} />
            </button>
            <button className="text-gray-700 hover:text-black">
              <Send size={24} />
            </button>
          </div>
          <p className="font-semibold">{likes} likes</p>
          <div className="mt-2 space-y-2">
            {comments.map(comment => (
              <p key={comment.id}>
                <span className="font-semibold">{comment.userId}</span>{" "}
                {comment.content}
              </p>
            ))}
          </div>
          <form onSubmit={handleAddComment} className="mt-4">
            <div className="flex">
              <Input
                type="text"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow"
              />
              <Button type="submit" className="ml-2">
                Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
