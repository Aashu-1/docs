import React from "react";
import { useEffect, useState } from "react";

function Header() {
  const [header, setHeader] = useState();
  useEffect(() => {
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "admin"
    ) {
      setHeader(() => {
        return (
          <>
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
              <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small>
                      Welcome Back {localStorage.getItem("name").toUpperCase()}{" "}
                      !
                    </small>
                  </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-envelope text-primary me-2"></small>
                    <small>{localStorage.getItem("email")}</small>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Topbar End */}
          </>
        );
      });
    } else if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "user"
    ) {
      setHeader(() => {
        return (
          <>
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
              <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small>Welcome Back {localStorage.getItem("name")}!</small>
                  </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-envelope text-primary me-2"></small>
                    <small>{localStorage.getItem("email")}</small>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Topbar End */}
          </>
        );
      });
    } else if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "doctor"
    ) {
      setHeader(() => {
        return (
          <>
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
              <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small>Welcome Back {localStorage.getItem("name")}!</small>
                  </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-envelope text-primary me-2"></small>
                    <small>{localStorage.getItem("email")}</small>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-1">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-sm-square bg-white text-primary me-0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Topbar End */}
          </>
        );
      });
    } else {
      setHeader(() => {
        return (
          <>
            <div className="container-fluid bg-light p-0">
              <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, Indore, India</small>
                  </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                  <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+012 345 6789</small>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center">
                    <a
                      className="btn btn-sm-square bg-white text-primary me-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-sm-square bg-white text-primary me-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-sm-square bg-white text-primary me-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      className="btn btn-sm-square bg-white text-primary me-0"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Topbar End */}
          </>
        );
      });
    }
  }, [header]);

  return <>{header}</>;
}

export default Header;
