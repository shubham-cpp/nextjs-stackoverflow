import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stack Overflow Clone",
  applicationName: "Stack Overflow Clone",
  description: "A Stackoverflow clone using nextjs, typescript and tailwindcss",
  authors: [
    {
      name: "Shubham Pawar",
      url: "https://github.com/shubham-cpp",
    },
    {
      name: "Sandeep Kadam",
      url: "https://github.com/isandeepkadam",
    },
  ],
  keywords: [
    "react",
    "nextjs",
    "typescript",
    "tailwindcss",
    "stackoverflow",
    "server components",
    "sqlite",
    "turso",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen flex-col"}>
        <Providers>
          <Navbar />
          <div className="flex flex-grow gap-5">
            <SideBar />
            {children}
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
