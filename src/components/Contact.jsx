import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Contact() {
  const { loginStatus } = useContext(LoginContext);
  console.log(loginStatus);
  return <div>Contact</div>;
}

export default Contact;
