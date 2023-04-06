import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";
import {  toast } from 'react-toastify';


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
        // alert(res.data.message);
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
        navigate(`/admin/AdminComponent/Dashbord/AdminDashbord/${id}`);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        // alert(error.response.data.error);
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
    <div className="admin-login-body">
      <div className="rounded login-main bg-white shadow-lg container">
       <h5>Admin Login</h5><hr/>
        <form className="row g-3 " onSubmit={loginSubmit}>
          <div className="col-md-6 form-control admin-input  rounded  d-flex">
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
          <div className="col-md-6 form-control ms-0 admin-input rounded  d-flex">
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
          <Link className="link " to="/AdminComponent/ForgetPassword/ForgetPassword">
          Forgot Password
        </Link>
          <div>
            <button className="submit btn btn-dark" type="Submit"> Submit</button>
          </div>
          {/* <div className="mt-2">
          new?<Link className="link" align="right" to="/AdminComponent/SignUp/SignUp">Registration</Link></div> */}
  
        </form>
      </div>
    </div>
     </>
  );
}

export default AdminLogin;
