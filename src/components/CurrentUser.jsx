import React from "react";
import { NavLink } from "react-router-dom";

const CurrentUser = ({ id, profile, name, email, isAdmin }) => {
  return (
    <div className="current-user">
      <NavLink to={`/users/${id}`}>
        <div className="current-user-avatar">
          <img src={profile} alt="avatar" />
        </div>
      </NavLink>

      <div className="current-user-info">
        <div className="current-user-name">
          <span>Name: </span>
          <span>{name}</span>
        </div>

        <div className="current-user-email">
          <span>Email: </span>

          <span>{email}</span>
        </div>

        <div className="current-user-role">
          <span>Role: </span>

          <span>{isAdmin ? "Admin" : "User"}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
