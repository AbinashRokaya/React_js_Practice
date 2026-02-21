import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { userData, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  if (!userData) return <div>Not logged in.</div>;
  const handdleLogout = () => {
    console.log("abinash logout");
    logout();
    navigate("/");
  };

  return (
    <div>
      <h3>User Information</h3>
      <ul>
        <li>Name: {userData.user_detail.name}</li>
        <li>Email: {userData.user_detail.email}</li>
        <li>Role: {userData.user_detail.role}</li>
        <li>Address: {userData.user_detail.address}</li>
      </ul>
      <button onClick={handdleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
