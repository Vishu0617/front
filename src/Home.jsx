import React, { useState } from "react";
import "./Home.css";
import logo from "./img/Transport-logo.png";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import AdminLogin from "./AdminComponent/Login/AdminLogin";
import UserLogin from "./UserComponent/UserLogin/UserLogin";

const position = {
  lat: 20.75596,
  lng: 73.058237,
};
const onLoad = (marker) => {
  // console.log("marker: ", marker);
};

function Home({setAdminData,setClientData}) {
  const [model, setModel] = useState(false);

  const [userModel, setUserModel] = useState(false);

  return (
    <>
      <nav className=" hader">
        <div className="container-fluid navbar navbar-expand-lg shadow">
          <img className="clogo" src={logo} alt="logo" />

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="links navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item p-2 ">
                  <Link
                    className="btn btn-outline-success"
                    onClick={() => setModel(true)}
                    to=""
                  >
                    Admin
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <Link
                    className="btn btn-outline-primary"
                    onClick={() => setUserModel(true)}
                    to=""
                  >
                    User
                  </Link>
                </li>
                {/* <li className="nav-item p-2">
                  <Link
                    className="btn btn-outline-primary"
                    to="/client/UserComponent/Dashbord/ClientDashbord"
                  >
                    Dashbord
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

   {/* new nabar */}

   

        {/* admin login model */}
        <Modal className="mt-2 " isOpen={model} toggle={() => setModel(!model)}>
          <ModalHeader toggle={() => setModel(!model)}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="heding">
                <h5 className="container">Admin Login</h5>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <img src={logo} alt="logo" height={100} width={100} />
            <AdminLogin
              setAdminData={setAdminData}
            />
          </ModalBody>
        </Modal>

        {/* user login model */}
        <Modal
          className="mt-2 "
          isOpen={userModel}
          toggle={() => setModel(!userModel)}
        >
          <ModalHeader toggle={() => setUserModel(!userModel)}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="heding">
                <h5 className="container">User Login</h5>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <img src={logo} alt="logo" height={100} width={100} />
            <UserLogin setClientData={setClientData} />
          </ModalBody>
        </Modal>

        {/* map */}

        <LoadScript googleMapsApiKey="AIzaSyA5CAyIL66n4E0sjb9jxaGPW7_o7sCIsTY">
          <GoogleMap
            // mapContainerStyle={containerStyle}
            mapContainerClassName="map"
            center={position}
            zoom={10}
          >
            <Marker onLoad={onLoad} position={position} />
          </GoogleMap>
        </LoadScript>
      </nav>
    </>
  );
}

export default Home;
