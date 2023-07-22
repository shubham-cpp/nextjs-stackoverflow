"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { FunctionComponent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SearchBar: FunctionComponent = () => {
  const [hidden, setHidden] = useState(false);

  const page = usePathname();
  const smaller = useMediaQuery("(max-width: 560px)");

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    setHidden(smaller);
  }, [smaller]);
  return (
    <div className="flex items-center space-x-2">
      <button
        className="sm:hidden"
        type="button"
        onClick={toggleHidden}
        hidden={page === "/login" || page === "/register"}
      >
        <Search />
      </button>
      <Input
        type="search"
        name="searchQuery"
        size={smaller ? 18 : 28}
        placeholder="Search Questions..."
        aria-label="Search from list of question using Question title"
        className={hidden ? "hidden" : ""}
        hidden={hidden}
      />
    </div>
  );
};

export default SearchBar;
