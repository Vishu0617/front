import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
// import video from '../../img/icon/cloud1.mp4' 
import Button from '@mui/material/Button';



function ForgetPassword() {
    
  const navigate=useNavigate();

  const [email, setEmail] = useState({});

  const  inputData=(e)=>{
      setEmail({...email,[e.target.name]:e.target.value})

  }

  const submitHandle=(e)=>{
     e.preventDefault();
     console.log(email)
     axios.post("http://localhost:3001/sendLink",email).then((res)=>{
      console.log(res.data);
      // alert(res.data.message);
      toast.info(res.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate(`/`);
     }).catch((error)=>{
      // alert(error.response.data.error)
      console.log(error.response.data.error)
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
     })
  }

  return (
    <>
    <div className="admin-login-body">
      {/* <video autoPlay muted loop src={video} className="login-video"></video> */}
        <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h5>Enter Your E-mail</h5><hr/>
            <form className="row g-3 mt-2 div-mid">
              <div className="col-md-6 form-control admin-input border-dark  rounded  d-flex">
                <label className="form-label mt-2"><i className="zmdi zmdi-email"></i></label>
                <input
                  className="inputsignup"
                  type="email"
                  placeholder="Enter Your Register E-mail.."
                  name="email"
                  maxLength="255"
                  onChange={inputData}
                  required
                />
              </div>
              <center>
                <Button
                  className="btn bg-dark text-white"
                  type="Submit"
                  onClick={submitHandle}
                >
                  Submit
                </Button>
                {/* <Link className="submit m-1 btn btn-outline-danger" to="/AdminComponent/Login/AdminLogin">
                  Back
                </Link> */}
              </center>

            </form>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword