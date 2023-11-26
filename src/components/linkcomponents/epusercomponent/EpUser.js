import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function EpAdmin() {
  const fetchemail = localStorage.getItem("email");

  const navigate = useNavigate();

  //--------------------------------------------------------------------------------------------------------------------------------
  //STATES FOR THE INPUT FIELDS

  const [name, setName] = useState();
  const [nameError, setnameError] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [phoneError, setphoneError] = useState();
  const [address, setAddress] = useState();
  const [addressError, setaddressError] = useState();
  const [city, setCity] = useState();
  const [cityError, setcityError] = useState();
  const [gender, setGender] = useState();
  const [genderError, setgenderError] = useState();
  const [info, setInfo] = useState();

  //--------------------------------------------------------------------------------------------------------------------------------
  //FORM SUBMIT VALIDATING VARIABLES

  const [isValidPhone, setisValidPhone] = useState(false);
  const [isValidName, setisValidName] = useState(false);
  const [isValidAddress, setisValidAddress] = useState(false);
  const [isValidGender, setisValidGender] = useState(false);
  const [isValidCity, setisValidCity] = useState(false);

  //---------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/fetch?email=${fetchemail}`)
      .then((response) => {
        setName(response.data.userDetails[0].name);
        setEmail(response.data.userDetails[0].email);
        setPhone(response.data.userDetails[0].phone);
        setCity(response.data.userDetails[0].city);
        setGender(response.data.userDetails[0].gender);
        setAddress(response.data.userDetails[0].address);
        setInfo(response.data.userDetails[0].info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //---------------------------------------------------------------------------------------------------------------------------------
  const saveChanges = () => {
    //--------------------------------------------------------------------------------------------------------------------------------
    //FUNCTION FOR VALIDATING USER DETAILS

    //--------------------------------------------------------------------------------------------------------------------------------
    //VALIDATION FOR USER NAME

    const regUser = /[0-9a-zA-Z_]{2,30}/;
    const testUsername = regUser.test(name);
    if (testUsername) {
      setnameError("");
      setisValidName(true);
    } else if (name === "") {
      setnameError("please fill the required field");
      setisValidName(false);
    }
    //--------------------------------------------------------------------------------------------------------------------------------
    //VALIDATION FOR PHONE  NMBR

    const regPhone = /^(7|8|9)[0-9]{9}/;
    const testPhone = regPhone.test(phone);
    if (testPhone) {
      setphoneError("");
      setisValidPhone(true);
    } else if (phone === "") {
      setphoneError("please fill the required field");
      setisValidPhone(false);
    } else {
      setphoneError("Phone number is invalid");
      setisValidPhone(false);
    }

    //--------------------------------------------------------------------------------------------------------------------------------

    // CITY VALIDATION
    if (city === "") {
      setcityError("please select the city");
    } else {
      setcityError("");
      setisValidCity(true);
    }
    //--------------------------------------------------------------------

    // ADDRESS VALIDATION
    if (address === "") {
      setaddressError("please enter your address");
    } else {
      setaddressError("");
      setisValidAddress(true);
    }
    //--------------------------------------------------------------------

    // GENDER VALIDATION
    //--------------------------------------------------------------------

    if (gender === "") {
      setgenderError("please select your gender");
    } else {
      setgenderError("");
      setisValidGender(true);
    }

    //---------------------------------------------------------------------------------------------------------------------------------

    if (name === "") {
      setnameError("please fill the entry");
      setisValidName(false);
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
      isValidName &&
      isValidPhone &&
      isValidAddress &&
      isValidGender
    ) {
      const updateDetails = {
        condition_obj: {
          email: fetchemail,
        },
        newdata_obj: {
          name: name,
          phone: phone,
          gender: gender,
          city: city,
          address: address,
        },
      };
      //FUNCTION FOR SAVE CHANGES

      axios
        .patch("http://localhost:3001/user/update", updateDetails)
        .then((response) => {
          swal(`${response.data.msg}`);
          navigate("/epuser");
        })
        .catch((error) => {
          swal(`${error.response.data.msg}`);
        });
    } else {
      console.log(isValidAddress);
      console.log(isValidCity);
      console.log(isValidGender);
      console.log(isValidName);
      console.log(isValidPhone);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">User Details</h5>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="adminName">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminName"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    // onBlur={isNameValid}
                  />
                  <span style={{ color: "red" }}> {nameError}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="adminEmail"
                    value={email}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Phone:
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="adminEmail"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    // onBlur={isPhoneValid}
                  />
                  <span style={{ color: "red" }}> {phoneError}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    // onBlur={isaddressValid}
                  />
                  <span style={{ color: "red" }}> {addressError}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Gender:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    // onBlur={isgenderValid}
                  />
                  <span style={{ color: "red" }}> {genderError}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    City:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    // onBlur={iscityValid}
                  />
                  <span style={{ color: "red" }}> {cityError}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Registered On:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={info}
                    readOnly
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-danger p-2"
                onClick={saveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EpAdmin;
