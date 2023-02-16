import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";

function UserLogin({setClientData}) {
 
  const navigate=useNavigate();
  const [userLogin, setUserLogin] = useState()

  const userInput=(e)=>{
    setUserLogin({...userLogin,[e.target.name]:e.target.value});
    // console.log(userLogin)
  }

  const loginData=(e)=>{
    e.preventDefault();
    // console.log(userLogin)
    axios.post("http://localhost:3001/clientLogin",userLogin, {
      withCredentials: true,
    }).then((res)=>{
      console.log(res.data.data )
      setClientData(res.data.data)
      const id=res.data.data._id;
      alert(res.data.message)
      navigate(`/client/UserComponent/Dashbord/ClientDashbord/${id}`)
    }).catch((error)=>{
      alert(error.response.data.error)
      console.log(error.response.data.error)
    })
  }

  return (
    <>
      <div className=" rounded mb-4 mt-4 container">
        <form className="row g-3" onSubmit={loginData}>
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
              onChange={userInput}
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
              placeholder="Enter your register password ...."
              name="pwd"
              maxLength="10"
              onChange={userInput}
              // required
            />
          </div>
          {/* <Link className="link" to="/AdminComponent/ForgetPassword/ForgetPassword">
          Forgot Password
        </Link> */}
          <center className="submit-divr ">
            <button
              className="submit btn btn-outline-success"
              type="Submit"
              // onClick={submitHandle}
            >
              Submit
            </button>
            <div className="mt-2">
              new?
              <Link className="link" align="right" to="/UserComponent/SignUp/UserSignUp">
                Registration
              </Link>
            </div>
          </center>
        </form>
      </div>
    </>
  );
}

export default UserLogin;
