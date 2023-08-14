"use client";

import { SessionProvider } from "next-auth/react";
import DarkModeProvider from "@/providers/ThemeProvider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <SessionProvider>{children}</SessionProvider>
    </DarkModeProvider>
  );
}
