import axios from "axios";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Otpverify() {
  //DEFINING THE NAVIGATE--------------------------------------------------------------
  const navigate = useNavigate();

  //STATES FOR ALL THE FOUR INPUT FIELDS AND OTP----------------------------------------
  const [numone, setNumone] = useState();
  const [numtwo, setNumtwo] = useState();
  const [numthree, setNumthree] = useState();
  const [numfour, setNumfour] = useState();
  const [otp, setOtp] = useState();

  useEffect(() => {
    //CREATING AN OTP USING MATH FUNCTIONALITY------------------------------------------
    const otp = Math.floor(Math.random() * 10000).toString();
    setOtp(otp);
    //DETAILS FOR SENDING WITH THE MAIL FOR VERIFICATION---------------------------------
    const mailDetails = {
      email: localStorage.getItem("email"),
      otp: otp,
    };

    //SENDING MAILDETAILS TO THE DB-----------------------------------------
    axios
      .post("http://localhost:3001/user/otpverification", mailDetails)
      .then((response) => {
        console.log(response.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(otp);

  const validateOtp = () => {
    if (
      otp[0] === numone &&
      otp[1] === numtwo &&
      otp[2] === numthree &&
      otp[3] === numfour
    ) {
      //OBJECT FOR SENDING TO THE SERVER--------------------------------------------------
      var userDetails = {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
        phone: localStorage.getItem("phone"),
        gender: localStorage.getItem("gender"),
        city: localStorage.getItem("city"),
        address: localStorage.getItem("address"),
        otp: otp,
      };
      //----------------------------------------------------------------------------
      //SENDING DATA TO THE SERVER USING AXIOS WEB SERVICE
      axios
        .post("http://localhost:3001/user/save", userDetails)
        .then((result) => {
          alert(result.data.msg);
          localStorage.clear();
          navigate("/login");
        })
        .catch((err) => {
          if (err.response.data.status === false) {
            alert("invalid registration");
          }
        });
      //----------------------------------------------------------------------------
    } else {
      alert("invalid OTP");
    }
  };

  return (
    <>
      {/* //----------------------------------------- */}
      <div className="container height-100 d-flex justify-content-center align-items-center my-5">
        <div className="position-relative">
          <div className="card p-2 text-center">
            <h6>
              Please enter the one time password <br /> to verify your account
            </h6>
            <div>
              <span>A code has been sent to</span>
              <span className="mx-2">{localStorage.getItem("email")}</span>
            </div>
            <div
              id="otp"
              className="inputs d-flex flex-row justify-content-center mt-2"
            >
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="first"
                maxlength="1"
                value={numone}
                onChange={(e) => {
                  setNumone(e.target.value);
                }}
                autoFocus
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="second"
                maxlength="1"
                value={numtwo}
                onChange={(e) => {
                  setNumtwo(e.target.value);
                }}
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="third"
                maxlength="1"
                value={numthree}
                onChange={(e) => {
                  setNumthree(e.target.value);
                }}
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="fourth"
                maxlength="1"
                value={numfour}
                onChange={(e) => {
                  setNumfour(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <button
                className="btn btn-danger px-4 validate"
                onClick={validateOtp}
              >
                Validate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otpverify;
