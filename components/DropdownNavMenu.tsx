"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { handleLogout } from "./LoginSignup";

const DropdownNavMenu: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const { data: session } = useSession();
  const avatarFallbackText = session?.user?.name
    ?.split(" ")
    .map((s) => s[0])
    .join("");
  if (!session) {
    return (
      <Link
        href="/login"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Login
      </Link>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Avatar>
          <AvatarImage src={session?.user?.image ?? "#"} />
          <AvatarFallback>{avatarFallbackText}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="w-full text-start">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button
              onClick={handleLogout}
              title="Click here to logout, you will be redirected to Login page"
              className="w-full text-start"
            >
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavMenu;
