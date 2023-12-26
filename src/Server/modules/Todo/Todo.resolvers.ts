import Todo from "@/Server/Controller/Todo.controller";
import {
  CreateTodoInputType,
  DeleteTodoInputType,
  UpdateTodoInputType,
} from "@/Types/TodoTypes";

export const TodoResolvers = {
  Query: {
    getTodos: async (_parent: any, args: any, context: any) => {
      return await Todo.fetchTodos();
    },
  },

  Mutation: {
    addTodo: async (_: any, { input }: { input: CreateTodoInputType }) => {
      return await Todo.CreateTodo(input);
    },
    updateTodo: async (_: any, { input }: { input: UpdateTodoInputType }) => {
      return await Todo.UpdateTodo(input);
    },
    deleteTodo: async (_: any, { input }: { input: DeleteTodoInputType }) => {
      return await Todo.DeleteTodo(input);
    },
  },

  Date: {
    serialize: (value: Date) => new Date(value),
    parseValue: (value: Date) => new Date(value),
  },
};
