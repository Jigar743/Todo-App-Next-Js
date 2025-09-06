import { CreateUserInputType } from "@/Types/UserTypes";
import BaseDatabase from "./BaseDatabase";
import bcrypt from "bcryptjs";

class Users extends BaseDatabase {
  constructor() {
    super();
  }

  async fetchAllUsers() {
    try {
      const [rows] = await this.getDb()?.query("select * from users");
      return rows;
    } catch (error) {
      throw new Error("Error while fetching users.");
    }
  }

  async generateHashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.NEXT_PUBLIC_PASSWORD_HASH_SALT)
    );
    return hashedPassword;
  }

  async verifyPassword() {}
  async verifyToken() {}
  async generateToken() {}

  async signupUser(input: CreateUserInputType) {
    try {
      const user = {
        ...input,
        password: await this.generateHashPassword(input.password),
      };
      await this.getDb()?.query(
        "insert into users (firstName, lastName, email, password) values (?, ?, ?, ?)",
        [user.firstName, user.lastName, user.email, user.password]
      );
      return "Account created successfully!!";
    } catch (error) {
      throw new Error("Error while creating an account!");
    }
  }

  async UpdateUser() {}
  async deleteUser() {}
  async userLogin() {}
}

const UserController = new Users();

export default UserController;
