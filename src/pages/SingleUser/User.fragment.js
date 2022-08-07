import graphql from "babel-plugin-relay/macro";

export const Userfragment = graphql`
  fragment User_user on User {
    id
    name
    email
    isAFollower
    alreadyFollowing
    profilePic
    isAdmin
    followers {
      name
      profilePic
    }
    followings {
      name
      profilePic
    }
  }
`;
