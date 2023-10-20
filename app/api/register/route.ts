import db from "@/lib/database";
import {
  RegularUser as User,
  regularUsersTable,
  usersTable,
} from "@/lib/database/schemas/users";
import { hash } from "bcrypt";
import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const regularUsers = await db
      .select({
        id: regularUsersTable.id,
        email: regularUsersTable.email,
      })
      .from(regularUsersTable)
      .all();
    const users = await db
      .select({
        id: usersTable.id,
        email: usersTable.email,
      })
      .from(usersTable)
      .all();
    return new Response(JSON.stringify([...regularUsers, ...users]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (error) {
    return new Response("Error while creating user. Please try again later", {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  const user: User = await req.json();
  try {
    const regularUserExists = await db
      .select({
        email: regularUsersTable.email,
      })
      .from(regularUsersTable)
      .where(eq(regularUsersTable.email, user.email))
      .all();
    const userExists = await db
      .select({
        email: usersTable.email,
      })
      .from(usersTable)
      .where(eq(usersTable.email, user.email))
      .all();
    if (userExists.length > 0 || regularUserExists.length > 0) {
      return new Response(
        JSON.stringify({
          message: "User already exists. Please try different email",
          success: false,
        }),
        { status: 409, headers: { "Content-Type": "application/json" } },
      );
    }
    user.id = crypto.randomUUID();
    user.password = await hash(user.password, 10);
    await db.insert(regularUsersTable).values(user).run();
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
