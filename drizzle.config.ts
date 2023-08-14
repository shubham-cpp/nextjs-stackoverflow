import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/database/schemas/*",
  out: "./lib/database/drizzle",
} satisfies Config;
