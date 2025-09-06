import { Pool, createPool } from "mysql2/promise";

// Reuse the pool across hot reloads (Next.js dev mode)
let pool: Pool;

if (!(globalThis as any)._mysqlPool) {
  console.log("Creating new database pool...");
  (globalThis as any)._mysqlPool = createPool({
    host: process.env.NEXT_PUBLIC_DATABASE_HOST_NAME,
    port: process.env.NEXT_PUBLIC_DATABASE_HOST_PORT
      ? parseInt(process.env.NEXT_PUBLIC_DATABASE_HOST_PORT, 10)
      : 3306,
    user: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
    password: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
    database: process.env.NEXT_PUBLIC_DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

pool = (globalThis as any)._mysqlPool;

class BaseDatabase {
  protected getDb() {
    return pool;
  }

  async DatabaseDisconnect() {
    try {
      await pool.end();
      console.log("Database pool closed!");
      (globalThis as any)._mysqlPool = null;
    } catch (error) {
      console.log("Error while closing database pool", error);
    }
  }

  isDbConnected() {
    return !!pool;
  }
}

export default BaseDatabase;
