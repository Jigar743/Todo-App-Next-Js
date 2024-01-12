import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation createUser($input: CreateUserInputType!) {
    message: createUser(input: $input)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInputType!) {
    message: updateUser(input: $input)
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($input: DeleteUserInputType!) {
    message: deleteUser(input: $input)
  }
`;
