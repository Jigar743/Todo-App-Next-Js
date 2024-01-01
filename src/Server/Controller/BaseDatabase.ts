import { Connection, createConnection } from "mysql2/promise";

class BaseDatabase {
  DbInstance: Connection | null = null;
  databaseConfig = {
    host: process.env.NEXT_PUBLIC_DATABASE_HOST_NAME,
    user: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
    password: process.env.NEXT_PUBLIC_DATABASE_USER_NAME,
    database: process.env.NEXT_PUBLIC_DATABASE_NAME,
  };

  constructor() {
    if (this.DbInstance === null) {
      this.createDatabaseInstance();
    }
  }

  async createDatabaseInstance() {
    try {
      const pool = await createConnection(this.databaseConfig);
      this.DbInstance = pool;
    } catch (error) {
      console.log("Error while connecting with the database", error);
    }
  }

  async DatabaseDisconnect() {
    try {
      if (this.DbInstance) {
        await this.DbInstance.end();
        console.log("Database is now disconnected!");
      }
    } catch (error) {
      console.log("error while disconnecting the database", error);
    }
  }
}

export default BaseDatabase;
