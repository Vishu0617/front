import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ClientPayment.css'
import Button from '@mui/material/Button';
import {  toast } from 'react-toastify';



function OtpVerification() {
  
    const [cheackOtp, setCheackOtp] = useState()
    const {id}=useParams()
    const navigate=useNavigate()

    const inputOtp=(e)=>{
        setCheackOtp({...cheackOtp,[e.target.name]:e.target.value})
        // console.log(cheackOtp)
    }

    const otpSubmit=(e)=>{
        e.preventDefault();
        console.log(cheackOtp)
        console.log(id)
        axios.post(`http://localhost:3001/clientOtpVerification/${id}`,cheackOtp).then((res)=>{
          console.log(res.data.message)
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
          // alert(res.data.message)
          navigate(`/client/UserComponent/Mygoods/Mygoods/${id}`)
        }).catch((error)=>{
            // alert(error.response.data.error)
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
            console.log(error.response.data.error)
        })
    }

  return (
    <>
     <div className="client-dashbord">
        <div className="shadow rounded otimaindiv mb-4 p-5 mt-4 container">
          <h5 align="center">Payment OTP Verification</h5><hr/>
          <form className="row g-3 mt-2 div-mid" onSubmit={otpSubmit}>
            <div className="col-md-6 form-control otpmain  rounded  d-flex">
              <input
                className="inputsignup"
                type="text"
                placeholder="Enter OTP "
                name="otp"
                maxLength="6"
                onChange={inputOtp}
                required
              />
            </div>
            <center>
              <Button
                className=" btn bg-dark text-white"
                type="Submit"
              >
                Submit
              </Button>
            </center>

          </form>
        </div>
      </div>
    </>
  )
}

export default OtpVerification
