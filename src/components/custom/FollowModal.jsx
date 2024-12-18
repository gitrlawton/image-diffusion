"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getUserById } from "@/lib/data";

export default function FollowModal({ userIds, title }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto font-normal">
          {userIds.length} {title}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {userIds.map(userId => {
            const user = getUserById(userId);
            if (!user) return null;
            return (
              <Link
                key={user.id}
                href={`/profile/${user.id}`}
                className="flex items-center py-2 hover:bg-gray-100"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={user.username}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">{user.username}</p>
                  <p className="text-sm text-gray-500">{user.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
