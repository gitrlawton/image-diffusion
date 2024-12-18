"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
    // TODO: Update the like status
  };

  return (
    <button
      onClick={handleLike}
      className={`text-gray-700 hover:text-black ${isLiked ? "text-red-500" : ""}`}
    >
      <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
    </button>
  );
}
