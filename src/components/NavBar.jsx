import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

import "./navbar.css";

const NavBar = ({ handleLogout, user }) => {
  return (
    <div className="navbar">
      <div className="links-container">
        {user && (
          <div className="home-link">
            <NavLink to="/">Home</NavLink>
          </div>
        )}

        {!user && (
          <div className="login-link">
            <NavLink to="/login">Login</NavLink>
          </div>
        )}

        {user && (
          <div className="logout-link">
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
