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
      const [rows] = await this.DbInstance?.query("select * from todos");
      return rows;
    } catch (error) {
      throw new Error("Error while fetching todos.");
    }
  }

  async CreateTodo(input: CreateTodoInputType) {
    try {
      await this.DbInstance?.query(
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
      await this.DbInstance?.query(
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
      await this.DbInstance?.query("delete from todos where id=?", [input.id]);
      return "Todo Deleted Successfully!";
    } catch (error) {
      throw new Error("Error while deleting a todo.");
    }
  }
}

const TodoController = new Todos();

export default TodoController;
