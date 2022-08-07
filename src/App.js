import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import "./index.css";
import NavBar from "./components/NavBar";
import User from "./pages/SingleUser/User";
import Create from "./pages/Post/Create";
import View from "./pages/Post/View";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("gql-user"))
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("gql-user");
    localStorage.removeItem("gql-token");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <NavBar handleLogout={handleLogout} user={user} />
      <div className="main-container">
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />

          <Route path="/users/:userId" element={<User />} />

          <Route path="post">
            <Route path="view" element={<View user={user} />} />
            <Route path="create" element={<Create />} />
          </Route>

          <Route path="/login" element={<Login />} user={user} />
          <Route path="/register" element={<Register />} user={user} />
        </Routes>
      </div>
    </>
  );
}

export default App;
