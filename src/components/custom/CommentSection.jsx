"use client";

import { useState } from "react";

export default function CommentSection({ postId, initialComments }) {
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

  return (
    <div>
      {comments.map(comment => (
        <p key={comment.id} className="mt-1">
          <span className="font-semibold">{comment.userId}</span>{" "}
          {comment.content}
        </p>
      ))}
      <form onSubmit={handleAddComment} className="mt-2">
        <input
          type="text"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded"
        />
      </form>
    </div>
  );
}
