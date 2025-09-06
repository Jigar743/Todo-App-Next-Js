import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($input: AddTodoInput!) {
    message: addTodo(input: $input)
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($input: UpdateTodoInput) {
    message: updateTodo(input: $input)
  }
`;

export const DELETE_TODO = gql`
  mutation Deletetodo($input: DeleteTodoInput) {
    message: deleteTodo(input: $input)
  }
`;
