import React, { useState } from "react";
import { useMutation } from "react-relay";
import { Button, TextField } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import { PostCommentMutation, PostLikeMutation } from "../../Queries/Post";

const dummy_image = "https://i.pravatar.cc/300";

const Post = ({
  post: {
    image = dummy_image,
    caption = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste exercitationem ipsum dolorem!",
    likes,
    comments,
    id,
  },
}) => {
  const currentUser = JSON.parse(localStorage.getItem("gql-user")) || null;

  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const [commit] = useMutation(PostLikeMutation);

  const [commentOnPost] = useMutation(PostCommentMutation);

  const handleLike = () => {
    commit({
      variables: {
        postId: id,
      },
    });
  };

  const alreadyLiked = likes.length
    ? likes?.some((like) => like.id === currentUser?.id)
    : false;

  const handleComment = (postId) => {
    if (!comment.length) {
      setError(true);
      return;
    }

    commentOnPost({
      variables: {
        postId,
        comment,
      },
      onCompleted: () => {
        setComment("");
        setError(false);
      },
    });
  };

  return (
    <div className="post">
      <div className="left">
        <div className="post-image">
          <img src={image} alt="avatar" />
        </div>

        <div className="post-info">
          <div className="post-content">
            <span>{caption}</span>{" "}
          </div>

          <div className="post-likes">
            <span>Likes :</span>
            <span>{likes?.length}</span>
          </div>

          <div className="post-comments">
            <span>Comments :</span>
            <span>{comments?.length}</span>
          </div>

          <div className="post-like-btn">
            <Button variant="contained" onClick={handleLike}>
              {alreadyLiked ? (
                <FavoriteOutlinedIcon style={{ color: "crimson" }} />
              ) : (
                <FavoriteBorder />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="post-comments-container">
          {comments.length ? (
            comments.map((comment) => (
              <div className="user-comment">
                <div className="user-comment-image">
                  <img src={comment.profilePic || dummy_image} alt="user" />
                </div>
                <div className="commented-by">{comment.name}</div>
                <div className="comment">{comment.comment}</div>
              </div>
            ))
          ) : (
            <div className="no-comments">No comments yet</div>
          )}
        </div>

        <div className="comment-input">
          <TextField
            id="standard-basic"
            label="Comment"
            variant="standard"
            error={error}
            helperText={error ? "Comment cannot be empty" : ""}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <SendRoundedIcon
            onClick={() => handleComment(id)}
            className="sendComment"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
