import axios from 'axios'
import React, { useState } from 'react'
import './UserForget.css'
import {  toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function UserForgetPassword() {

    const navigate=useNavigate()
    const [userEmail, setUserEmail] = useState({})

    const inputData=(e)=>{
        setUserEmail({...userEmail,[e.target.name]:e.target.value})
    }

    const handelEmail=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/userSendLink",userEmail)
             .then((res)=>{
                console.log(res.data)
                toast.info(res.data.message, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
                  navigate("/UserComponent/UserLogin/UserLogin")
                // alert(res.data.message);
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
     <div className=" rounded forget-body shadow container">
     <h5 align="center">Enter E-mail</h5><hr/>
        <form className="row g-3 mt-2" onSubmit={handelEmail}>
        <center>   <div className="col-md-6 form-control forget-main rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-email text-dark zmdi-hc-2x"></i>
            </label>
            <input
              className="forget-input"
              type="email"
              placeholder="Enter Your Register E-mail.."
              name="email"
              maxLength="255"
              onChange={inputData}
              // required
            />
          </div>  
            <Button className="mt-5 bg-dark text-white forg-btn btn " type="Submit">Submit</Button>
          </center>
        </form>
     </div>
    </div>
    </>
  )
}

export default UserForgetPassword