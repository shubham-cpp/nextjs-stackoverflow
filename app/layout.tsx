import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Providers from "@/lib/Providers";

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
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen flex-col"}>
        <Providers>
          <Navbar />
          <div className="flex gap-5">
            <SideBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
