"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";

export const handleLogout = () => {
  signOut({
    callbackUrl: "/login",
  });
};
export default function LoginSignup() {
  const { status, data: session } = useSession();

  const loading = status === "loading";
  if (session !== null) {
    return (
      <>
        <Button variant="outline" disabled={loading} onClick={handleLogout}>
          {loading ? (
            <Loader2Icon className="animate-spin" size={24} />
          ) : (
            "Logout"
          )}
        </Button>
      </>
    );
  }
  return (
    <>
      <li>
        <Button variant="outline" disabled={loading}>
          {loading ? (
            <Loader2Icon className="animate-spin" size={24} />
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Button>
      </li>
      <li>
        <Button size="sm">
          {loading ? (
            <Loader2Icon className="animate-spin" size={24} />
          ) : (
            <Link href="/register">Sign Up</Link>
          )}
        </Button>
      </li>
    </>
  );
}
