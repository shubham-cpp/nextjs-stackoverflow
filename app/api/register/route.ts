import db from "@/lib/database";
import { User, usersTable } from "@/lib/database/schemas/users";
import { hash } from "bcrypt";
import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const users = await db
      .select({
        id: usersTable.id,
        email: usersTable.email,
      })
      .from(usersTable)
      .all();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error while creating user. Please try again later", {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  const user: Omit<User, "id"> = await req.json();
  try {
    const userExists = await db
      .select({
        email: usersTable.email,
      })
      .from(usersTable)
      .where(eq(usersTable.email, user.email))
      .all();
    if (userExists.length > 0) {
      return new Response(
        JSON.stringify({
          message: "User already exists. Please try different email",
          success: false,
        }),
        { status: 409, headers: { "Content-Type": "application/json" } },
      );
    }
    user.password = await hash(user.password, 10);
    await db.insert(usersTable).values(user).run();
    return new Response(
      JSON.stringify({ message: "User created", success: true }),
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return new Response("Error while creating user. Please try again later", {
      status: 500,
    });
  }
};
