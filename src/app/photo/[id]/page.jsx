"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getUserById } from "@/lib/data";
import { usePosts } from "@/app/contexts/PostContext";
import LikeButton from "@/components/custom/LikeButton";
import CommentSection from "@/components/custom/CommentSection";
import { Heart, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PhotoPage(context) {
  const params = React.use(context.params);
  const { posts } = usePosts();
  const [post, setPost] = useState(posts.find(p => p.id === params.id));
  const user = getUserById(post?.userId || "");
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);

  useEffect(() => {
    setPost(posts.find(p => p.id === params.id));
  }, [posts, params.id]);

  if (!post) return <div className="text-center mt-8">Post not found</div>;

  return (
    <div className="max-w-2xl mx-auto pb-16 pt-4 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 flex items-center">
          <Link
            href={`/profile/${post.userId}`}
            className="flex items-center group"
          >
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt={user?.username || ""}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2 font-semibold group-hover:text-blue-500 transition-colors">
              {user?.username}
            </span>
          </Link>
        </div>
        <Image
          src={post.imageUrl}
          alt="Post"
          width={600}
          height={600}
          className="w-full"
        />
        <div className="p-4">
          <div className="flex space-x-4 mb-2">
            <LikeButton postId={post.id} initialLikes={post.likes} />
            <button
              className="text-gray-700 hover:text-black"
              onClick={() =>
                setIsCommentSectionVisible(!isCommentSectionVisible)
              }
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
              className="font-semibold hover:text-blue-500 transition-colors"
            >
              {user?.username}
            </Link>{" "}
            {post.caption || "No caption provided"}
          </p>
          <CommentSection
            postId={post.id}
            initialComments={post.comments}
            isVisible={isCommentSectionVisible}
          />
        </div>
      </div>
    </div>
  );
}
