import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

type IFavorite = {
  name: string;
  url: string;
  image: string;
};

const fetchData = () => {
  return new Promise<IFavorite[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Future Tech",
          url: "#",
          image:
            "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        },
        {
          name: "Team Building",
          url: "#",
          image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        },
      ]);
    }, 2200);
  });
};

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

export const FavoritesLoading = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Loading />
      <Loading />
      <Loading />
    </div>
  );
};

export const Favorites = async () => {
  const data = await fetchData();
  return (
    <>
      {data.map((item) => (
        <article key={item.name} className="my-4 flex items-center space-x-4">
          <Image
            src={item.image}
            alt={item.name}
            width={150}
            height={150}
            className="rounded"
          />
          <div>
            <h2>{item.name}</h2>
          </div>
        </article>
      ))}
    </>
  );
};
