import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function CpAdmin() {
  const navigate = useNavigate();
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
  const email = localStorage.getItem("email");
  const [isValidpassword, setisValidpassword] = useState(false);
  const [passwordError, setpasswordError] = useState("");

  //-----------------------------------------------------------------------------
  //   FUNCTION FOR VALIDATING PASSWORD

  const newPassValid = () => {
    const regWeakPassword = /[a-zA-Z0-9]{8,20}/;
    const regStrongPassword = /^(\.|_)[a-zA-Z0-9.-_@]{8,20}/;
    const testWeakpassword = regWeakPassword.test(newPassword);
    const testStrongpassword = regStrongPassword.test(newPassword);
    if (testStrongpassword) {
      setpasswordError("");
      setisValidpassword(true);
    } else if (testWeakpassword) {
      setpasswordError(
        "Weak password,At starting Try . or _ for secured password"
      );
      setisValidpassword(false);
    } else if (newPassword === "") {
      setpasswordError("please fill the required field");
    } else {
      setpasswordError("password must be of 8 characters");
      setisValidpassword(false);
    }
  };

  //------------------------------------------------------------------------------
  //   FUNCTI0N FOR CHANGING PASSWORD ON CLICK

  const changePassword = () => {
    if (newPassword === "") {
      setisValidpassword(false);
      setpasswordError("please fill the required field");
    }

    if (isValidpassword) {
      axios
        .get(
          `http://localhost:3001/user/fetch?email=${email}&password=${oldPassword}`
        )
        .then((response) => {
          if (newPassword === ConfirmNewPassword) {
            const updateDetails = {
              condition_obj: {
                email: email,
              },
              newdata_obj: {
                password: ConfirmNewPassword,
              },
            };
            axios
              .patch("http://localhost:3001/user/update", updateDetails)
              .then((response) => {
                console.log(response);
                swal(`${response.data.msg}`, "success");
                navigate("/cpuser");
              })
              .catch((error) => {
                swal(`${error.response.data.msg}`, "error");
              });
          } else {
            swal(`Password doesn't matched`);
          }
        })
        .catch((error) => {
          alert("Invalid old password");
        });
    } else {
      alert("please fill the required field");
    }
  };

  //------------------------------------------------------------------------------
  return (
    <>
      <div>
        <div className="container-xxl py-5">
          <h1 className="text-center">Set Your Password Here !</h1>
          <form>
            <div className="form-group my-2">
              <label htmlFor="exampleInputPassword1">Old Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={oldPassword}
                onChange={(e) => {
                  setoldPassword(e.target.value);
                }}
              />
            </div>
            {/* <span style={{ color: "red" }}>{passwordError}</span> <br /> */}
            <div className="form-group my-2">
              <label htmlFor="exampleInputPassword1">New Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={newPassword}
                onChange={(e) => {
                  setnewPassword(e.target.value);
                }}
                onBlur={newPassValid}
              />
            </div>
            <span className="errorMsg">{passwordError}</span>

            <div className="form-group my-2">
              <label htmlFor="exampleInputPassword1">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={ConfirmNewPassword}
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
                }}
              />
            </div>
            {/* <span style={{ color: "red" }}>{matchError}</span> <br /> */}
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

export default CpAdmin;
