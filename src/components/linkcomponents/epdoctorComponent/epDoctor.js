import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function EpDoctor() {
  const fetchemail = localStorage.getItem("email");

  const navigate = useNavigate();

  //--------------------------------------------------------------------------------------------------------------------------------
  //STATES FOR THE INPUT FIELDS

  const [name, setName] = useState("");
  const [nameError, setnameError] = useState();
  //
  const [email, setEmail] = useState();
  const [emailError, setemailError] = useState();
  //
  const [personalContact, setpersonalContact] = useState();
  const [personalContactError, setpersonalContactError] = useState();
  //
  const [clinicContact, setclinicContact] = useState();
  const [clinicContactError, setclinicContactError] = useState();
  //
  const [clinicaAddress, setclinicaAddress] = useState();
  const [clinicaAddressError, setclinicaAddressError] = useState();
  //
  const [residentialaAddress, setresidentialaAddress] = useState();
  const [residentialaAddressError, setresidentialaAddressError] = useState();
  //
  const [degree, setDegree] = useState();
  const [degreeError, setdegreeError] = useState();
  //
  const [specialization, setSpecialization] = useState();
  const [specializationError, setspecializationError] = useState();
  //
  const [stayTime, setStayTime] = useState();
  const [stayTimeError, setstayTimeError] = useState();
  //
  const [experience, setExperience] = useState();
  const [experienceError, setexperienceError] = useState();
  //
  const [profile, setProfile] = useState();

  //--------------------------------------------------------------------------------------------------------------------------------
  //FORM SUBMIT VALIDATING VARIABLES

  const [isValidPhone, setisValidPhone] = useState(false);
  const [isValidName, setisValidName] = useState(false);
  const [isValidAddress, setisValidAddress] = useState(false);
  const [isValidGender, setisValidGender] = useState(false);
  const [isValidCity, setisValidCity] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/doctor/fetch?email=${fetchemail}`)
      .then((response) => {
        setName(response.data.doctorDetails[0].name);
        setEmail(response.data.doctorDetails[0].email);
        setclinicContact(response.data.doctorDetails[0].cliniccontact);
        setpersonalContact(response.data.doctorDetails[0].personalcontact);
        setclinicaAddress(response.data.doctorDetails[0].clinicAdd);
        setresidentialaAddress(response.data.doctorDetails[0].residentialAdd);
        setDegree(response.data.doctorDetails[0].degree);
        setExperience(response.data.doctorDetails[0].experience);
        setStayTime(response.data.doctorDetails[0].stayTime);
        setStayTime(response.data.doctorDetails[0].stayTime);
        setSpecialization(response.data.doctorDetails[0].specialization);
        setProfile(response.data.doctorDetails[0].profilepicture);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //---------------------------------------------------------------------------------------------------------------------------------
  const saveChanges = async () => {
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

    // const regPhone = /^(7|8|9)[0-9]{9}/;
    // const testPhone = regPhone.test(phone);
    // if (testPhone) {
    //   setphoneError("");
    //   setisValidPhone(true);
    // } else if (phone === "") {
    //   setphoneError("please fill the required field");
    //   setisValidPhone(false);
    // } else {
    //   setphoneError("Phone number is invalid");
    //   setisValidPhone(false);
    // }

    //--------------------------------------------------------------------------------------------------------------------------------

    //--------------------------------------------------------------------

    //---------------------------------------------------------------------------------------------------------------------------------

    if (name === "") {
      setnameError("please fill the entry");
      setisValidName(false);
    }

    // if (phone === "") {
    //   setphoneError("please enter your phone number");
    //   setisValidPhone(false);
    // }

    //if all fields are filled then only submit the form
    if (isValidName) {
      const updateDetails = {
        condition_obj: {
          email: fetchemail,
        },
        newdata_obj: {
          name: name,
          personalcontact: personalContact,
          cliniccontact: clinicContact,
          degree: degree,
          specialization: specialization,
          residentialAdd: residentialaAddress,
          clinicAdd: clinicaAddress,
          stayTime: stayTime,
          experience: experience,
        },
      };
      //FUNCTION FOR SAVE CHANGES

      axios
        .patch("http://localhost:3001/doctor/update", updateDetails)
        .then((response) => {
          swal(`${response.data.msg}`);
        })
        .catch((error) => {
          swal(`${error.response.data.msg}`);
        });
    } else {
      alert("cannot update details");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h5 className="card-title text-center">Doctor Details</h5>
            <div className="card">
              <div className="card-header d-flex justify-content-center">
                <img
                  src={`/assets/profile/${profile}`}
                  alt=""
                  srcset=""
                  className="img-thumbnail img-fluid w-25 h-50"
                />
                <label htmlFor="profile" className="mx-2 py-4">
                  New Profile :
                </label>
                <input type="file" className=" py-4" />
              </div>
              <div className="card-body">
                {/* //------------------------------------------------------------------- */}
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
                  {/* <span style={{ color: "red" }}> {nameError}</span> */}
                </div>
                {/* //------------------------------------------------------------------- ----------*/}
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
                {/* //------------------------------------------------------------------- */}
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Personal Contact :
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="adminEmail"
                    value={personalContact}
                    onChange={(e) => {
                      setpersonalContact(e.target.value);
                    }}
                    // onBlur={isPhoneValid}
                  />
                  {/* <span style={{ color: "red" }}> {phoneError}</span> */}
                </div>
                {/* //------------------------------------------------------------------- */}
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Clinic Contact :
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="adminEmail"
                    value={clinicContact}
                    onChange={(e) => {
                      setclinicContact(e.target.value);
                    }}
                  />
                  {/* <span style={{ color: "red" }}> {phoneError}</span> */}
                </div>
                {/* //------------------------------------------------------------------- */}

                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Clinic Addres:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={clinicaAddress}
                    onChange={(e) => {
                      setclinicaAddress(e.target.value);
                    }}
                  />
                  {/* <span style={{ color: "red" }}> {addressError}</span> */}
                </div>
                {/* //------------------------------------------------------------------- */}
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Residential Addres:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={residentialaAddress}
                    onChange={(e) => {
                      setresidentialaAddress(e.target.value);
                    }}
                  />
                  {/* <span style={{ color: "red" }}> {addressError}</span> */}
                </div>
                {/* //------------------------------------------------------------------- */}
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Experience :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="adminEmail"
                    value={experience}
                    onChange={(e) => {
                      setExperience(e.target.value);
                    }}
                  />
                  {/* <span style={{ color: "red" }}> {genderError}</span> */}
                  {/* //------------------------------------------------------------------- */}
                </div>
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    Specialization :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={specialization}
                    onChange={(e) => {
                      setSpecialization(e.target.value);
                    }}
                    // onBlur={iscityValid}
                  />
                  {/* <span style={{ color: "red" }}> {cityError}</span> */}
                </div>
                {/* //------------------------------------------------------------------- */}
                <div className="form-group">
                  <label htmlFor="adminEmail" className="mt-2">
                    At what time, Where Stay?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminEmail"
                    value={stayTime}
                    onChange={(e) => {
                      setStayTime(e.target.value);
                    }}
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

export default EpDoctor;
