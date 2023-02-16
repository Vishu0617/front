import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Vehicale.css";

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

       axios
      .post(`http://localhost:3001/addVehicale`, vehicale)
      .then((res) => {
        console.log(res.data);
        navigate(`/client/UserComponent/Dashbord/ClientDashbord/${id}`)
      }).catch((error) => {
        console.log(error.response.data.error);
        alert(error.response.data.error)
      });
  };

  return (
    <>
      <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h5>ADD YOUR VEHICALE</h5>
        <hr />
        <form className="row g-3 div-mid" onSubmit={submitData}>
          {/* {id} */}
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <input
              className=" inputsignup "
              type="text"
              placeholder="Owner Name"
              name="name"
              onChange={inputData}
              
            />
          </div>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <input
              className=" inputsignup "
              type="text"
              placeholder="Owner Contect Detail"
              name="phone"
              onChange={inputData}
              maxLength="10"
              
            />
          </div>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <input
              className=" inputsignup "
              type="text"
              placeholder="Enter Vahicale Model Name"
              name="vname"
              onChange={inputData}
              
            />
          </div>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <input
              className=" inputsignup "
              type="text"
              placeholder="Enter Vahicale Number"
              name="vnumber"
              onChange={inputData}
              
            />
          </div>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <input
              className=" inputsignup "
              type="text"
              placeholder="Enter Vahicale Capacity"
              name="capacity"
              onChange={inputData}
              
            />
          </div>
          <center className="submit-divr ">
            <button className="submit btn btn-outline-success" type="Submit">
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  );
}

export default Vehicale;
