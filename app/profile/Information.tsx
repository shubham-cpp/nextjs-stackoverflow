import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const fetchData = () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve([
        "Information 1",
        "Information 2",
        "Information 3",
        "Information 4",
        "Information 5",
      ]);
    }, 1500);
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

export const InformationLoading = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Loading />
    </div>
  );
};

export const Information = async () => {
  const data = await fetchData();
  return (
    <>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};
