import UserController from "@/Server/Controller/User.controller";
import {
  CreateUserInputType,
  DeleteUserInputType,
  UpdateUserInputType,
  UpdateUserPasswordInputType,
} from "@/Types/UserTypes";

export const UserResolvers = {
  Query: {
    getUserById: async (_: any, args: any, context: any) => {
      return;
    },
    getAllUsers: async (_: any, args: any, context: any) => {
      return await UserController.fetchAllUsers();
    },
  },

  Mutation: {
    createUser: async (_: any, { input }: { input: CreateUserInputType }) => {
      return await UserController.signupUser(input);
    },
    updateUser: async (_: any, { input }: { input: UpdateUserInputType }) => {
      return "User Successfully Updated!!";
    },
    deleteUser: async (_: any, { input }: { input: DeleteUserInputType }) => {
      return "User Successfully Deleted!!";
    },
    updateUserPassword: async (
      _: any,
      { input }: { input: UpdateUserPasswordInputType }
    ) => {
      return "Successfully Created!!";
    },
  },

  Date: {
    serialize: (value: Date) => new Date(value),
    parseValue: (value: Date) => new Date(value),
  },
};
