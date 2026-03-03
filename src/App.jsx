import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Header from "./components/Header/Header";
import Success from "./components/Success";

function App() {
  // console.log("Abinash");
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("userdata");
  //   console.log(storedUser);

  //   // if (storedUser) {
  //   //   setUserdata(JSON.parse(storedUser));
  //   // }
  // }, []);
  return (
    <div>
      <Header />
      <Success />
      <Error />

      <Outlet />
    </div>
  );
}

export default App;
