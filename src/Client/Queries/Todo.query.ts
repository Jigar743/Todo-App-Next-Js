import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query {
    todos: getTodos {
      id
      Title
      Description
      CreatedAt
      UpdatedAt
      Completed
    }
  }
`;
