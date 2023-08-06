import db from "@/lib/database";
import { usersTable } from "@/lib/database/schemas/users";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import Credential from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";
const handler = NextAuth({
  providers: [
    Credential({
      name: "Credentials",
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
          const user = db
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
          if (user.length === 0) return null;
          const passwordMatch = await compare(
            credentials.password,
            user[0].password,
          );
          if (!passwordMatch) return null;
          return {
            id: user[0].id.toString(),
            name: user[0].name,
            email: user[0].email,
            image: user[0].image,
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
});

// TODO: create an Adapter in future maybe?
// https://next-auth.js.org/tutorials/creating-a-database-adapter

export { handler as GET, handler as POST };
