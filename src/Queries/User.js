// import { graphql } from "react-relay";
import graphql from "babel-plugin-relay/macro";

export const RegisterMutation = graphql`
  mutation UserMutation($input: createUserInput!) {
    user: createUser(input: $input) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;

export const UserLoginMutation = graphql`
  mutation UserLoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        isAdmin
        name
        email
        profilePic
      }
    }
  }
`;

export const UserDetailsQuery = graphql`
  query UserDetailsQuery($userId: ID!) {
    user(id: $userId) {
      ...User_user
    }
  }
`;

export const getUserPostsQuery = graphql`
  query UserPostsQuery($userId: ID!, $first: Int, $page: Int, $after: String) {
    ...PostDetails_query
  }
`;

export const getAllUsersQuery = graphql`
  query UserAllQuery {
    users {
      id
      email
      name
      profilePic
      isAdmin
      followers {
        name
      }
      followings {
        name
      }
    }
  }
`;

export const followUnfollowMutation = graphql`
  mutation UserFollowMutation($userId: String!) {
    followUnfollowUser(userId: $userId) {
      ...User_user
    }
  }
`;
