import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Verifyuser() {
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/fetch?email=${param.email}`)
      .then((response) => {
        console.log(response);

        if (response.data.userDetails[0].__v === 0) {
          const updateDetails = {
            condition_obj: {
              email: param.email,
            },
            newdata_obj: {
              status: 1,
              __v: 1,
            },
          };
          axios
            .patch("http://localhost:3001/user/update", updateDetails)
            .then((response) => {
              alert("User Verified....");
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {});
  }, []);

  return <></>;
}

export default Verifyuser;
