import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthLogout() {
  {
    const navigate = useNavigate();
    const app = window.location.pathname;

    useEffect(() => {
      if (app === "/logout") {
        if (
          !localStorage.getItem("token") &&
          localStorage.getItem("role") !== "admin"
        ) {
          navigate("/login");
        }
        if (
          !localStorage.getItem("token") &&
          localStorage.getItem("role") !== "user"
        ) {
          navigate("/login");
        }
      }
    }, []);
  }
}

export default AuthLogout;
