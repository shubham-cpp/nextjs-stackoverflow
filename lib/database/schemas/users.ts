import type { AdapterAccount } from "@auth/core/adapters";
import { type InferModel } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
// Convert the above to a better-sqlite3 database
// this is for non-oauth users(i.e) not signed in using github or google
export const regularUsersTable = sqliteTable(
  "regular_users",
  {
    id: text("id").notNull().primaryKey(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    image: text("imageUrl"),
    // session: text("sessions"),
  },
  (user) => ({
    emailIdx: uniqueIndex("regular_users_email_idx").on(user.email),
  }),
);

export type RegularUser = InferModel<typeof regularUsersTable>;

export const usersTable = sqliteTable(
  "user",
  {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
    image: text("image"),
  },
  (user) => ({
    emailIdx: uniqueIndex("email_idx").on(user.email),
  }),
);

export type User = InferModel<typeof usersTable>;

export const accountsTable = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  }),
);

export type Account = InferModel<typeof accountsTable>;

export const sessionsTable = sqliteTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export type Session = InferModel<typeof sessionsTable>;

export const verificationTokensTable = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);

export type VerificationToken = InferModel<typeof verificationTokensTable>;

// export const usersTableRelations = relations(usersTable, ({ many }) => ({
//   sessions: many(sessionsTable),
// }));

// export const sessionsTable = sqliteTable("sessions", {
//   id: integer("id").primaryKey(),
//   userId: integer("user_id"), //.references(() => usersTable.id),
//   token: text("token").notNull(),
//   expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
// });

// export type Session = InferModel<typeof sessionsTable>;

// export const sessionsTableRelations = relations(sessionsTable, ({ one }) => ({
//   user: one(usersTable, {
//     fields: [sessionsTable.userId],
//     references: [usersTable.id],
//   }),
// }));
