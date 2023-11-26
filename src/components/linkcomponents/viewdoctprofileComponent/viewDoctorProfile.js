import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewDoctorProfile() {
  const [doctorDetails, setdoctorDetails] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  //FETCHING DR DETAILS FROM THE DB USING THE ID THAT WE GOT FROM THE PARAMS--------------------------------------------------------

  useEffect(() => {
    axios
      .get(`http://localhost:3001/doctor/fetch?_id=${params._id}`)
      .then((response) => {
        console.log(response.data);
        setdoctorDetails(response.data.doctorDetails);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <>
      {doctorDetails.map((row) => {
        return (
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-md-4 my-5">
                <img
                  src={`/assets/profile/${row.profilepicture}`}
                  alt=""
                  srcset=""
                  className="img-fluid p-5 shadow"
                />
              </div>

              {/* REGISTRATION FORM SECTION ----------------------------------------------------------------------------------------------------------------- */}
              <div className="col-md-7">
                <h2 className="text-center my-3 ">Our Pride!</h2>
                <hr />
                <span className="fs-6 fw-bold mx-2">Dr. ID :</span>
                <span>{params._id}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2">Name :</span>{" "}
                <span>{row.name}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2"> Email :</span>{" "}
                <span>{row.email}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2"> Personal Contact :</span>
                <span>{row.personalcontact}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2">Clinic Contact :</span>
                <span>{row.cliniccontact}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2">Residential Address :</span>
                <span>{row.residentialAdd}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2"> Clinical Address :</span>
                <span>{row.clinicAdd}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2">Degree :</span>{" "}
                <span>{row.degree}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2">Specialization :</span>
                <span>{row.specialization}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2"> Registered On :</span>
                <span>{row.info}</span>
                <br />
                <br />
                <span className="fs-6 fw-bold mx-2">
                  At what time, Where they stay? :
                </span>
                <span>{row.stayTime}</span>
                <br />
                <br />
              </div>
              <hr />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ViewDoctorProfile;
