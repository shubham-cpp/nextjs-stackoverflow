"use client";

import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect } from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link: FunctionComponent<LinkProps> = ({ href, children }) => {
  const params = usePathname();
  const isActive = params === href;
  useEffect(() => {
    console.log({ params, href, isActive });
  }, [params, href, isActive]);
  return (
    <NextLink
      href={href}
      className={cn([
        "rounded-t-lg border-b-2 border-transparent p-4 text-zinc-600 antialiased transition  hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-300 sm:text-lg",
        isActive && "font-bold text-blue-600 dark:text-blue-300",
        {
          "border-blue-600 font-bold text-blue-600 dark:border-blue-300  dark:text-blue-300":
            isActive,
        },
      ])}
    >
      {children}
    </NextLink>
  );
};

const TabBar = () => {
  return (
    <header className="my-2 flex items-center space-x-4 border-b border-zinc-200 text-center text-sm font-medium dark:border-zinc-700">
      <nav className="-mb-px flex space-x-4">
        <Link href="/profile">Information</Link>
        <Link href="/profile/recents">Recent Activity</Link>
        <Link href="/profile/saved">Saved Posts</Link>
      </nav>
    </header>
  );
};

export default TabBar;
