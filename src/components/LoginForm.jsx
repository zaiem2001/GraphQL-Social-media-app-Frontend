import React from "react";

import { Container, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Container sx={{ flex: 1 }} className="form">
      <div className="form-wrapper">
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <TextField
              error={!!errors.email}
              id="standard-basic"
              label="Email"
              variant="standard"
              {...register("email", {
                required: true,
              })}
              helperText={errors.email && "Email is required"}
            />
          </div>

          <div className="password">
            <TextField
              error={!!errors.password}
              id="standard-basic"
              label="Password"
              variant="standard"
              {...register("password", { required: true })}
              type="password"
              helperText={errors.password && "Password is required"}
            />
          </div>

          <div className="register-actions">
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
