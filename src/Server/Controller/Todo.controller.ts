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

  async fetchTodos() {
    if (this.DbInstance !== null) {
      const [rows] = await this.DbInstance.query("select * from todos");
      return rows;
    }
  }

  async CreateTodo(input: CreateTodoInputType) {
    if (this.DbInstance !== null) {
      await this.DbInstance.query(
        "insert into todos (Title, Description) values (?, ?)",
        [input.title, input.description]
      );
      return "Todo Created successfully!";
    }
  }

  async UpdateTodo(input: UpdateTodoInputType) {
    if (this.DbInstance !== null) {
      await this.DbInstance.query(
        "update todos set title=?, description=? where id=?",
        [input.title, input.description, input.id]
      );
      return "Todo Updated Successfully!";
    }
  }

  async DeleteTodo(input: DeleteTodoInputType) {
    if (this.DbInstance !== null) {
      await this.DbInstance.query("delete from todos where id=?", [input.id]);
      return "Todo Deleted Successfully!";
    }
  }
}

const Todo = new Todos();

export default Todo;
