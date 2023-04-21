import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";
// import video from '../../img/icon/cloud1.mp4'
import { toast } from "react-toastify";
import Button from "@mui/material/Button";

function AdminLogin({ setAdminData }) {
  const navigate = useNavigate();

  const [adminLoginData, setAdminLoginData] = useState();
  const [showPwd, setShowPwd] = useState("Password");

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
        const id = res.data.data._id;
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
        {/* <video autoPlay muted loop src={video} className="login-video"></video> */}
      {/* <div className="admin-login-body">
        <div className="rounded login-main shadow-lg container">
          <h5 className="">Admin Login</h5>
          <hr />
          <form className="row g-3 " onSubmit={loginSubmit}>
            <div className="col-md-6 form-control admin-input border-dark  rounded  d-flex">
              <label className="form-label mt-2">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                className="inputsignup"
                type="email"
                placeholder="Enter E-mail"
                name="email"
                maxLength="255"
                onChange={loginChack}

                // required
              />
            </div>
            <div className="col-md-6 form-control ms-0 admin-input  border-dark rounded  d-flex">
              <label className="form-label mt-2">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                className="inputsignup"
                type={showPwd}
                placeholder="Enter Password"
                name="pwd"
                maxLength="10"
                onChange={loginChack}
                // required
              />
              {showPwd === "Password" ? (
                <span className="icon-div" onClick={() => setShowPwd("text")}>
                  <i className="zmdi zmdi-eye-off icon"></i>
                </span>
              ) : (
                <span
                  className="icon-div"
                  onClick={() => setShowPwd("Password")}
                >
                  <i className="zmdi zmdi-eye icon"></i>
                </span>
              )}
            </div>
            <Link
              className="link "
              to="/AdminComponent/ForgetPassword/ForgetPassword"
            >
              Forgot Password
            </Link>
            <div>
              <Button className="submit btn bg-dark text-white" type="Submit"
                Submit
              </Button>
            </div>
            {/* <div className="mt-2">
          new?<Link className="link" align="right" to="/AdminComponent/SignUp/SignUp">Registration</Link></div> 
          </form>
        </div>
      </div> */}

      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">
             wellcome to transport triangle
            </h1>
            <p class="col-lg-10 fs-4">
             thisis the simple collage base project.
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form
              class="p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={loginSubmit}
            >
              <div className="col-md-6 form-control admin-input border-dark mt-2 rounded  d-flex">
              <label className="form-label mt-2">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                className="inputsignup"
                type="email"
                placeholder="Enter E-mail"
                name="email"
                maxLength="255"
                onChange={loginChack}

                // required
              />
            </div>
              <div className="col-md-6 form-control ms-0 admin-input mt-2 border-dark rounded  d-flex">
              <label className="form-label mt-2">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                className="inputsignup"
                type={showPwd}
                placeholder="Enter Password"
                name="pwd"
                maxLength="10"
                onChange={loginChack}
                // required
              />
              {showPwd === "Password" ? (
                <span className="icon-div" onClick={() => setShowPwd("text")}>
                  <i className="zmdi zmdi-eye-off icon"></i>
                </span>
              ) : (
                <span
                  className="icon-div"
                  onClick={() => setShowPwd("Password")}
                >
                  <i className="zmdi zmdi-eye icon"></i>
                </span>
              )}
            </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <Button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </Button>
              <hr class="my-4" />
              <Link
              className="link "
              to="/AdminComponent/ForgetPassword/ForgetPassword"
            >
              Forgot Password
            </Link>
              {/* <small class="text-muted">
                By clicking <Link className="link" align="right" to="/AdminComponent/SignUp/SignUp">Registration</Link>
              </small> */}
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
