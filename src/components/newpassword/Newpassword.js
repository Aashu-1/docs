import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Newpassword() {
  const navigate = useNavigate();
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [matchError, setmatchError] = useState("");
  const email = localStorage.getItem("email");
  const [isPasswordValid, setisPasswordValid] = useState(false);
  const role = localStorage.getItem("roleLogin");

  //------------------------------------------------------------------------------------------------------------

  //VALIDATION FOR PASSWORD
  const passwordValid = () => {
    const regWeakPassword = /[a-zA-Z0-9]{8,20}/;
    const regStrongPassword = /^(\.|_)[a-zA-Z0-9.-_@]{8,20}/;
    const testWeakpassword = regWeakPassword.test(newPassword);
    const testStrongpassword = regStrongPassword.test(newPassword);
    if (testStrongpassword) {
      setpasswordError("");
      setisPasswordValid(true);
    } else if (testWeakpassword) {
      setpasswordError(
        "Weak password,At starting Try . or _ for secured password"
      );
      setisPasswordValid(false);
    } else if (newPassword === "") {
      setpasswordError("please fill the required field");
    } else {
      setpasswordError("password must be of 8 characters");
      setisPasswordValid(false);
    }
  };

  //------------------------------------------------------------------------------------------------------------

  const changePassword = () => {
    if (
      newPassword !== "" &&
      confirmPassword !== "" &&
      newPassword === confirmPassword &&
      role === "user"
    ) {
      const updatePassword = {
        condition_obj: {
          email: email,
        },
        newdata_obj: {
          password: newPassword,
        },
      };
      //CHANGING PASSWORD FOR THE USER OR ADMIN------------------------------------------------------------------------------->
      axios
        .patch("http://localhost:3001/user/update", updatePassword)
        .then((response) => {
          swal(
            "Congratulations!",
            "Your Password has been changed successfully",
            "success"
          );
          navigate("/login");
        })
        .catch((err) => {
          swal(
            "Oops!",
            "Can't Change Password, Please try with different email ",
            "error"
          );
          navigate("/login");
          console.log(err);
        });
    } else if (newPassword !== confirmPassword) {
      setmatchError("Password doesn't match");
    } else if (
      newPassword !== "" &&
      confirmPassword !== "" &&
      newPassword === confirmPassword &&
      role === "doctor"
    ) {
      //CHANGING PASSWORD FOR THE DOCTOR------------------------------------------------------------------------------->
      const updatePassword = {
        condition_obj: {
          email: email,
        },
        newdata_obj: {
          password: newPassword,
        },
      };
      //CHANGING PASSWORD FOR THE USER OR ADMIN------------------------------------------------------------------------------->
      axios
        .patch("http://localhost:3001/doctor/update", updatePassword)
        .then((response) => {
          swal(
            "Congratulations!",
            "Your Password has been changed successfully",
            "success"
          );
          navigate("/login");
        })
        .catch((err) => {
          swal(
            "Oops!",
            "Can't Change Password, Please try with different email ",
            "error"
          );
          navigate("/login");
          console.log(err);
        });
    } else {
      setpasswordError("Please fill the required field");
    }
  };

  return (
    <>
      <div>
        <div className="container-xxl py-5">
          <h1 className="text-center">Set Your Password Here !</h1>
          <form>
            <div className="form-group my-2">
              <label htmlFor="exampleInputPassword1">New Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={newPassword}
                onChange={(e) => {
                  setnewPassword(e.target.value);
                }}
                onBlur={passwordValid}
              />
            </div>
            <span style={{ color: "red" }}>{passwordError}</span> <br />
            <div className="form-group my-2">
              <label htmlFor="exampleInputPassword1">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>
            <span style={{ color: "red" }}>{matchError}</span> <br />
            <br />
            <button
              type="button"
              className="btn btn-primary rounded-pill"
              onClick={changePassword}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newpassword;
