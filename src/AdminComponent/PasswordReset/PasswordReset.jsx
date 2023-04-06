import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
     console.log(res.data.data);
     alert("password update");
    }).catch((err)=>{
       
       console.log(err)
    })
  };

  return (
    <>
      <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h1 align="center">New Password</h1>
        <hr />
        <form className="row g-3 mt-2 div-mid">
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
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
            <button
              className="submit ms-1 btn btn-outline-success"
              type="Submit"
              onClick={submitNewPwd}
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  );
}

export default PasswordReset;
