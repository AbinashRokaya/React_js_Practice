import React, { useContext } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function Header() {
  const { userData, logout, loginStatus } = useContext(LoginContext);
  const handdleLogout = () => {
    console.log("abinash logout");
    logout();
  };
  return (
    <header className="header">
      <div className="logo">Abinash</div>
      <div className="nav">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${isActive ? "isActive" : "notActive"} navlink`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "isActive" : "notActive"} navlink`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "isActive" : "notActive"} navlink`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${isActive ? "isActive" : "notActive"} navlink`
          }
        >
          Dashboard
        </NavLink>
        {loginStatus ? (
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "isActive" : "notActive"} navlink`
            }
            onClick={handdleLogout} // only for logout
          >
            LogOut
          </NavLink>
        ) : (
          <NavLink
            to="/" // route to login page
            className={({ isActive }) =>
              `${isActive ? "isActive" : "notActive"} navlink`
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
