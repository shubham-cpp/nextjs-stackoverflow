import db from "@/lib/database";
import { usersTable } from "@/lib/database/schemas/users";
import { compare } from "bcrypt";
import { eq } from "drizzle-orm";
import { NextAuthOptions } from "next-auth";
import Credential from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    Credential({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "bill@gates.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === undefined &&
          credentials?.password === undefined
        ) {
          return null;
        }
        try {
          const users = await db
            .select({
              id: usersTable.id,
              name: usersTable.name,
              email: usersTable.email,
              password: usersTable.password,
              image: usersTable.image,
            })
            .from(usersTable)
            .where(eq(usersTable.email, credentials.email))
            .all();
          if (users.length === 0) return null;
          const user = users[0]!;

          const passwordMatch = await compare(
            credentials.password,
            user.password,
          );
          if (!passwordMatch) return null;
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } catch (error) {
          console.error("ERROR: while credentials\n", error);
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // database: process.env.DATABASE_URL,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};
