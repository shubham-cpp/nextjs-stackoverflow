import { type InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Convert the above to a better-sqlite3 database
export const usersTable = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  image: text("imageUrl"),
  // session: text("sessions"),
});

export type User = InferModel<typeof usersTable>;

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
