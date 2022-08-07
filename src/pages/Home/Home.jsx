import React, { useEffect } from "react";
import { useLazyLoadQuery } from "react-relay";
import { Link } from "react-router-dom";

import CurrentUser from "../../components/CurrentUser";
import { getAllUsersQuery } from "../../Queries/User";

import "./home.css";

const Home = ({ user, setUser }) => {
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("gql-user")));
  }, []);

  const data = useLazyLoadQuery(getAllUsersQuery);

  return (
    <div className="home">
      <div className="current-user-wrapper">
        <CurrentUser
          name={user?.name}
          email={user?.email}
          profile={user?.profilePic}
          isAdmin={user?.isAdmin}
        />

        <div className="posts-actions">
          <Link to="/post/view">
            <div className="posts-btn view-post-button">
              <span>View Posts</span>
            </div>
          </Link>

          <Link to="/post/create">
            <div className="posts-btn create-post-button">
              <span>Create Post</span>
            </div>
          </Link>
        </div>
      </div>

      <br />
      <div className="other-user-wrapper">
        <div className="other-title">
          <span>Other Users </span>
        </div>

        {data?.users && data.users?.length && (
          <div className="other-users">
            {data.users?.map(
              (item) =>
                user?.id !== item.id && (
                  <CurrentUser
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    profile={item.profilePic}
                    isAdmin={item.isAdmin}
                    id={item.id}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
