import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
      alert(res.data.message);
      navigate(`/`);
     }).catch((error)=>{
      alert(error.response.data.error)
      console.log(error.response.data)
     })
  }

  return (
    <>
<div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
     <h1 align="center">Enter Your E-mail</h1><hr/>
        <form className="row g-3 mt-2 div-mid">
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
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
            <button
              className="submit ms-1 btn btn-outline-success"
              type="Submit"
              onClick={submitHandle}
            >
              Submit
            </button>
            {/* <Link className="submit m-1 btn btn-outline-danger" to="/AdminComponent/Login/AdminLogin">
              Back
            </Link> */}
          </center>

        </form>
      </div>
    </>
  )
}

export default ForgetPassword