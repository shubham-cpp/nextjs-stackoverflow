// import { drizzle } from 'drizzle-orm/libsql';
// import { createClient } from '@libsql/client';
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("./lib/database/sqlite.db");
const db: BetterSQLite3Database = drizzle(sqlite);

export default db;
