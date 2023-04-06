import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
  const [fetchData, setFetchData] = useState([]);
  const navigate=useNavigate();
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    axios.get(`http://localhost:3001/fetchAdmin/${id}`).then((res) => {
      setFetchData(res.data.data);
    });
  }, [id]);

  const editAdmin=(e)=>{
    setFetchData({...fetchData,[e.target.name]:e.target.value})
  }

  const updateAdmin=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3001/adminUpdate/${id}`,fetchData).then((res)=>{
      console.log(res.data.data)
      navigate(`/admin/AdminComponent/Dashbord/AdminDashbord/${id}`)
    })
  }

  return (
    <>
      <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h1 align="center">Edit Admin</h1>
        <hr />
        <form className="row g-3 div-mid" onSubmit={updateAdmin}>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-account"></i>
            </label>
            <input
              className=" inputsignup "
              type="text"
              placeholder="User Full Name"
              name="name"
              maxLength="255"
              onChange={editAdmin}
              value={fetchData.name}
             
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-email"></i>
            </label>
            <input
              className="inputsignup"
              type="email"
              placeholder="Email id"
              name="email"
              maxLength="255"
              onChange={editAdmin}
              value={fetchData.email}

             
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-phone"></i>
            </label>
            <input
              className="inputsignup"
              type="text"
              placeholder="Conntect Detail"
              name="phone"
              maxLength="10"
              onChange={editAdmin}
              value={fetchData.phone}

             
            />
          </div>         
          <center className="submit-divr ">
            <button
              className="submit btn btn-outline-success"
              type="Submit"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  );
}

export default EditProfile;
