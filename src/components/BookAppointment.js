import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function BookAppointment() {
  const navigate = useNavigate();

  // console.log(email);
  const [doctorDetails, setDoctorDetails] = useState([]);

  //GETTING DATA USING PARAM WHEN BOOK APPOINTMENT BUTTON IS CLICKED----------------------------------------
  const params = useParams();

  //FETCHING THE DOCTOR'S DETAILS FOR CHECKING HOW MANY SLOTS ARE BOOKED-------------------------------------------------
  useEffect(() => {
    axios
      .get(`http://localhost:3001/doctor/fetch?email=${params.email}`)
      .then((response) => {
        setDoctorDetails(response.data.doctorDetails[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //FUNCTION FOR SLOT BOOKING--------------------------------------------------------------------------------------------

  const bookSlot = (e) => {
    if (doctorDetails.appointmentnumber < 12) {
      const updateDetails = {
        condition_obj: {
          email: params.email,
        },
        newdata_obj: {
          appointmentnumber: doctorDetails.appointmentnumber + 1,

          appointmentdetails: [
            ...doctorDetails.appointmentdetails,
            {
              date: new Date(),
              time: e.target.value,
              contact: localStorage.getItem("phone"),
              bookedby: localStorage.getItem("name"),
            },
          ],
        },
      };

      //IF A SLOT IS ALREADY BOOKED-----------------------------------------------

      var flag = true;

      doctorDetails.appointmentdetails.map((row) => {
        if (e.target.value === row.time) {
          flag = false;
        } else {
        }
      });

      //IF SLOT IS NOT BOOKED THEN----------------------------------
      if (flag) {
        axios
          .patch("http://localhost:3001/doctor/update", updateDetails)
          .then((response) => {
            swal(
              `Slot booked successfully!`,
              "Our Expert will contact you ASAP!",
              "success"
            );
          })
          .catch((error) => {
            alert("cannot booked");
          });
      } else {
        swal({
          title: "Your Bad!",
          text: "Required Slot is already booked!",
          icon: "info",
        });
      }
    } else {
      swal({
        title: "Oh No!",
        text: "Slots are not available, Please try after a while!",
        icon: "info",
      });
    }
  };
  return (
    <>
      <h1 className="text-center mt-3">Book Your Appointments</h1>
      <p className="text-center">by the span of your finger with our experts</p>
      <div className="container">
        <h5>
          <u>Number of available slots</u> -{" "}
          <span>{12 - doctorDetails.appointmentnumber}</span>
        </h5>
        <div className="row my-3">
          <h6 style={{ color: "#563d7c" }}>
            <i class="bi bi-brightness-alt-high-fill mx-2"></i>In Morning :
          </h6>
          <hr />
          <div className="col-md-1 my-1">
            <button
              value={"9:00 AM"}
              type="button"
              className="btn btn-info"
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              9:00 AM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"9:30 AM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              9:30 AM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"10:00 AM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              10:00 AM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"10:30 AM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              10:30 AM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"11:00 AM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              11:00 AM
            </button>
          </div>
          <div
            className="col-md-1 my-1"
            onClick={(e) => {
              bookSlot(e);
            }}
          >
            <button
              type="button"
              className="btn btn-info"
              value={"11:20 AM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              11:20 AM
            </button>
          </div>

          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"11:40 AM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              11:40 AM
            </button>
          </div>
        </div>

        <div className="row">
          <h6 style={{ color: "#563d7c" }}>
            <i class="bi bi-brightness-high mx-2"></i>In Afternoon :
          </h6>
          <hr />
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"2:00 PM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              2:00 PM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"2:30 PM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              2:30 PM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"3:00 PM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              3:00 PM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"3:20 PM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              3:20 PM
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button
              type="button"
              className="btn btn-info"
              value={"4:00 PM"}
              onClick={(e) => {
                bookSlot(e);
              }}
            >
              4:00 PM
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
