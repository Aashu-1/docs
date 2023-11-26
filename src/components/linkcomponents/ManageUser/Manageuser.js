import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function Manageuser() {
  const [userDetails, setUserDetails] = useState([]);
  const [status, setStatus] = useState();

  //FUNCTION FOR DELETING USER FROM THE DB

  //FETCHING THE USER DETAILS FROM THE API AND DISPLAYING IN THE TABLE

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/fetch?role=user")
      .then((response) => {
        console.log(response.data.userDetails);
        setUserDetails(response.data.userDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1 className="my-5 text-center">View And Manipulate Users</h1>
      <table className="table table-bordered overflow-scroll">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Reg ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Info</th>
            <th scope="col">Status</th>
            <th scope="col">Manipulate</th>
          </tr>
        </thead>

        <tbody>
          {userDetails.map((row) => (
            <tr>
              <th scope="col">{row._id}</th>
              <td scope="col">{row.name}</td>
              <td scope="col">{row.email}</td>
              <td scope="col">{row.phone}</td>
              <td scope="col">{row.city}</td>
              <td scope="col">{row.gender}</td>
              <td scope="col">{row.address}</td>
              <td scope="col">{row.info}</td>
              <td scope="col">
                {row.status === 0 && <p style={{ color: "red" }}>InActive</p>}
                {row.status === 1 && <p style={{ color: "green" }}>Active</p>}
              </td>
              <td scope="col">
                <button
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
                      .patch("http://localhost:3001/user/update", updateDetails)
                      .then((response) => {
                        // alert(response.data.msg);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Change status
                </button>
                <br />
                <button
                  className="btn btn-danger p-0 my-1 rounded px-1"
                  onClick={() => {
                    axios
                      .delete("http://localhost:3001/user/delete", {
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
                  Delete user
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Manageuser;
