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
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { handleLogout } from "./LoginSignup";

const DropdownNavMenu: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const isSmall = useMediaQuery("(max-width: 560px)");
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="outline" size={isSmall ? "sm" : "icon"}>
          <Menu size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {session ? (
            <DropdownMenuItem>
              <button
                onClick={handleLogout}
                title="Click here to logout, you will be redirected to Login page"
                className="w-full text-start"
              >
                Logout
              </button>
            </DropdownMenuItem>
          ) : (
            <>
              <Link href="/login">
                <DropdownMenuItem>Login</DropdownMenuItem>
              </Link>
              <Link href="/register">
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
              </Link>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavMenu;
