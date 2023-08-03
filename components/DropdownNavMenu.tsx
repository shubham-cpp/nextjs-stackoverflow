"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

const DropdownNavMenu: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const isSmall = useMediaQuery("(max-width: 560px)");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="outline" size={isSmall ? "sm" : "icon"}>
          <Menu size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href="/login">
            <DropdownMenuItem>Login</DropdownMenuItem>
          </Link>
          <Link href="/register">
            <DropdownMenuItem>Sign Up</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavMenu;
