import mysql from "mysql2/promise";

export async function DbConnection() {
  const pool = await mysql.createConnection({
    host: process.env.NEXT_PUBLIC_DATABASE_HOST_NAME,
    user: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
    password: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
    database: process.env.NEXT_PUBLIC_DATABASE_NAME,
  });

  return pool;
}
