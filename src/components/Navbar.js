import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

function Navbar() {
  const [nav, setNav] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "admin"
    ) {
      setNav(
        <>
          {/* ADMIN NAVBAR START  */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link
              className="navbar-brand d-flex align-items-center px-4 px-lg-5"
              to={"/"}
            >
              <h2 className="m-0 text-primary">
                <img
                  src="assets/img/logo.png"
                  width="40px"
                  height="30"
                  alt=""
                />
                Doctorz
              </h2>
            </Link>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to={"/admin"} className="nav-item nav-link ">
                  Admin Home
                </Link>
                <Link to={"/manageuser"} className="nav-item nav-link ">
                  Manage Users
                </Link>

                <div className="nav-item dropdown">
                  <Link
                    to={"/"}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Manage doctors
                  </Link>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to={"/adddoctors"} className="dropdown-item">
                      Add Doctors
                    </Link>
                    <Link to={"/manipulatedoctors"} className="dropdown-item">
                      Manipulate Doctors
                    </Link>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <Link
                    to={"/"}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Settings
                  </Link>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to={"/cpadmin"} className="dropdown-item">
                      change password
                    </Link>
                    <Link to={"/epadmin"} className="dropdown-item">
                      edit profile
                    </Link>
                  </div>
                </div>
                <Link to={"/logout"} className="nav-item nav-link">
                  logout
                </Link>
              </div>
              <Link className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                Get A Quote<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </nav>
          {/* ADMIN NAVBAR END */}
          {/* -------------------------------------------------------------------------------------------- */}
        </>
      );
    } else if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "user"
    ) {
      setNav(
        <>
          {" "}
          {/* USER NAVBAR START  */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link
              className="navbar-brand d-flex align-items-center px-4 px-lg-5"
              to={"/"}
            >
              <h2 className="m-0 text-primary">
                <img
                  src="assets/img/logo.png"
                  width="40px"
                  height="30"
                  alt=""
                />
                Doctorz
              </h2>
            </Link>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to={"/user"} className="nav-item nav-link ">
                  User Home
                </Link>
                <Link to={"/displaydoctoruser"} className="nav-item nav-link ">
                  Our Doctors
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to={"/"}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Settings
                  </Link>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to={"/cpuser"} className="dropdown-item">
                      change password
                    </Link>
                    <Link to={"/epuser"} className="dropdown-item">
                      edit profile
                    </Link>
                  </div>
                </div>
                <Link to={"/logout"} className="nav-item nav-link">
                  logout
                </Link>
              </div>
              <Link className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                Get A Quote<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </nav>
          {/* USER NAVBAR END */}
          {/* -------------------------------------------------------------------------------------------- */}
        </>
      );
    } else if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "doctor"
    ) {
      setNav(
        <>
          {" "}
          {/* DOCTOR NAVBAR START  */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link
              className="navbar-brand d-flex align-items-center px-4 px-lg-5"
              to={"/"}
            >
              <h2 className="m-0 text-primary">
                <img
                  src="assets/img/logo.png"
                  width="40px"
                  height="30"
                  alt=""
                />
                Doctorz
              </h2>
            </Link>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to={"/doctor"} className="nav-item nav-link ">
                  Doctor Home
                </Link>
                <Link to={"/bookedappointments"} className="nav-item nav-link ">
                  Appointments
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to={"/"}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Settings
                  </Link>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to={"/cpdoctor"} className="dropdown-item">
                      change password
                    </Link>
                    <Link to={"/epdoctor"} className="dropdown-item">
                      edit profile
                    </Link>
                  </div>
                </div>
                <Link to={"/logout"} className="nav-item nav-link">
                  logout
                </Link>
              </div>
              <Link className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                Get A Quote<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </nav>
          {/* DOCTOR NAVBAR END */}
          {/* -------------------------------------------------------------------------------------------- */}
        </>
      );
    } else {
      setNav(
        <>
          {/* VISITOR NAVBAR START  */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link
              to={"/"}
              className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
              <img src="assets/img/logo.png" width="40px" height="30" alt="" />
              <h2 className="m-0 text-primary">Doctorz</h2>
            </Link>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to={"/"} className="nav-item nav-link">
                  Home
                </Link>
                <Link to={"/about"} className="nav-item nav-link">
                  About
                </Link>
                <Link to={"service"} className="nav-item nav-link">
                  Services
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to={"/"}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to={"/"} className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to={"/"} className="dropdown-item">
                      FAQs
                    </Link>
                  </div>
                </div>
                <Link to={"/contact"} className="nav-item nav-link">
                  Contact
                </Link>
                <Link to={"/register"} className="nav-item nav-link">
                  Register
                </Link>
                <Link to={"/login"} className="nav-item nav-link">
                  Login
                </Link>
              </div>
              <Link
                to={"/"}
                className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              >
                Get A Quote<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </nav>
          {/* VISITOR NAVBAR END */}
          {/* /* ---------------------------- */}
        </>
      );
    }
  }, [nav]);

  return (
    <>
      <Auth />
      {nav}
    </>
  );
}

export default Navbar;
