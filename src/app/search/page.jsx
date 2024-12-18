"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { users, searchHashtagPhotos } from "@/lib/data.js";
import Link from "next/link";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userResults, setUserResults] = useState([]);
  const [photoResults, setPhotoResults] = useState([]);

  const handleSearch = query => {
    setSearchQuery(query);
    if (query.trim()) {
      const matchedUsers = users.filter(
        user =>
          user.username.toLowerCase().includes(query.toLowerCase()) ||
          user.name.toLowerCase().includes(query.toLowerCase())
      );
      setUserResults(matchedUsers);

      const matchedPhotos = searchHashtagPhotos(query);
      setPhotoResults(matchedPhotos);
    } else {
      setUserResults([]);
      setPhotoResults([]);
    }
  };

  return (
    <div className="container mx-auto pb-16 pt-4 px-4">
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search users or hashtags"
          value={searchQuery}
          onChange={e => handleSearch(e.target.value)}
          className="pl-10 pr-4 py-3 w-full rounded-full text-lg"
        />
        <Search
          size={24}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>

      {(userResults.length > 0 || photoResults.length > 0) && (
        <div className="space-y-6">
          {userResults.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Users</h2>
              <div className="bg-white rounded-lg shadow">
                {userResults.map(user => (
                  <Link
                    key={user.id}
                    href={`/profile/${user.id}`}
                    className="block px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                  >
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-sm text-gray-500">{user.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {photoResults.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Images</h2>
              <div className="grid grid-cols-3 gap-1">
                {photoResults.map(photo => (
                  <Link
                    key={photo.id}
                    href={`/photo/${photo.id}`}
                    className="aspect-square relative"
                  >
                    <Image
                      src={photo.imageUrl}
                      alt={`Photo with hashtags: ${photo.hashtags.join(", ")}`}
                      fill
                      className="object-cover rounded"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
