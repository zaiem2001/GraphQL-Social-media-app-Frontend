import React from "react";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router";

import RegisterForm from "../../components/Form";
import SideDetails from "../../components/SideDetails";
import { RegisterMutation } from "../../Queries/User";

import "./register.css";
import { Tost } from "../../components/Tost";

const Register = () => {
  const navigate = useNavigate();

  const [commit] = useMutation(RegisterMutation);

  const handleRegister = (data) => {
    const { name, email, password, profilePic } = data;

    commit({
      variables: {
        input: {
          name,
          email,
          password,
          profilePic,
        },
      },
      onCompleted(data, err) {
        if (data.user) {
          navigate("/login");
        }
        if (err && err.length) {
          Tost(err[0].message, 3);
        }
      },
    });
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <SideDetails title="Register" />

        <RegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default Register;
