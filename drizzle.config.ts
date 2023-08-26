import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/database/schemas/*",
  out: "./lib/database/drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./lib/database/sqlite.db",
  },
} satisfies Config;
