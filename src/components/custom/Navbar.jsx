import Link from "next/link";
import { Home, User, PlusSquare, Search } from "lucide-react";
import AddPhotoModal from "@/components/custom/AddPhotoModal";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
      <div className="container mx-auto flex justify-around items-center">
        <Link href="/" className="text-gray-700 hover:text-black">
          <Home size={24} />
        </Link>
        <Link href="/search" className="text-gray-700 hover:text-black">
          <Search size={24} />
        </Link>
        <AddPhotoModal />
        <Link href="/profile" className="text-gray-700 hover:text-black">
          <User size={24} />
        </Link>
      </div>
    </nav>
  );
}
