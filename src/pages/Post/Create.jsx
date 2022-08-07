import React from "react";

import { Container, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "./post.css";
import { useMutation } from "react-relay";
import { CreatePostMutation } from "../../Queries/Post";
import { Tost } from "../../components/Tost";
import { useNavigate } from "react-router";

const Create = () => {
  const [commit] = useMutation(CreatePostMutation);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { caption, image } = data;

    commit({
      variables: {
        input: {
          image,
          caption,
        },
      },

      onCompleted(data, error) {
        if (data && data.post) {
          navigate("/");
        }

        if (error) {
          console.log(error);
          Tost(error[0].message, 3);
        }
      },
    });
  };

  return (
    <Container sx={{ flex: 1 }} className="post-form">
      <div className="form-wrapper">
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <div className="caption">
            <TextField
              error={!!errors.caption}
              id="standard-basic"
              label="caption"
              variant="standard"
              {...register("caption", {
                required: true,
              })}
              helperText={errors.caption && "Caption is required"}
            />
          </div>

          <div className="image">
            <TextField
              error={!!errors.image}
              id="standard-basic"
              label="Image"
              variant="standard"
              {...register("image", {
                required: true,
                pattern: /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i,
              })}
              helperText={errors.image && "Image is required"}
            />
          </div>

          <div className="register-actions">
            <Button variant="contained" color="primary" type="submit">
              Post
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Create;
