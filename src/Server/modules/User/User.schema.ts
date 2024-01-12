import gql from "graphql-tag";

export const UserTypeDefs = gql`
  scalar Date

  type Query {
    getUserById(id: Int!): User
    getAllUsers: [User!]
  }

  type Mutation {
    createUser(input: CreateUserInputType): String!
    updateUser(input: UpdateUserInputType): String!
    deleteUser(input: DeleteUserInputType): String!
    updateUserPassword(input: UpdateUserPasswordInputType): String!
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    profilePic: String
    createdAt: Date!
    updatedAt: Date!
    phoneNumber: String
  }

  input CreateUserInputType {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UpdateUserInputType {
    id: Int!
    firstName: String
    lastName: String
    email: String
    profilePic: String
    phoneNumber: String
  }

  input DeleteUserInputType {
    id: Int!
  }

  input UpdateUserPasswordInputType {
    id: Int!
    previousPassword: String!
    newPassword: String!
  }
`;
