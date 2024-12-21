import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import { PostProvider } from "@/app/contexts/PostContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "A simple Instagram clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <PostProvider>
          <main className="min-h-screen pb-16">{children}</main>
          <Navbar />
        </PostProvider>
      </body>
    </html>
  );
}
