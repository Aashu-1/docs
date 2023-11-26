import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Adddoctors() {
  //VALIDATION VARIABLES FOR THE STATE---------------------------------------------------------------------------

  const [nameValid, setnameValid] = useState(false);
  const [emailValid, setemailValid] = useState(false);
  const [emailError, setemailError] = useState("");
  const [residentialAddValid, setresidentialAddValid] = useState(false);
  const [clinicAddValid, setclinicAddValid] = useState(false);
  const [personalcontactValid, setpersonalcontactValid] = useState(false);
  const [personalcontactError, setPersonalContactError] = useState("");
  const [cliniccontactValid, setcliniccontactValid] = useState(false);
  const [cliniccontactError, setcliniccontactError] = useState("");
  const [degreeValid, setdegreeValid] = useState(false);
  const [experienceValid, setexperienceValid] = useState(false);
  const [specializationValid, setspecializationValid] = useState(false);
  const [stayTimeValid, setstayTimeValid] = useState(false);

  const navigate = useNavigate();
  //STATES FOR ALL INPUTS FIELDS -----------------------------------------------------------------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [residentialAdd, setResidentialAdd] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [clinicAdd, setClinicAdd] = useState("");
  const [stayTime, setStayTime] = useState("");
  const [personalcontact, setPersonalContact] = useState("");
  const [cliniccontact, setClinicContact] = useState("");
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [file, setFile] = useState();

  //FILE HANDLING FUNCTI0N------------------------------------------

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  //SAVE DOCTORS FUNCTION -----------------------------------------------------------------------------------
  const saveDoctors = () => {
    //NAME VALIDATION--------------------------------------------------------------
    if (name === "") {
      setnameValid(false);
    } else {
      setnameValid(true);
    }
    //EMAIL VALIDATION--------------------------------------------------------------

    const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    const testEmail = regEmail.test(email);
    if (testEmail) {
      setemailValid(true);
      setemailError("");
    } else if (email === "") {
      setemailValid(false);
    } else {
      setemailError("please enter a valid email");
      setemailValid(false);
    }

    //RESIDENT ADD. VALIDATION--------------------------------------------------------------
    if (residentialAdd === "") {
      setresidentialAddValid(false);
    } else {
      setresidentialAddValid(true);
    }
    //SPECIALIZATION. VALIDATION--------------------------------------------------------------
    if (specialization === "") {
      setspecializationValid(false);
    } else {
      setspecializationValid(true);
    }
    //STAY AND TIME VALIDATION VALIDATION--------------------------------------------------------------
    if (stayTime === "") {
      setstayTimeValid(false);
    } else {
      setstayTimeValid(true);
    }
    //DEGREE VALIDATION--------------------------------------------------------------
    if (degree === "") {
      setdegreeValid(false);
    } else {
      setdegreeValid(true);
    }
    //PERSONAL CONTACT VALIDATION--------------------------------------------------------------

    const regPhone = /^(6|7|8|9)[0-9]{9}/;
    const testPersonalContact = regPhone.test(personalcontact);
    if (testPersonalContact) {
      setPersonalContactError("");
      setpersonalcontactValid(true);
    } else if (personalcontact === "") {
      setpersonalcontactValid(false);
    } else {
      setPersonalContactError("Phone number is invalid");
      setpersonalcontactValid(false);
    }

    //CLINIC CONTACT VALIDATION--------------------------------------------------------------
    const testClinicContact = regPhone.test(cliniccontact);
    if (testClinicContact) {
      setcliniccontactError("");
      setcliniccontactValid(true);
    } else if (cliniccontact === "") {
      setcliniccontactValid(false);
    } else {
      setcliniccontactError("Phone number is invalid");
      setcliniccontactValid(false);
    }
    //EXPERIENCE VALIDATION--------------------------------------------------------------
    if (experience === "") {
      setexperienceValid(false);
    } else {
      setexperienceValid(true);
    }
    //CLINICAL ADD VALIDATION--------------------------------------------------------------
    if (clinicAdd === "") {
      setclinicAddValid(false);
    } else {
      setclinicAddValid(true);
    }

    // IF ALL FIELDS ARE VALID THEN ONLY SUBMIT THE FORM ---------------------------------------------------------------------

    if (
      nameValid &&
      emailValid &&
      degreeValid &&
      stayTimeValid &&
      clinicAddValid &&
      experienceValid &&
      cliniccontactValid &&
      residentialAddValid &&
      specializationValid &&
      personalcontactValid
    ) {
      //USED FOR SENDING BINARY(IMAGE) AS WELL TEXT DATA
      const formData = new FormData();
      formData.append("name", name);
      formData.append("degree", degree);
      formData.append("specialization", specialization);
      formData.append("residentialAdd", residentialAdd);
      formData.append("clinicAdd", clinicAdd);
      formData.append("stayTime", stayTime);
      formData.append("personalcontact", personalcontact);
      formData.append("cliniccontact", cliniccontact);
      formData.append("experience", experience);
      formData.append("email", email);
      formData.append("profilepicture", file);
      formData.append("appointmentnumber", 0);

      //BELOW CODE MEANS THAT DATA SENDING IN THE MULTIPARTS BCZ WHEN WE SEND AN IMAGES IT COSISTS OF BINARY FORMAT
      const config = {
        "content-type": "multipart/form-data",
      };
      axios
        .post("http://localhost:3001/doctor/save", formData, config)
        .then((response) => {
          alert(response.data.msg);
          navigate("/adddoctors");
          setName("");
          setEmail("");
          setResidentialAdd("");
          setClinicAdd("");
          setPersonalContact("");
          setClinicContact("");
          setExperience("");
          setStayTime("");
          setDegree("");
          setSpecialization("");
        })
        .catch((error) => {
          navigate("/adddoctors");
          alert(error.response.data.msg);
        });
    } else {
      alert("Cannot register, Please check the given credentials");
    }
  };

  console.log(degree);
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <img
              src="/assets/img/doctor-2027768_1280.png"
              alt=""
              srcset=""
              className="img-fluid p-5 "
            />
          </div>

          {/* REGISTRATION FORM SECTION ----------------------------------------------------------------------------------------------------------------- */}
          <div className="col-md-7">
            <h2 className="m-3 text-center">
              <u>Add doctors here!</u>
            </h2>
            {/* //NAME-------------------------------------------------------------------------------------------------------------------- */}
            <form encType="multipart/form-data" action="/upload" method="POST">
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/* //IMAGE ---------------------------------------------------------------------------------------------------------------------- */}
              <div className="form-group my-2">
                <label for="file">Profile :</label>
                <input
                  type="file"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="image"
                  onChange={handleFile}
                />
              </div>
              {/* //DEGREE------------------------------------------------------------------------------------------------------------------ */}
              <div className="form-group my-2">
                <label for="exampleInputPassword1">Degree :</label>
                <select
                  name=""
                  id=""
                  className="mx-3"
                  onChange={(e) => {
                    setDegree(e.target.value);
                  }}
                  value={degree}
                >
                  <option value=""> Select degree</option>
                  <option value="mbbs">MBBS</option>
                  <option value="dm">DM</option>
                  <option value="bds">BDS </option>
                  <option value="bhms">BHMS </option>
                  <option value="M.Phil">M.Phil</option>
                  <option value="Ph.D ">Ph.D </option>
                </select>
              </div>
              {/* //Specialization----------------------------------------------------------------------------------------------------------- */}
              <div className="form-group my-1">
                <label for="exampleInputEmail1">Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  value={specialization}
                  onChange={(e) => {
                    setSpecialization(e.target.value);
                  }}
                />
              </div>
              {/* //RESIDENTIAL ADDRESS-------------------------------------------------------------------------------------------------------*/}
              <div className="form-group my-1">
                <label for="exampleFormControlTextarea1">
                  Residential Address
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1.5"
                  onChange={(e) => {
                    setResidentialAdd(e.target.value);
                  }}
                  value={residentialAdd}
                ></textarea>
              </div>
              {/* //CLINIC ADDRESSS--------------------------------------------------------------------------------------------------------------- */}
              <div className="form-group my-1">
                <label for="exampleFormControlTextarea1">Clinic Address</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  onChange={(e) => {
                    setClinicAdd(e.target.value);
                  }}
                  value={clinicAdd}
                ></textarea>
              </div>
              {/* //WHAT TIME WHERE STAY----------------------------------------------------------------------------------------------------------- */}
              <div className="form-group my-1">
                <label for="exampleFormControlTextarea1">
                  At what time, Where they stay?
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  onChange={(e) => {
                    setStayTime(e.target.value);
                  }}
                  value={stayTime}
                ></textarea>
              </div>
              {/* //PERSONAL AND CLINIC CONTACT---------------------------------------------------------------------------------------------------- */}
              <div className="form-group">
                <label for="exampleInputEmail1">Contact Number :</label>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="personal">Personal</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      value={personalcontact}
                      onChange={(e) => {
                        setPersonalContact(e.target.value);
                      }}
                    />
                    <span style={{ color: "red" }}>{personalcontactError}</span>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="personal">Clinic</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      value={cliniccontact}
                      onChange={(e) => {
                        setClinicContact(e.target.value);
                      }}
                    />
                    <span style={{ color: "red" }}>{cliniccontactError}</span>
                  </div>
                </div>
              </div>
              {/* //EXPERIENCE ----------------------------------------------------------------------------------------------------------------------------*/}
              <div className="form-group my-1">
                <label for="exampleFormControlTextarea1">Experience</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                  value={experience}
                />
              </div>
              {/* //EMAIL----------------------------------------------------------------------------------------------------------------------------------- */}
              <div className="form-group my-1">
                <label for="exampleFormControlTextarea1">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span style={{ color: "red" }}>{emailError}</span>
              </div>
              {/* //ADD DOCTORS BUTTON ------------------------------------------------------------------------------------------------------------------------*/}
              <button
                type="button"
                className="btn btn-primary my-3"
                onClick={saveDoctors}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adddoctors;
