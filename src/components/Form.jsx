import React, { useEffect } from "react";

import { Container, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

const RegisterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    watch("password");
  }, [watch]);

  return (
    <Container sx={{ flex: 1 }} className="form">
      <div className="form-wrapper">
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <TextField
              error={!!errors.name}
              id="standard-basic"
              label="Name"
              variant="standard"
              {...register("name", { required: true })}
              helperText={errors.name && "Name is required"}
              type="text"
            />
          </div>

          <div className="email">
            <TextField
              error={!!errors.email}
              id="standard-basic"
              label="Email"
              variant="standard"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              })}
              helperText={errors.email && "Invalid email"}
            />
          </div>

          <div className="profile">
            <TextField
              error={!!errors.profilePic}
              id="standard-basic"
              label="Profile Picture"
              variant="standard"
              {...register("profilePic", {
                required: true,
                pattern: /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i,
              })}
              helperText={errors.profilePic && "Profile Picture is required"}
            />
          </div>

          <div className="password">
            <TextField
              error={!!errors.password}
              id="standard-basic"
              label="Password"
              variant="standard"
              {...register("password", { minLength: 8 })}
              type="password"
              helperText={
                errors.password && "Password must be at least 8 characters"
              }
            />
            <TextField
              error={!!errors.confirmPassword}
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
              type="password"
              helperText={errors.confirmPassword && "Passwords must match"}
            />
          </div>

          <div className="register-actions">
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default RegisterForm;
