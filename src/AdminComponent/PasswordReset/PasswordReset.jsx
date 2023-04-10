import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import video from '../../img/icon/cloud1.mp4'
import Button from '@mui/material/Button';




function PasswordReset() {
  const [password, setPassword] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/findId/${id}`,)
      .then((res) => {
       console.log(res.data.userVali);
        console.log("user valid");
      })
      .catch((err) => {
        console.log(err+"user note valid");
        navigate("/AdminComponent/ForgetPassword/ForgetPassword");
      });
  });

  const inputPwd = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
    console.log(password)
  };

  const submitNewPwd = (e) => {
    e.preventDefault();
    console.log(password)
    axios
    .put(`http://localhost:3001/updatePwd/${id}`,password)
    .then((res) => {
     console.log(res.data.mesaage);
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
    }).catch((err)=>{
       console.log(err.response.data.error)
       toast.error(err.response.data.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  };

  return (
    <>
    <div className="admin-login-body">
    <video autoPlay muted loop src={video} className="login-video"></video>
      <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h4 align="">Generate New Password</h4>
        <hr />
        <form className="row g-3 mt-2 div-mid">
          <div className="col-md-6 form-control admin-input shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              className="inputsignup"
              type="Password"
              placeholder="********"
              name="pwd"
              maxLength="10"
              onChange={inputPwd}
              // required
            />
          </div>
          <center>
            <Button
              className="ms-1 btn bg-dark text-white"
              type="Submit"
              onClick={submitNewPwd}
            >
              Submit
            </Button>
          </center>
        </form>
      </div>
    </div>
    </>
  );
}

export default PasswordReset;
