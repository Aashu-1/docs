import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isPasswordValid, setisPasswordValid] = useState(false);
  const [isuserChecked, setisuserChecked] = useState(false);
  const [isdoctorrChecked, setisdoctorrChecked] = useState(false);
  console.log(isuserChecked, isdoctorrChecked);
  const [roleLogin, setroleLogin] = useState("");

  const [redirectOnForget, setredirectOnForget] = useState("/login");

  //FUNCTION FOR CONDITIONAL RENDERING ON THE FORGET PWD -----------------------------------------------------------------------------------------------

  const redirectFP = () => {
    if (email === "") {
      setemailError("Email must required for forgetting password");
      setredirectOnForget("/login");
    } else if (roleLogin === "") {
      setredirectOnForget("/login");
      alert("please check the checkbox");
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("roleLogin", roleLogin);

      setredirectOnForget("/forgetpassword");
    }
  };
  //-----------------------------------------------------------------------------------

  //VALIDATION FOR EMAIL

  const emailValid = () => {
    const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    const testEmail = regEmail.test(email);
    if (testEmail) {
      setisEmailValid(true);
      setemailError("");
    } else if (email === "") {
      setemailError("please fill the required field");
    } else {
      setemailError("please enter a valid email");
      setisEmailValid(false);
    }
  };

  //------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------

  //VALIDATION FOR PASSWORD
  const passwordValid = () => {
    const regWeakPassword = /[a-zA-Z0-9]{8,20}/;
    const regStrongPassword = /^(\.|_)[a-zA-Z0-9.-_@]{8,20}/;
    const testWeakpassword = regWeakPassword.test(password);
    const testStrongpassword = regStrongPassword.test(password);
    if (testStrongpassword) {
      setpasswordError("");
      setisPasswordValid(true);
    } else if (testWeakpassword) {
      setpasswordError(
        "Weak password,At starting Try . or _ for secured password"
      );
      setisPasswordValid(false);
    } else if (password === "") {
      setpasswordError("please fill the required field");
    } else {
      setpasswordError("password must be of 8 characters");
      setisPasswordValid(false);
    }
  };

  //------------------------------------------------------------------------------------

  const login = () => {
    if (email === "") {
      setemailError("please fill the required field");
      setisEmailValid(false);
    }
    if (password === "") {
      setisPasswordValid(false);
      setpasswordError("please fill the required field");
    }

    if (isEmailValid && isPasswordValid && isuserChecked) {
      const condition_obj = {
        email,
        password,
      };
      axios
        .post("http://localhost:3001/user/login", condition_obj)
        .then((response) => {
          console.log(response);
          localStorage.setItem("name", response.data.userDetails[0].name);
          localStorage.setItem("email", response.data.userDetails[0].email);
          localStorage.setItem("gender", response.data.userDetails[0].gender);
          localStorage.setItem("city", response.data.userDetails[0].city);
          localStorage.setItem("phone", response.data.userDetails[0].phone);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.userDetails[0].role);
          alert(`welcome back ${localStorage.getItem("role")}`);

          if (localStorage.getItem("role") === "user") {
            navigate("/user");
          } else if (localStorage.getItem("role") === "admin") {
            navigate("/admin");
          }
        })
        .catch((error) => {
          console.log(error.response);
          localStorage.setItem("email", email);
          alert(error.response.data.msg);

          setPassword("");
        });
    } else if (isEmailValid && isPasswordValid && isdoctorrChecked) {
      const condition_obj = {
        email,
        password,
      };
      axios
        .post("http://localhost:3001/doctor/login", condition_obj)
        .then((response) => {
          console.log(response);
          console.log(response.data.doctorDetails[0].name);
          localStorage.setItem("name", response.data.doctorDetails[0].name);
          localStorage.setItem("email", response.data.doctorDetails[0].email);
          localStorage.setItem("city", response.data.doctorDetails[0].city);
          localStorage.setItem("phone", response.data.doctorDetails[0].phone);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.doctorDetails[0].role);
          alert(`welcome back ${localStorage.getItem("role")}`);
          navigate("/doctor");
        })
        .catch((error) => {
          localStorage.setItem("email", email);
          alert(error.response.data.msg);

          setPassword("");
        });
    } else {
      alert("cannot login, please check the given credentials");
    }
  };
  return (
    <div>
      <div className="container-xxl py-5">
        <h1 className="text-center">Login Here !</h1>

        {/* <!-- End Login Form --> */}
        <form>
          <div className="form-group my-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={emailValid}
            />
          </div>
          <span style={{ color: "red" }}>{emailError}</span>
          <div className="form-group my-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={passwordValid}
            />
          </div>
          <span style={{ color: "red" }}>{passwordError}</span> <br />
          <br />
          <Link
            className="my-2 border"
            to={redirectOnForget}
            onClick={redirectFP}
          >
            forget password ?
          </Link>
          <br />
          <br />
          <div className="mb-3">
            <label className="form-label">Login as</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="loginType"
                id="admin"
                value="user"
                defaultChecked={isuserChecked}
                onClick={() => {
                  setisdoctorrChecked(false);
                  setisuserChecked(true);
                  setroleLogin("user");
                }}
                required
              />
              <label className="form-check-label" htmlFor="admin">
                User / Admin
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="loginType"
                id="user"
                value="user"
                defaultChecked={isdoctorrChecked}
                onClick={() => {
                  setisdoctorrChecked(true);
                  setisuserChecked(false);
                  setroleLogin("doctor");
                }}
                required
              />
              <label className="form-check-label" htmlFor="user">
                Doctor
              </label>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            onClick={login}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
