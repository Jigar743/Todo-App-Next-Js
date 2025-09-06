import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    users: getAllUsers {
      id
      firstName
      lastName
      email
      profilePic
      createdAt
      updatedAt
      phoneNumber
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query ($getUserByIdId: Int!) {
    currentUser: getUserById(id: $getUserByIdId) {
      id
      firstName
      lastName
      email
      profilePic
      createdAt
      updatedAt
      phoneNumber
    }
  }
`;
