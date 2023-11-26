import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./components/linkcomponents/homeComponent/Home";
import About from "./components/linkcomponents/aboutComponent/About";
import Service from "./components/linkcomponents/serviceComponent/Service";
import Otpverify from "./components/otpverification/Otpverify";
import Register from "./components/linkcomponents/registerComponent/Register";
import Verifyuser from "./components/verifyusercomponent/Verifyuser";
import Contact from "./components/linkcomponents/contactComponent/Contact";
import Login from "./components/linkcomponents/loginComponent/Login";
import Admin from "./components/Admin";
import User from "./components/User";
import Logout from "./components/linkcomponents/logoutComponent/Logout";

import Manageuser from "./components/linkcomponents/ManageUser/Manageuser";

import Newpassword from "./components/newpassword/Newpassword";
import EpAdmin from "./components/linkcomponents/epadmincomponent/EpAdmin";
import CpAdmin from "./components/linkcomponents/cpadmincomponent/CpAdmin";
import EpUser from "./components/linkcomponents/epusercomponent/EpUser";
import CpUser from "./components/linkcomponents/cpusercomponent/CpUser";
import Adddoctors from "./components/linkcomponents/managedoctors/Adddoctors";

import DisplaydoctorUser from "./components/linkcomponents/displaydoctosUser/DisplaydoctorUser";

import CpDoctor from "./components/linkcomponents/cpdoctorComponent/CpDoctor";
import ManipulateDoctors from "./components/linkcomponents/managedoctors/ManipulateDoctors";
import ViewDoctorProfile from "./components/linkcomponents/viewdoctprofileComponent/viewDoctorProfile";
import EpDoctor from "./components/linkcomponents/epdoctorComponent/epDoctor";
import BookAppointment from "./components/BookAppointment";
import DoctorAppointment from "./components/linkcomponents/doctorAppointmentComponent/DoctorAppointment";

function App() {
  return (
    <>
      <Header />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<Newpassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verifyuser/:email" element={<Verifyuser />}></Route>
        {/* //DOCTOR RELATED ROUTES-------------------------------------------------------------------------- */}

        <Route path="/cpdoctor" element={<CpDoctor />}></Route>
        <Route path="/epdoctor" element={<EpDoctor />}></Route>
        <Route
          path="/manipulatedoctors"
          element={<ManipulateDoctors />}
        ></Route>
        <Route
          path="/bookappointment/:email"
          element={<BookAppointment />}
        ></Route>
        <Route
          path="/bookedappointments"
          element={<DoctorAppointment />}
        ></Route>
        {/* //------------------------------------------------------------------------------------
          //USER RELATED ROUTES */}
        <Route path="/user" element={<User />}></Route>
        <Route path="/epuser" element={<EpUser />}></Route>
        <Route path="/cpuser" element={<CpUser />}></Route>
        <Route
          path="/displaydoctoruser"
          element={<DisplaydoctorUser />}
        ></Route>
        {/* //------------------------------------------------------------------------------------
          //ADMIIN RELATED ROUTES */}
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/epadmin" element={<EpAdmin />}></Route>
        <Route path="/cpadmin" element={<CpAdmin />}></Route>
        <Route path="/manageuser" element={<Manageuser />}></Route>
        <Route path="/adddoctors" element={<Adddoctors />}></Route>

        <Route
          path="/viewdoctorprofile/:_id"
          element={<ViewDoctorProfile />}
        ></Route>
        {/* //ROUTE FOR LOGOUT */}
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/otpverification" element={<Otpverify />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
