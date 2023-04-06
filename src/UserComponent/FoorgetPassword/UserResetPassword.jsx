import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';


function UserResetPassword() {

  const {id}=useParams();
  console.log(id)
  const [clientPwd, setClientPwd] = useState({})

  useEffect(()=>{
   axios.get(`http://localhost:3001/userFind/${id}`).then((res)=>{
    // console.log(res.data.clientValid)
    console.log("user valid...")
   }).catch((err)=>{
    console.log(err+"user note valid")
   })
  },[id])

  const inputClientPwd=(e)=>{
    setClientPwd({...clientPwd,[e.target.name]:e.target.value})
    console.log(clientPwd)
  }

  const clinetSubmitPwd=(e)=>{
    e.preventDefault();
   axios.put(`http://localhost:3001/clientPwdUpdate/${id}`,clientPwd).then((res)=>{
    console.log(res.data.data);
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
    // alert("password update..");
   }).catch((err)=>{
    console.log(err.response.data.error)
    toast.error(err.response.data.error, {
      position: "top-center",
      autoClose: 5000,
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
    <div className="client-dashbord">
      <div className="shadow rounded forget-body mb-4 p-5 mt-4 container">
        <h1 align="center">New Password</h1>
        <hr />
        <form className="row g-3 mt-2 " onSubmit={clinetSubmitPwd}>
          <center> <div className="col-md-6 form-control forget-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-lock text-dark"></i>
            </label>
            <input
              className="inputsignup"
              type="Password"
              placeholder="********"
              name="pwd"
              maxLength="10"
              onChange={inputClientPwd}
              // required
            />
          </div>
          
            <button
              className="forg-btn btn"
              type="Submit"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
    </>
  )
}

export default UserResetPassword