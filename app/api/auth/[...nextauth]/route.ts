import NextAuth from "next-auth";
import { options } from "./options";
const handler = NextAuth(options);

// TODO: create an Adapter in future maybe?
// https://next-auth.js.org/tutorials/creating-a-database-adapter

export { handler as GET, handler as POST };
