import Image from "next/image";
import Link from "next/link";
import { getUserById, getUserPosts } from "@/lib/data";
import FollowButton from "@/components/custom/FollowButton";
import FollowModal from "@/components/custom/FollowModal";

export default function UserProfile({ params }) {
  const user = getUserById(params.id);
  const userPhotos = getUserPosts(params.id);

  if (!user) return <div>User not found</div>;

  return (
    <div className="container mx-auto pb-16 pt-4 px-4">
      <div className="flex items-center mb-8">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-gray-600">{user.name}</p>
          <div className="flex space-x-4 mt-2">
            <span>
              <strong>{userPhotos.length}</strong> posts
            </span>
            <FollowModal userIds={user.followers} title="followers" />
            <FollowModal userIds={user.following} title="following" />
          </div>
          <FollowButton userId={user.id} initialIsFollowing={false} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {userPhotos.map(photo => (
          <Link
            key={photo.id}
            href={`/photo/${photo.id}`}
            className="aspect-square relative"
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
