"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserPosts } from "@/lib/data";

const PostContext = createContext(undefined);

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Initialize with existing posts
    // TODO: Replace with the actual user ID. Using mock user ID '1' for now.
    setPosts(getUserPosts("1"));
  }, []);

  const addPost = post => {
    setPosts(prevPosts => [post, ...prevPosts]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
}
