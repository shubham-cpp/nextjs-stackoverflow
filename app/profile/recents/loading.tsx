import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] md:w-[40ch]" />
        <Skeleton className="h-4 w-[200px] md:w-[35ch]" />
      </div>
    </div>
  );
};

export default function FavoritesLoading() {
  return (
    <div className="flex flex-col space-y-4">
      {[...Array(5)].map((_, i) => (
        <Loading key={i} />
      ))}
    </div>
  );
}
