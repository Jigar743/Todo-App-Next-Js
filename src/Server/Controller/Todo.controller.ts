import {
  CreateTodoInputType,
  DeleteTodoInputType,
  UpdateTodoInputType,
} from "@/Types/TodoTypes";
import BaseDatabase from "./BaseDatabase";

class Todos extends BaseDatabase {
  constructor() {
    super();
  }

  async FetchTodos() {
    try {
      const result = await this.getDb()?.query("select * from todos");
      if (!result) {
        throw new Error("Database query failed.");
      }
      const [rows] = result;
      return rows;
    } catch (error) {
      throw new Error("Error while fetching todos.");
    }
  }

  async CreateTodo(input: CreateTodoInputType) {
    try {
      await this.getDb()?.query(
        "insert into todos (Title, Description) values (?, ?)",
        [input.title, input.description]
      );
      return "Todo Created successfully!";
    } catch (error) {
      throw new Error("Error while creating a todo.");
    }
  }

  async UpdateTodo(input: UpdateTodoInputType) {
    try {
      await this.getDb()?.query(
        "update todos set title=?, description=? where id=?",
        [input.title, input.description, input.id]
      );
      return "Todo Updated Successfully!";
    } catch (error) {
      throw new Error("Error while updating a todo.");
    }
  }

  async DeleteTodo(input: DeleteTodoInputType) {
    try {
      await this.getDb()?.query("delete from todos where id=?", [input.id]);
      return "Todo Deleted Successfully!";
    } catch (error) {
      throw new Error("Error while deleting a todo.");
    }
  }
}

const TodoController = new Todos();

export default TodoController;
