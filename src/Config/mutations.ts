import { gql } from "@apollo/client";

export const ADD_MESSAGE = gql`
  mutation SayHello($message: String!) {
    addMessage(message: $message)
  }
`;
