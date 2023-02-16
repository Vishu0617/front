import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function UserSignUp() {

  const navigate=useNavigate();
  const [userSignUp, setUserSignUp] = useState({});
  const [userFile, setUserFile] = useState();

  const userSignInput = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
    // console.log(userSignUp);
  };

  const userFileInput = (e) => {
    const file = e.target.files[0];
    setUserFile(file);
    console.log(userFile);
  };

  const clinetSubmit = (e) => {
    e.preventDefault();

    const fromData = new FormData();
    for (const [key, value] of Object.entries(userSignUp)) {
      fromData.append(key, value);
    }
    fromData.append("file", userFile);
    // console.log(userFile);
    axios
      .post("http://localhost:3001/clientRegi", fromData)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        navigate('/')
      })
      .catch((error) => {
        console.log(error.response.data.error);
        alert(error.response.data.error)
      });
  };

  return (
    <>
      <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h1 align="center">Sign Up</h1>
        <hr />
        <form className="row g-3 div-mid" onSubmit={clinetSubmit}>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-account"></i>
            </label>
            <input
              className=" inputsignup "
              type="text"
              placeholder="User Name"
              name="name"
              maxLength="255"
              onChange={userSignInput}
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
              placeholder="Email Id"
              name="email"
              maxLength="255"
              onChange={userSignInput}
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
              onChange={userSignInput}
              // required
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              className="inputsignup"
              type="Password"
              placeholder="Password"
              name="pwd"
              maxLength="10"
              onChange={userSignInput}
              // required
            />
            {/* {showPwd==="Password"?(
               <span className="icon-div" onClick={()=>setShowPwd("text")}><i className="zmdi zmdi-eye-off icon"></i></span>
            ):(
              <span  className="icon-div" onClick={()=>setShowPwd("Password")}> <i className="zmdi zmdi-eye icon" ></i></span>
            )} */}
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              className="inputsignup"
              type="Password"
              placeholder="Conform Password"
              name="cpwd"
              maxLength="10"
              onChange={userSignInput}
              // required
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2"></label>
            <input
              className="inputsignup"
              type="file"
              name="file"
              onChange={userFileInput}
              // required
            />
          </div>
          <center className="submit-divr ">
            <button className="submit btn btn-outline-success" type="Submit">
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

export default UserSignUp;
