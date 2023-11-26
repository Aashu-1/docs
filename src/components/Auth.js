import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  return (
    <>
      {useEffect(() => {
        const app = window.location.pathname;
        if (app === "/admin" || app === "/manageuser") {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("role") !== "admin"
          ) {
            navigate("/logout");
          }
        } else if (app === "/user") {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("role") !== "user"
          ) {
            navigate("/logout");
          }
        } else if (app === "/otpverification") {
          navigate("/otpverification");
        } else {
          if (localStorage.getItem("role") === "admin") {
            navigate("/admin");
          } else if (localStorage.getItem("role") === "user") {
            navigate("/user");
          } else {
            navigate("/");
          }
        }
      }, [])}
    </>
  );
}

export default Auth;
