import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($input: AddTodoInput!) {
    addTodo(input: $input)
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($input: UpdateTodoInput) {
    updateTodo(input: $input)
  }
`;

export const DELETE_TODO = gql`
  mutation Deletetodo($input: DeleteTodoInput) {
    deleteTodo(input: $input)
  }
`;
