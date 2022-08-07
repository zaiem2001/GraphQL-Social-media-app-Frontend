import React from "react";
import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { Button } from "@mui/material";

import { getUserPostsQuery } from "../../Queries/User";
import { PostPaginationFragment } from "../../Queries/Post";

import Post from "../SingleUser/Post";

const View = ({ user }) => {
  const data = useLazyLoadQuery(
    getUserPostsQuery,
    {
      userId: user.id,
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
    isLoadingNext,
  } = usePaginationFragment(PostPaginationFragment, data);

  return (
    <div className="posts view-posts">
      {posts?.edges?.length ? (
        posts?.edges.map((item) => <Post key={item.cursor} post={item.node} />)
      ) : (
        <>No Posts found</>
      )}

      <Button
        onClick={() => loadNext(3)}
        disabled={!hasNext}
        variant="contained"
      >
        <div className="spinner">
          {isLoadingNext && (
            <div className="bounce">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          )}
          Load Next
        </div>
      </Button>
    </div>
  );
};

export default View;
