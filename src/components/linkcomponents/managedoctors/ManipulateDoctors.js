import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

function ManipulateDoctors() {
  const [doctorDetails, setdoctorDetails] = useState([]);
  const [status, setStatus] = useState();

  //FETCHING THE USER DETAILS FROM THE API AND DISPLAYING IN THE TABLE

  useEffect(() => {
    axios
      .get("http://localhost:3001/doctor/fetch?")
      .then((response) => {
        setdoctorDetails(response.data.doctorDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1 className="my-5 text-center">View And Manipulate Doctors</h1>
      <table className="table table-bordered overflow-scroll">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Reg ID</th>

            <th scope="col">Name</th>
            <th scope="col">Degree</th>
            <th scope="col">Specialist</th>
            <th scope="col">Email</th>

            <th scope="col">Clinic Contact</th>

            <th scope="col">Status</th>
            <th scope="col">Manipulate</th>
          </tr>
        </thead>

        <tbody>
          {doctorDetails.map((row) => (
            <tr>
              <th scope="col">{row._id}</th>
              <td scope="col">{row.name}</td>
              <td scope="col">{row.degree}</td>
              <td scope="col">{row.specialization}</td>
              <td scope="col">{row.email}</td>

              <td scope="col">{row.cliniccontact}</td>

              <td scope="col">
                {row.status === 0 && <p style={{ color: "red" }}>InActive</p>}
                {row.status === 1 && <p style={{ color: "green" }}>Active</p>}
              </td>
              <td scope="col">
                <a
                  className="btn btn-danger p-0 my-1 rounded "
                  onClick={() => {
                    //IIFE FUNCTION FOR CHANGING STATUS

                    (() => {
                      if (row.status === 0) {
                        setStatus(1);
                      } else if (row.status === 1) {
                        setStatus(0);
                      }
                    })();

                    //  ------------------------------------------------------>

                    const updateDetails = {
                      condition_obj: {
                        email: row.email,
                      },
                      newdata_obj: {
                        status: status,
                      },
                    };
                    axios
                      .patch(
                        "http://localhost:3001/doctor/update",
                        updateDetails
                      )
                      .then((response) => {
                        // alert(response.data.msg);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Change status
                </a>
                <br />
                <button
                  className="btn btn-danger p-0 my-1 rounded px-1"
                  onClick={() => {
                    axios
                      .delete("http://localhost:3001/doctor/delete", {
                        data: {
                          email: row.email,
                        },
                      })
                      .then((response) => {
                        swal(`${response.data.msg}`, "success");
                      })
                      .catch((err) => {
                        swal(`${err.response.data.msg}`, "error");
                      });
                  }}
                >
                  Delete Doctor
                </button>
                <br />
                <Link
                  className="btn btn-green"
                  to={`/viewdoctorprofile/${row._id}`}
                >
                  View profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManipulateDoctors;
