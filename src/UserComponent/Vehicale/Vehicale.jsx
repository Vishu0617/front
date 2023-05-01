import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Vehicale.css";
import Button from '@mui/material/Button';
import {  toast } from 'react-toastify';



function Vehicale() {
  const [vehicale, setVehicale] = useState({});

  const navigate=useNavigate();

  const { id } = useParams();
 
  const inputData = (e) => {
    setVehicale({ ...vehicale, [e.target.name]: e.target.value });
    console.log(vehicale)
  };

  const submitData = (e) => {
    e.preventDefault();
       axios.post(`http://localhost:3001/addVehicale/${id}`,vehicale).then((res) => {
        console.log(res.data);
       
       toast.success(res.data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        navigate(`/client/UserComponent/Dashbord/ClientDashbord/${id}`)

      }).catch((error) => {
        console.log(error.response.data.error);
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
  };

  return (
    <>
      <div className="client-dashbord">
        <div className=" rounded vehicale-main card mb-4 p-5 container">
          <h5>ADD YOUR VEHICLE</h5>
         <Link className="viewVehicale" to={`/client/UserComponent/Vehicale/MyVehicale/${id}`}>My Vehicle</Link>
          <hr />
          <form className="row g-3 div-mid" onSubmit={submitData}>
            {/* {id} */}
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="text"
                placeholder="Owner Name"
                name="name"
                onChange={inputData}
                
              />
            </div>
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="text"
                placeholder="Owner Contact Detail"
                name="phone"
                onChange={inputData}
                maxLength="10"
                
              />
            </div>
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="text"
                placeholder="Enter Vahicle Model Name"
                name="vname"
                onChange={inputData}
                
              />
            </div>
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="text"
                placeholder="Enter Vahicle Number"
                name="vnumber"
                onChange={inputData}
                
              />
            </div>
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="email"
                placeholder="Enter Drivar Email"
                name="demail"
                onChange={inputData}
                
              />
            </div>
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="text"
                placeholder="Enter Vahicle Capacity"
                name="capacity"
                onChange={inputData}
            />
            </div>
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="text"
                placeholder="Enter Vahicle Start Location"
                name="slocation"
                onChange={inputData}
              />
            </div>
            <div className="col-md-6 form-control clientVehicale  border-dark rounded d-flex">
              <input
                className=" vehicaleData "
                type="text"
                placeholder="Enter Vahicle Destination Location"
                name="dlocation"
                onChange={inputData}
              />
            </div>
            <center className="border-dark">
              <Button className="btn bg-dark text-white addVehicale" type="Submit">
                Submit
              </Button>
            </center>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vehicale;
