"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";

export const handleLogout = () => {
  signOut({
    callbackUrl: "/login",
  });
};
export default function LoginSignup() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const loading = status === "loading";
  const handleLogout = () => {
    signOut({
      callbackUrl: "/login",
    }).finally(() => setIsLoading(false));
  };

  if (loading) {
    return (
      <>
        <li>
          <Button variant="outline" disabled>
            <Loader2 size={24} className="animate-spin" />
          </Button>
        </li>
        <li>
          <Button variant="outline" disabled>
            <Loader2 size={24} className="animate-spin" />
          </Button>
        </li>
      </>
    );
  }
  if (session) {
    const avatarFallbackText = session.user?.name
      ?.split(" ")
      .map((s) => s[0])
      .join("");
    return (
      <>
        <li>
          <Link href="/profile" title="Click here to view your profile">
            <Avatar>
              <AvatarImage src={session?.user?.image ?? "#"} />
              <AvatarFallback>{avatarFallbackText}</AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <li>
          <Button variant="outline" onClick={handleLogout} loading={isLoading}>
            Logout
          </Button>
        </li>
      </>
    );
  }
  return (
    <>
      <li>
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          href="/register"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Sign Up
        </Link>
      </li>
    </>
  );
}
// export default LoginSignup;
