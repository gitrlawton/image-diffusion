"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FollowButton({ userId, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: Update the follow status
  };

  return (
    <Button
      onClick={handleFollow}
      variant={isFollowing ? "outline" : "default"}
      className="mt-2"
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
