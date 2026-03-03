import React from "react";
import "./Error.css";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Error() {
  const { setIsError, setError, errors, isError } = useContext(LoginContext);
  return (
    <div className={` ${isError ? "error-div" : "Nodisplay-error"}`}>
      {errors}
    </div>
  );
}

export default Error;
