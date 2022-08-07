import React from "react";
import { Button } from "@mui/material";
import { useFragment, useMutation } from "react-relay";

import { followUnfollowMutation } from "../../Queries/User";
import { Userfragment } from "./User.fragment";

const Details = ({ userData }) => {
  const fragData = useFragment(Userfragment, userData?.user);

  const [commit] = useMutation(followUnfollowMutation);

  const handleFollow = (userId) => {
    commit({
      variables: {
        userId,
      },

      onCompleted(data, err) {
        console.log("data", data);
        console.log(err);
      },
    });
  };

  return (
    <div className="user-info-details">
      <div className="user-details-avatar">
        <img src={fragData?.profilePic} alt="avatar" />
      </div>

      <div className="user-details-info">
        <div className="basic-details">
          <div className="user-details-name">
            <span>Name: </span>
            <span>{fragData?.name}</span>
          </div>
          <div className="user-details-name">
            <span>Email: </span>
            <span>{fragData?.email}</span>
          </div>
          <div className="user-details-name">
            <span>Role: </span>
            <span>{fragData?.isAdmin ? "Admin" : "User"}</span>
          </div>
        </div>

        <div className="follower-details">
          <div className="followers">
            <span>Followers :</span>
            <span>{fragData?.followers.length}</span>
          </div>
          <div className="followings">
            <span>Followings :</span>
            <span>{fragData?.followings.length}</span>
          </div>
        </div>

        <div className="follow-button">
          <Button
            variant="contained"
            color={fragData?.alreadyFollowing ? "warning" : "primary"}
            onClick={() => handleFollow(fragData?.id)}
          >
            {fragData?.alreadyFollowing ? "Unfollow" : "Follow"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
