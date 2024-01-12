import { TodoTypeDefs } from "./Todo/Todo.schema";
import { TodoResolvers } from "./Todo/Todo.resolvers";
import { UserTypeDefs } from "./User/User.schema";
import { UserResolvers } from "./User/User.resolvers";

export const typeDefs = [TodoTypeDefs, UserTypeDefs];

export const resolvers = [TodoResolvers, UserResolvers];
