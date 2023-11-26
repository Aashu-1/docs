import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function DoctorAppointment() {
  const [doctorDetails, setdoctorDetails] = useState();
  const [appointmentdetails, setAppointmentDetails] = useState([]);
  console.log(appointmentdetails);

  const email = localStorage.getItem("email");

  //FETCHING DETAILS FROM THE DB---------------------------------------------------------

  useEffect(() => {
    axios
      .get(`http://localhost:3001/doctor/fetch?email=${email}`)
      .then((response) => {
        setAppointmentDetails(
          response.data.doctorDetails[0].appointmentdetails
        );
        setdoctorDetails(
          <>
            <div className="container">
              <h2 className="text-center my-3">Your Clients!</h2>
              <button
                type="button"
                class="btn btn-primary position-relative my-2"
              >
                Number of Booked Appointments
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {response.data.doctorDetails[0].appointmentnumber}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
              <table class="table mt-2">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">time</th>
                    <th scope="col">name</th>
                    <th scope="col">contact</th>
                  </tr>
                </thead>

                <tbody>
                  {response.data.doctorDetails[0].appointmentdetails.map(
                    (row) => (
                      <tr>
                        <th scope="row">{row.date}</th>
                        <td>{row.time}</td>
                        <td>{row.bookedby}</td>
                        <td>
                          <a
                            className="mx-1"
                            href={`tel: +91${row.contact}`}
                            target="_blank"
                          >
                            {row.contact}
                          </a>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-secondary p-1 border-rounded"
                            onClick={(e) => {
                              const deleteappointment = {
                                condition_obj: {
                                  email: email,
                                },

                                newdata_obj: {
                                  appointmentdetails: row,
                                },
                              };
                              axios
                                .patch(
                                  "http://localhost:3001/doctor/deleteappointment",
                                  deleteappointment
                                )
                                .then((response) => {
                                  console.log(response);

                                  alert("clear successfully");
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
                            }}
                          >
                            Clear Appointment
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        );
      });
  }, [doctorDetails]);

  return <>{doctorDetails}</>;
}

export default DoctorAppointment;
