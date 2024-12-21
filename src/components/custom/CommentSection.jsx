"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CommentSection({ postId, initialComments, isVisible }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = e => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        userId: "currentUser", // TODO: replace with the logged-in user's ID
        content: newComment.trim(),
      };
      setComments([...comments, comment]);
      setNewComment("");
      // TODO: save the comment
    }
  };

  if (!isVisible) return null;

  return (
    <div className="mt-4">
      {comments.map(comment => (
        <p key={comment.id} className="mt-1">
          <span className="font-semibold">{comment.userId}</span>{" "}
          {comment.content}
        </p>
      ))}
      <form onSubmit={handleAddComment} className="mt-2 flex">
        <Input
          type="text"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-grow mr-2"
        />
        <Button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white"
        >
          Post
        </Button>
      </form>
    </div>
  );
}
