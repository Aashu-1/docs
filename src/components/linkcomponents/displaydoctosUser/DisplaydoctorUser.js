import "./DiplayDoctorUser.css";
import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

function DisplaydoctorUser() {
  //STATES FOR ALL THE DETAILS OF THE USER TO BE DISPLAY---------------------------------------------------------------------------------------

  const [displayDoctor, setDisplayDoctor] = useState();
  const [isDoctorExist, setIsDoctorExist] = useState();
  const [searchby, setSearchBy] = useState("");

  //FETCHING DATA FROM THE DB AND STORING IT INTO STATES --------------------------------------------------------------------------------------------

  useEffect(() => {
    axios
      .get(`http://localhost:3001/doctor/fetch?`)
      .then((response) => {
        if (!response) {
          setIsDoctorExist(
            <div className="d-flex justify-content-center align-items-center">
              <TailSpin />
            </div>
          );
        } else {
          setIsDoctorExist(
            response.data.doctorDetails.map((row) => (
              <div className="col-md-4 my-3 col-11">
                <div
                  className="card"
                  style={{ width: "18rem", height: "35rem" }}
                >
                  <img
                    className="card-img-top img-fluid p-3 h-50 shadow-sm"
                    src={`/assets/profile/${row.profilepicture}`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Dr. {row.name}
                      <span style={{ fontSize: 13 }}>({row.degree})</span>
                    </h5>
                    <span>
                      Specialization : <span>{row.specialization}</span>
                    </span>
                    <br />
                    <span>{row.experience} years experience overall</span>
                    <br />
                    <span>Meet at : {row.clinicAdd}</span>
                    <br />
                    <br />
                    <h6>Contact our expert on :</h6>
                    <p className="text-dark">
                      <i
                        className="fa fa-envelope"
                        style={{ marginRight: "4px" }}
                        aria-hidden="true"
                      ></i>
                      <a href={`mailto:${row.email}`} target="_blank">
                        {row.email}
                      </a>
                      <br />
                      <i className="fa fa-phone-square" aria-hidden="true"></i>
                      <a
                        className="mx-1"
                        href={`tel: +91${row.personalcontact}`}
                        target="_blank"
                      >
                        {row.personalcontact}
                      </a>
                    </p>

                    <Link
                      to={"/bookappointment/" + row.email}
                      className="btn btn-primary"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setIsDoctorExist(
          <>
            <h1>Data not found of the searched details</h1>
          </>
        );
      });
  }, []);
  //--------------------------------------------------------------------------------------------------------------------------------------------

  //---------------------SHOW DOCTOR ON BUTTON CLICK------------------------------------------------------------
  const showDoctor = () => {
    if (searchby === "") {
      alert("please select by what field u wanna search");
    } else {
      axios
        .get(`http://localhost:3001/doctor/fetch?${searchby}=${displayDoctor}`)
        .then((response) => {
          //--------------------------------------------------------------------------------------------------------------------------------------------
          //SHOW DOCTOR IF WE GET DATA FOR THE GIVEN DEGREE FROM THE DB ---------------------------------------------------------
          setIsDoctorExist(
            response.data.doctorDetails.map((row) => (
              <div className="col-md-4 my-3 col-11">
                <div
                  className="card"
                  style={{ width: "18rem", height: "35rem" }}
                >
                  <img
                    className="card-img-top img-fluid p-3 h-50 shadow-sm"
                    src={`/assets/profile/${row.profilepicture}`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Dr. {row.name}
                      <span style={{ fontSize: 13 }}>({row.degree})</span>
                    </h5>
                    <span>
                      Specialization : <span>{row.specialization}</span>
                    </span>
                    <br />
                    <span>{row.experience} years experience overall</span>
                    <br />
                    <span>Meet at : {row.clinicAdd}</span>
                    <br />
                    <br />
                    <h6>Contact our expert on :</h6>
                    <p className="text-dark">
                      <i
                        className="fa fa-envelope"
                        style={{ marginRight: "4px" }}
                        aria-hidden="true"
                      ></i>
                      <a href={`mailto:${row.email}`} target="_blank">
                        {row.email}
                      </a>
                      <br />
                      <i className="fa fa-phone-square" aria-hidden="true"></i>
                      <a
                        className="mx-1"
                        href={`tel: +91${row.personalcontact}`}
                        target="_blank"
                      >
                        {row.personalcontact}
                      </a>
                    </p>

                    <Link
                      to={"/bookappointment/" + row.email}
                      className="btn btn-primary"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))
          );
        })
        .catch((error) => {
          console.log(error);
          //--------------------------------------------------------------------------------------------------------------------------------------------
          //SHOW DATA NOT FOUND ERROR PAGE IF WE DON'T GET DATA FOR THE GIVEN DEGREE FROM THE DB ---------------------------------------------------------
          setIsDoctorExist(
            <>
              <div className="container d-flex justify-content-center align-items-center flex-column">
                <img
                  src="/assets/img/notfound.jpg"
                  alt=""
                  srcset=""
                  className=" img-fluid"
                />
                <p>Doctor with the given credentials doesn't exist.</p>
              </div>
            </>
          );
        });
    }
  };

  return (
    <>
      <div className="container flex-wrap">
        <div className="row d-flex justify-content-center my-3 ">
          <h1 className="text-center ">Our Prides!</h1>

          <div className="row d-flex my-3 justify-content-center ">
            {/* //DROPDOWN MENU FOR THE SEARCH CHOICE--------------------------------------------- */}
            <div className="col-md-2">
              <div className="form-group my-2 d-flex justify-content-center">
                <select
                  name=""
                  id=""
                  className="btn btn-secondary dropdown-toggle "
                  onChange={(e) => {
                    setSearchBy(e.target.value);
                  }}
                  value={searchby}
                >
                  <option className="dropdown-item text-white" value="">
                    Search By
                  </option>
                  <option className="dropdown-item text-white" value="name">
                    Name
                  </option>
                  <option className="dropdown-item text-white" value="degree">
                    Degree
                  </option>
                  <option className="dropdown-item text-white" value="email">
                    email
                  </option>
                </select>
              </div>
            </div>

            {/* //INPUT FIELD FOR THE SEARCHING----------------------------------------------------------- */}
            <div className="col-md-6 my-2">
              <input
                class="form-control w-100"
                type="search"
                placeholder="Search by the designation ( MBBS, BDS etc), name and email"
                aria-label="Search"
                value={displayDoctor}
                onChange={(e) => {
                  setDisplayDoctor(e.target.value);
                }}
                autoFocus
              />
            </div>

            <div className="col-md-4 my-2">
              {" "}
              <button
                class="btn btn-outline-success"
                onClick={showDoctor}
                type="button"
              >
                Search here!
              </button>
            </div>
          </div>

          {isDoctorExist}
        </div>
      </div>
    </>
  );
}

export default DisplaydoctorUser;
