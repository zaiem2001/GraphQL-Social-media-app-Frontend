import React from "react";
import { Button } from "@mui/material";

import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { useParams } from "react-router";
import { PostPaginationFragment } from "../../Queries/Post";
import { getUserPostsQuery, UserDetailsQuery } from "../../Queries/User";
import Details from "./Details";
import Post from "./Post";

import "./user.css";

const User = () => {
  const { userId } = useParams();

  const userData = useLazyLoadQuery(
    UserDetailsQuery,
    {
      userId,
    },
    {
      fetchPolicy: "network-only",
    }
  );

  const PostData = useLazyLoadQuery(
    getUserPostsQuery,
    {
      userId: userId,
      first: 2,
      page: 1,
    },
    {
      fetchPolicy: "network-only",
    }
  );

  const {
    data: {
      user: { posts },
    },
    hasNext,
    loadNext,
  } = usePaginationFragment(PostPaginationFragment, PostData);

  return (
    <div className="user-details">
      {userData && userData.user && (
        <>
          <Details userData={userData} />

          <div className="posts-details">
            <span className="post-title">Posts :</span>

            {posts?.edges?.length ? (
              <div className="posts">
                {posts?.edges?.map((item) => (
                  <Post key={item.node?.id} post={item.node} />
                ))}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => loadNext(2)}
                  disabled={!hasNext}
                >
                  Load Next 2
                </Button>
              </div>
            ) : (
              <>No Posts</>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default User;
