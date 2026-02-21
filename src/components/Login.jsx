import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState("");
  const { login } = useContext(LoginContext);

  const nagavitor = useNavigate();
  // console.log("Abinash");

  const handlelogin = (e) => {
    e.preventDefault();
    if (!name || !password) return;

    const formData = new URLSearchParams();
    formData.append("username", name);
    formData.append("password", password);

    console.log(name, password);

    fetch("https://blog-9rd8.onrender.com/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    })
      .then((response) => {
        return response.json().then((data) => {
          if (!response.ok) {
            throw data;
          }
          return data;
        });
      })
      .then((data) => {
        console.log("Server response:", data);

        login(data);
        nagavitor("/home"); // redirect after login
      })
      .catch((err) => {
        console.log(err);

        if (err.detail) {
          setError(err.detail);
        } else {
          setError("Login failed");
        }
      });
  };

  return (
    <div className="login-main-dev">
      <form action="#" onSubmit={handlelogin}>
        {errors && <div className="error">{errors && <p>{errors}</p>}</div>}

        <div>
          <label htmlFor="" className="label">
            Name
          </label>
          <input
            type="text"
            className="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            password
          </label>
          <input
            type="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
