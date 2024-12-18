"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Send } from "lucide-react";
import { posts, getUserById } from "@/lib/data.js";
import LikeButton from "@/components/custom/LikeButton.jsx";
import CommentSection from "@/components/custom/CommentSection.jsx";

// The user's feed
export default function Feed() {
  return (
    <div className="container mx-auto pb-16 pt-4">
      {posts.map(post => {
        const user = getUserById(post.userId);
        return (
          <div key={post.id} className="mb-8 bg-white rounded-lg shadow">
            <div className="p-4 flex items-center">
              <Link
                href={`/profile/${post.userId}`}
                className="flex items-center"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={user?.username || ""}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 font-semibold">{user?.username}</span>
              </Link>
            </div>
            <Image
              src={post.imageUrl}
              alt="Post"
              width={600}
              height={600}
              className=""
            />
            <div className="p-4">
              <div className="flex space-x-4 mb-2">
                <LikeButton postId={post.id} initialLikes={post.likes} />
                <button className="text-gray-700 hover:text-black">
                  <MessageCircle size={24} />
                </button>
                <button className="text-gray-700 hover:text-black">
                  <Send size={24} />
                </button>
              </div>
              <p className="font-semibold">{post.likes} likes</p>
              <CommentSection
                postId={post.id}
                initialComments={post.comments}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
