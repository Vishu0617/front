import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

function AdminLogin({ setAdminData }) {
  const navigate = useNavigate();

  const [adminLoginData, setAdminLoginData] = useState();
  const [showPwd, setShowPwd] = useState('Password')

  // const [errorMessage, setErrorMessage] = useState()

  const loginChack = (e) => {
    setAdminLoginData({ ...adminLoginData, [e.target.name]: e.target.value });
    // console.log(login)
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    // console.log(login);
    axios
      .post("http://localhost:3001/login", adminLoginData, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data);
        setAdminData(res.data.data);
      const id=res.data.data._id;
        // console.log(res.data.token);
        alert(res.data.message);
        navigate(`/admin/AdminComponent/Dashbord/AdminDashbord/${id}`);
      })
      .catch((error) => {
        // if (error.response.data.error) {
        // setErrorMessage(error.response.data.error);
        alert(error.response.data.error);
        console.log(error.response.data.error);
      });
  };

  return (
    <>
      <div className=" rounded mb-4 mt-4 container">
        <form className="row g-3 " onSubmit={loginSubmit}>
          <div className="col-md-6 form-control shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-email"></i>
            </label>
            <input
              className="inputsignup"
              type="email"
              placeholder="Enter your register email..."
              name="email"
              maxLength="255"
              onChange={loginChack}

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
              placeholder="Enter your register password ...."
              name="pwd"
              maxLength="10"
              onChange={loginChack}
              // required
            />
             {showPwd==="Password"?(
               <span className="icon-div" onClick={()=>setShowPwd("text")}><i className="zmdi zmdi-eye-off icon"></i></span>
            ):(
              <span  className="icon-div" onClick={()=>setShowPwd("Password")}> <i className="zmdi zmdi-eye icon" ></i></span>
            )} 
          </div>
          <Link className="link" to="/AdminComponent/ForgetPassword/ForgetPassword">
          Forgot Password
        </Link>
          <center className="submit-divr ">
            <button
              className="submit btn btn-outline-success"
              type="Submit"
              // onClick={submitHandle}
            >
              Submit
            </button>
          {/* <div className="mt-2">
          new?
          <Link
            className="link"
            align="right"
            to="/AdminComponent/SignUp/SignUp"
          >
            Registration
          </Link> 
          </div>*/}
          </center>
        </form>
      </div>
     
    </>
  );
}

export default AdminLogin;
