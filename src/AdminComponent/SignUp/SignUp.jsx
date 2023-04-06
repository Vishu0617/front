import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({});
  const [file, setFile] = useState();
  const [showPwd, setShowPwd] = useState('Password')

  const inputData = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    // console.log(registerData);
  };

  const fileData = (e) => {
    const file=e.target.files[0];
    setFile(file)
    // console.log(file)
  };

  const submitHandle = (e) => {
    alert("hii")
    e.preventDefault();
   console.log(registerData)
    const fromData = new FormData();
    for (const [key, value] of Object.entries(registerData)) {
      fromData.append(key, value);
    }
    fromData.append("file", file);
    console.log(file)
    axios
      .post("http://localhost:3001/regi", fromData)
      .then((response) => {
        console.log(response.data);

        alert(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.error);
          console.log(error.response.data);
        }
      });
  };
  return (
    <>
      <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h1 align="center">Sign Up</h1>
        <hr />
        <form className="row g-3 div-mid" onSubmit={submitHandle}>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-account"></i>
            </label>
            <input
              className=" inputsignup "
              type="text"
              placeholder="User Full Name"
              name="name"
              maxLength="255"
              onChange={inputData}
              // required
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-email"></i>
            </label>
            <input
              className="inputsignup"
              type="email"
              placeholder="Email id"
              name="email"
              maxLength="255"
              onChange={inputData}
              // required
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-phone"></i>
            </label>
            <input
              className="inputsignup"
              type="text"
              placeholder="Conntect Detail"
              name="phone"
              maxLength="10"
              onChange={inputData}
              // required
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              className="inputsignup"
              type={showPwd}
              placeholder="Password"
              name="pwd"
              maxLength="10"
              onChange={inputData}
              // required
            />
             {showPwd==="Password"?(
               <button type="button"  className="icon-div" onClick={()=>setShowPwd("text")}><i className="zmdi zmdi-eye-off icon"></i></button >
            ):(
              <button  type="button" className="icon-div" onClick={()=>setShowPwd("Password")}> <i className="zmdi zmdi-eye icon" ></i></button >
            )} 
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              className="inputsignup"
              type={showPwd}
              placeholder="Conform Password"
              name="cpwd"
              maxLength="10"
              onChange={inputData}
              // required
            />
            {showPwd==="Password"?(
               <span className="icon-div" onClick={()=>setShowPwd("text")}><i className="zmdi zmdi-eye-off icon"></i></span>
            ):(
              <span  className="icon-div" onClick={()=>setShowPwd("Password")}> <i className="zmdi zmdi-eye icon" ></i></span>
            )} 
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              {/* <i className="zmdi zmdi-lock"></i> */}
            </label>
            <input
              className="inputsignup"
              type="file"
              name="file"
              onChange={fileData}
              // required
            />
          </div>
          <center className="submit-divr ">
            <button
              className="submit btn btn-outline-success"
              type="Submit"
              // onClick={submitHandle}
            >
              Submit
            </button>
            <Link className="submit m-1 btn btn-outline-danger" to="/">
              Back
            </Link>
          </center>
        </form>
      </div>
    </>
  );
}

export default SignUp;
