import React, { useEffect } from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  //DEFINING NAVIGATE

  const navigate = useNavigate();

  //STATES DEFINATION
  //---------------------------------------------------------------------------------------
  const [name, setName] = useState("");
  const [nameError, setnameError] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState();
  const [phone, setPhone] = useState("");
  const [phoneError, setphoneError] = useState();
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState();
  const [address, setAddress] = useState("");
  const [addressError, setaddressError] = useState();
  const [city, setCity] = useState("");
  const [cityError, setcityError] = useState();
  const [gender, setGender] = useState("");
  const [genderError, setgenderError] = useState();

  //-------------------------------------------------------------------------------------------------------
  //FORM SUBMIT VALIDATION VARIABLES

  const [isValidEmail, setisValidEmail] = useState(false);
  const [isValidPassword, setisValidPassword] = useState(false);
  const [isValidPhone, setisValidPhone] = useState(false);
  const [isValidName, setisValidName] = useState(false);
  const [isValidAddress, setisValidAddress] = useState(false);
  const [isValidGender, setisValidGender] = useState(false);
  const [isValidCity, setisValidCity] = useState(false);

  // NAME VALIDATION
  //--------------------------------------------------------------------

  const isNameValid = () => {
    const regUser = /^[A-Z][0-9a-zA-Z_]{2,30}/;
    const testUsername = regUser.test(name);
    if (testUsername) {
      setnameError("");
      setisValidName(true);
    } else if (name === "") {
      setnameError("please fill the required field");
    } else {
      setnameError("first letter must be capital");
      setisValidName(false);
    }
  };

  // EMAIL VALIDATION
  //--------------------------------------------------------------------

  const isEmailValid = () => {
    const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    const testEmail = regEmail.test(email);
    if (testEmail) {
      setisValidEmail(true);
      setemailError("");
    } else if (email === "") {
      setemailError("please fill the required field");
    } else {
      setemailError("please enter a valid email");
      setisValidEmail(false);
    }
  };

  // PASSWORD VALIDATION
  //--------------------------------------------------------------------

  const isPasswordValid = () => {
    const regWeakPassword = /[a-zA-Z0-9]{8,15}/;
    const regStrongPassword = /^(\.|_)[a-zA-Z0-9.-_@]{8,20}/;
    const testWeakpassword = regWeakPassword.test(password);
    const testStrongpassword = regStrongPassword.test(password);
    if (testStrongpassword) {
      setpasswordError("");
      setisValidPassword(true);
    } else if (testWeakpassword) {
      setpasswordError(
        "Weak password,At starting Try . or _ for secured password"
      );
      setisValidPassword(false);
    } else if (password === "") {
      setpasswordError("please fill the required field");
    } else if (password.length < 8) {
      setpasswordError("password must be of 8 characters");
      setisValidPassword(false);
    }
  };

  // PHONE VALIDATION
  //--------------------------------------------------------------------

  const isPhoneValid = () => {
    const regPhone = /^(6|7|8|9)[0-9]{9}/;
    const testPhone = regPhone.test(phone);
    if (testPhone) {
      setphoneError("");
      setisValidPhone(true);
    } else if (phone === "") {
      setphoneError("please fill the required field");
    } else {
      setphoneError("Phone number is invalid");
      setisValidPhone(false);
    }
  };

  // CITY VALIDATION
  //--------------------------------------------------------------------

  const iscityValid = () => {
    if (city === "") {
      setcityError("please select the city");
    } else {
      setcityError("");
      setisValidCity(true);
    }
  };

  // ADDRESS VALIDATION
  //--------------------------------------------------------------------

  const isaddressValid = () => {
    if (address === "") {
      setaddressError("please enter your address");
    } else {
      setaddressError("");
      setisValidAddress(true);
    }
  };

  // GENDER VALIDATION
  //--------------------------------------------------------------------

  const isgenderValid = () => {
    if (gender === "") {
      setgenderError("please select your gender");
    } else {
      setgenderError("");
      setisValidGender(true);
    }
  };

  //BUTTON SUBMIT VALIDATION
  //---------------------------------------------------------------------------

  const validateRegister = () => {
    if (name === "") {
      setnameError("please fill the entry");
      setisValidName(false);
    }
    if (email === "") {
      setemailError("please enter your email");
      setisValidEmail(false);
    }
    if (password === "") {
      setpasswordError("please enter your password");
      setisValidPassword(false);
    }
    if (phone === "") {
      setphoneError("please enter your phone number");
      setisValidPhone(false);
    }
    if (city === "") {
      setcityError("please select your city");
      setisValidCity(false);
    }
    if (address === "") {
      setaddressError("please enter your address");
      setisValidAddress(false);
    }
    if (gender === "") {
      setisValidGender(false);
      setgenderError("please select your gender");
    }

    //if all fields are filled then only submit the form
    if (
      isValidCity &&
      isValidEmail &&
      isValidName &&
      isValidPassword &&
      isValidPhone &&
      isValidAddress &&
      isValidGender
    ) {
      //SETTING ALL THE USER DETAILS IN THE DB SO THAT WE CAN ACCESS IT AFTER OTP VERIFICATION------------------------
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("phone", phone);
      localStorage.setItem("city", city);
      localStorage.setItem("address", address);
      //NAVIGATE TO THE OTPVERIFY COMPONENT FOR OTP VERIFICATION-------------------------------
      navigate("/otpverification");
      setName("");
      setEmail("");
      setPassword("");
      setCity("");
      setGender("");
      setPhone("");
      setAddress("");
    } else {
      console.log(isValidAddress);
      console.log(isValidEmail);
      console.log(isValidName);
      console.log(isValidPassword);
      console.log(isValidPhone);
      console.log(isValidAddress);
      console.log(isValidGender);
      alert("please fill the required credentials");
    }
  };
  return (
    <div>
      <div>
        {/* Contact Start */}
        <div className="container-xxl py-5 ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe
                  className="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{ minHeight: "350px", border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <form>
                    <div className="row g-3 mt-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          {/* //NAME INPUT FIELD---------------------- */}
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            onBlur={isNameValid}
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>

                        <span className="errorMsg">{nameError}</span>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          {/* //EMAIL INPUT FIELD---------------------- */}
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            onBlur={isEmailValid}
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                        <span className="errorMsg">{emailError}</span>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating">
                          {/* //PHONE INPUT FIELD---------------------- */}
                          <input
                            type="phone"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Your Contact"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                            onBlur={isPhoneValid}
                          />
                          <label htmlFor="phone">Your Contact</label>
                        </div>
                        <span className="errorMsg">{phoneError}</span>
                      </div>
                      <div className="col-md-8">
                        <div className="form-floating">
                          {/* //PASSWORD INPUT FIELD---------------------- */}
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            onBlur={isPasswordValid}
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                        <span className="errorMsg">{passwordError}</span>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating">
                          {/* //CITY INPUT FIELD---------------------- */}
                          <select
                            name="city"
                            id="city"
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                            onBlur={iscityValid}
                          >
                            <option>Select City</option>
                            <option value="Indore">Indore</option>
                            <option value="Ujjain">Ujjain</option>
                            <option value="Bhopal">Bhopal</option>
                          </select>
                        </div>
                        <span className="errorMsg">{cityError}</span>
                      </div>
                      <div className="col-md-8">
                        <div className="form-floating">
                          {/* //GENDER INPUT FIELD---------------------- */}
                          <span>Gender :</span>&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            onBlur={isgenderValid}
                          />
                          &nbsp;Male &nbsp;
                          <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            onBlur={isgenderValid}
                          />
                          &nbsp;Female &nbsp;
                        </div>
                        <span className="errorMsg">{genderError}</span>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          {/* //ADDRESSS INPUT FIELD---------------------- */}
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="Adress"
                            style={{ height: "100px" }}
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            onBlur={isaddressValid}
                          ></textarea>
                          <label htmlFor="Adress">Adress</label>
                        </div>
                        <span className="errorMsg">{addressError}</span>
                      </div>
                      <div className="col-12">
                        {/* //BUTTON INPUT FIELD---------------------- */}
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="button"
                          onClick={validateRegister}
                        >
                          Register Yourself
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Register;
