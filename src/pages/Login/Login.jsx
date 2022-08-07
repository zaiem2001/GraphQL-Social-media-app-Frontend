import React from "react";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router";

import LoginForm from "../../components/LoginForm";
import SideDetails from "../../components/SideDetails";
import { Tost } from "../../components/Tost";
import { UserLoginMutation } from "../../Queries/User";

const Login = () => {
  const [commit] = useMutation(UserLoginMutation);

  const navigate = useNavigate();

  const handleLogin = (data) => {
    const { email, password } = data;

    commit({
      variables: {
        email,
        password,
      },

      onCompleted(data,error) {
        if (data && data?.login) {
          localStorage.setItem("gql-token", data.login.token);
          localStorage.setItem("gql-user", JSON.stringify(data.login.user));
          navigate("/");
        }

        if (error) {
          Tost(error[0].message, 3);
        }
      },
    });
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <SideDetails title="Login" />

        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
