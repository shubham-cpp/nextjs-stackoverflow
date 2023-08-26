"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const TabBar = () => {
  const params = useSearchParams();
  const activeTab = params.get("tab") ?? "info";
  return (
    <header className="my-2 flex items-center space-x-6">
      <Link
        href="/profile?tab=info"
        className={cn([
          activeTab === "info" && "font-bold text-blue-600 dark:text-blue-300",
          "text-lg antialiased",
        ])}
      >
        Information
      </Link>
      <Link
        href="/profile?tab=recents"
        className={cn([
          activeTab === "recents" &&
            "font-bold text-blue-600 dark:text-blue-300",
          "text-lg antialiased",
        ])}
      >
        Recent Activity
      </Link>
    </header>
  );
};

export default TabBar;
