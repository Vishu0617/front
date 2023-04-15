import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import SignUpScema from "./SignUpScema";
import { Link, useNavigate } from "react-router-dom";
// import video from '../../img/icon/Transport.mp4'
// import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./SignUp.css";
import {  toast } from 'react-toastify';
import { FaFacebook,FaYoutube,FaTwitter,FaInstagram,FaGithub } from 'react-icons/fa';


const initialValues = {
  name: "",
  email: "",
  phone: "",
  pwd: "",
  cpwd: "",
};

function UserSignUp() {
  const navigate = useNavigate();
  const [userFile, setUserFile] = useState();
  const [showPwd, setShowPwd] = useState("Password");

 

  // errors,touched,
  const { values, errors,touched,handleBlur,handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpScema,
    onSubmit: (values) => {
      console.log(values);
      setValues(values)
    },
  });

  const userFileInput = (e) => {
    const file = e.target.files[0];
    setUserFile(file);
    console.log(userFile);
  };

  const setValues=(values)=>{
    const fromData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      fromData.append(key, value);
    }
    fromData.append("file", userFile);
    // console.log(userFile);
    axios
      .post("http://localhost:3001/clientRegi", fromData)
      .then((res) => {
        console.log(res.data);
      //  toast.success(res.data.message);
       toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.error);
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        // toast.error(error.response.data.error);
      });
  }
 

  return (
    <> 
     <div class="user-image-signup">
        <form className="row g-3 user-form-body bg-white shadow rounded" onSubmit={handleSubmit}>
          <h5>User Sign Up</h5>
          <hr />
          <div className="col-md-6 input-div ">
            <label class="form-label fw-bold" >
              <i className="zmdi zmdi-account"></i> User Name
            </label>
            <p>{errors.name && touched.name ? (
                  <span className="errorMassage1">{errors.name}</span>
                ):null} </p>
            <div class="form-control d-flex mb-4">
              <input
                class="inputlogin"
                type="text"
                placeholder="Enter Name"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                // required
              />
            </div>
          </div>

          <div className="col-md-6 input-div">
            <label class="form-label fw-bold" >
              <i className="zmdi zmdi-email"></i> User Email
            </label>
            <p> {errors.email && touched.email ? (
            <span className="errorMassage1">{errors.email}</span>
          ):null} </p>
            <div class="form-control d-flex mb-4">
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                maxLength={255}
                class="inputlogin"
                // required
              />
            </div>
          </div>

          <div className="col-md-6 input-div">
            <label class="form-label fw-bold" >
              <i className="zmdi zmdi-lock"></i> User Password
            </label>
            <p> {errors.pwd && touched.pwd ? (
            <span className="errorMassage1">{errors.pwd}</span>
          ):null} </p>
            <div class="form-control d-flex mb-4">
              <input
                type={showPwd}
                placeholder="Enter Password"
                name="pwd"
                value={values.pwd}
                onBlur={handleBlur}
                onChange={handleChange}
                maxLength={10}
                class="inputlogin"
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
          </div>

          <div className="col-md-6 input-div">
            <label class="form-label fw-bold" >
              <i className="zmdi zmdi-lock"></i> User Conform Password
            </label>
            <p>{errors.pwd && touched.pwd ? (
            <span className="errorMassage1">{errors.pwd}</span>
          ):null} </p>
            <div class="form-control d-flex mb-4">
              <input
                type={showPwd}
                placeholder="Enter Conform Password"
                name="cpwd"
                value={values.cpwd}
                onBlur={handleBlur}
                onChange={handleChange}
                maxLength={10}
                class="inputlogin"
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
          </div>

          <div className="col-md-6 input-div">
            <label class="form-label fw-bold" >
              <i className="zmdi zmdi-phone"></i> User Phone Number
            </label> 
            <p>{errors.phone && touched.phone ? (
            <span className="errorMassage1">{errors.phone}</span>
          ):null} </p>
            <div class="form-control d-flex mb-4">
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                maxLength={10}
                class="inputlogin"
                // required
              />
            </div>
          </div>

          <div className="col-md-6 input-div">
            <label class="form-label fw-bold" >
              <i class="zmdi zmdi-search-in-file"></i> User Profile
            </label>
            <div class="form-control d-flex mb-4">
              <input
                type="file"
                name="file"
                onChange={userFileInput}
                class="inputlogin"
                // required
              />
            </div>
          </div>

          <div className="col-12 mb-2">
            <Button type="submit" className="btn bg-dark text-white addGoods">
              Sign Up
            </Button>
          </div>
        
          <div className="text-end">
            <label>i have allredy account !!</label>
            <label>
              <Link className="user-login-link" to="/UserComponent/UserLogin/UserLogin">
                Back login
              </Link>
            </label>
          </div>
        </form>

          <div class="text-center user-form-soical rounded bg-white align-items-center">
              <hr/>
                <p className="fw-bold">Follow Transport Triangle on social media</p>
                <a href="https://www.youtube.com/@vrpatel405/featured" target='_blank' rel="noreferrer" alt="youtube" class="btn  m-1 rounded-circle">
                <FaYoutube className="social-icon" color="red"  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100044580701985" target='_blank' rel="noreferrer" alt="facebook" class="btn  m-1 rounded-circle" >
                <FaFacebook  className="social-icon" color="blue" />
                </a>
                <a href="https://twitter.com/vishalP1188150" target='_blank' rel="noreferrer" alt="twitter" class="btn  m-1 rounded-circle" >
                <FaTwitter  className="social-icon" color="#1DA1F2" />
                </a>
                <a href="https://github.com/Vishu0617" target='_blank' rel="noreferrer" alt="github" class="btn  m-1 rounded-circle">
                <FaGithub  className="social-icon" />
                </a>
                <a href="https://www.instagram.com/ptl_vishal_/" target='_blank' rel="noreferrer" alt="github" class="btn  m-1 rounded-circle">
                <FaInstagram className="instgram social-icon"  />
                </a>
          </div>
      </div> 
    </>
  );
}

export default UserSignUp;
