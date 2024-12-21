"use client";

import Image from "next/image";
import Link from "next/link";
import { getUserById } from "@/lib/data";
import FollowButton from "@/components/custom/FollowButton";
import FollowModal from "@/components/custom/FollowModal";
import { usePosts } from "@/app/contexts/PostContext";

// TODO: Replace with the actual user ID.  Using mock user ID '1' for now.
const PROFILE_USER_ID = "1";

export default function Profile() {
  const user = getUserById(PROFILE_USER_ID);
  const { posts } = usePosts();

  if (!user) return <div>User not found</div>;

  return (
    <div className="max-w-4xl mx-auto pb-16 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center mb-8">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="mt-4 sm:mt-0 sm:ml-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{user.username}</h1>
          <p className="text-gray-600 mt-1">{user.name}</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4">
            <span className="font-semibold">{posts.length} posts</span>
            <FollowModal userIds={user.followers} title="followers" />
            <FollowModal userIds={user.following} title="following" />
          </div>
          <FollowButton userId={user.id} initialIsFollowing={false} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 sm:gap-4">
        {posts.map(photo => (
          <Link
            key={photo.id}
            href={`/photo/${photo.id}`}
            className="aspect-square relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <Image
              src={photo.imageUrl}
              alt={`User photo ${photo.id}`}
              fill
              className="object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
