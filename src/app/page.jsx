"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Send } from "lucide-react";
import { usePosts } from "@/app/contexts/PostContext";
import { getUserById } from "@/lib/data";
import LikeButton from "@/components/custom/LikeButton.jsx";
import CommentSection from "@/components/custom/CommentSection.jsx";

// The user's feed
export default function Feed() {
  const { posts } = usePosts();
  const [visibleCommentSections, setVisibleCommentSections] = useState({});

  const toggleCommentSection = postId => {
    setVisibleCommentSections(prev => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="max-w-lg mx-auto pb-16 pt-4 px-4 sm:px-6 lg:px-8">
      {posts.map(post => {
        const user = getUserById(post.userId);
        return (
          <div
            key={post.id}
            className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
          >
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
                <button
                  className="text-gray-700 hover:text-black"
                  onClick={() => toggleCommentSection(post.id)}
                >
                  <MessageCircle size={24} />
                </button>
                <button className="text-gray-700 hover:text-black">
                  <Send size={24} />
                </button>
              </div>
              <p className="font-semibold">{post.likes} likes</p>
              <p className="mt-2">
                <Link
                  href={`/profile/${post.userId}`}
                  className="font-semibold hover:text-pink-500 transition-colors"
                >
                  {user?.username}
                </Link>{" "}
                {post.caption || "No caption provided"}
              </p>
              <CommentSection
                postId={post.id}
                initialComments={post.comments}
                isVisible={visibleCommentSections[post.id] || false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
