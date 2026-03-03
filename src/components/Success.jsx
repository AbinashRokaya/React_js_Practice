import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import "./Success.css";

function Success() {
  const { success, setIsSucces, setSucess, IsSuccess } =
    useContext(LoginContext);
  //   console.log("success", success);
  //   console.log("issucces", IsSuccess);

  return (
    <div className={`${IsSuccess ? "success-div" : "NoSuccess"}`}>
      {/* // <div className="success-div"> */}
      {success}
    </div>
  );
}

export default Success;
