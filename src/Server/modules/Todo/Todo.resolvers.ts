import TodoController from "@/Server/Controller/Todo.controller";
import {
  CreateTodoInputType,
  DeleteTodoInputType,
  UpdateTodoInputType,
} from "@/Types/TodoTypes";

export const TodoResolvers = {
  Query: {
    getTodos: async (_: any, args: any, context: any) => {
      return await TodoController.FetchTodos();
    },
  },

  Mutation: {
    addTodo: async (_: any, { input }: { input: CreateTodoInputType }) => {
      return await TodoController.CreateTodo(input);
    },
    updateTodo: async (_: any, { input }: { input: UpdateTodoInputType }) => {
      return await TodoController.UpdateTodo(input);
    },
    deleteTodo: async (_: any, { input }: { input: DeleteTodoInputType }) => {
      return await TodoController.DeleteTodo(input);
    },
  },

  Date: {
    serialize: (value: Date) => new Date(value),
    parseValue: (value: Date) => new Date(value),
  },
};
