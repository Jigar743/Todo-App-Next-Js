import { DbConnection } from "@/Server/Models/DbConnection";

export const Resolvers = {
  Query: {
    getTodos: async (_parent: any, args: any, context: any) => {
      const db = await DbConnection();
      const [rows] = await db.query("select * from todos");
      return rows;
    },
  },

  Mutation: {
    addTodo: async (
      _: any,
      { input }: { input: { title: string; description: string } }
    ) => {
      const db = await DbConnection();
      await db.query("insert into todos (Title, Description) values (?, ?)", [
        input.title,
        input.description,
      ]);
      return "data added successfully!!";
    },
    updateTodo: async (
      _: any,
      { input }: { input: { id: Number; title: string; description: string } }
    ) => {
      const db = await DbConnection();
      await db.query("update todos set title=?, description=? where id=?", [
        input.title,
        input.description,
        input.id,
      ]);
      return "Todo Updated Successfully";
    },
    deleteTodo: async (_: any, { input }: { input: { id: Number } }) => {
      const db = await DbConnection();
      await db.query("delete from todos where id=?", [input.id]);
      return "Todo Deleted Successfully";
    },
  },

  Date: {
    serialize: (value: Date) => new Date(value),
    parseValue: (value: Date) => new Date(value),
  },
};
