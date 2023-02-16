import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditProfile() {

    const [fetchData, setFetchData] = useState([])
    const {id}=useParams();
    const navigate=useNavigate();
    // console.log(id)

    useEffect(()=>{
        axios.get(`http://localhost:3001/fetchData/${id}`).then((res)=>{
        //    console.log(res.data.data);
           setFetchData(res.data.data)
        })
    },[id])

    const editData=(e)=>{
        setFetchData({...fetchData,[e.target.name]:e.target.value})
    }
    
    const updateData=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3001/update/${id}`,fetchData).then((res)=>{
            console.log(res.data)
            alert(res.data.message)
            navigate(`/client/UserComponent/Profile/ClientProfile/${id}`)
        })
    }

  return (
    <>
     <div className="shadow rounded signup-main bg-warning mb-4 p-5 mt-4 container">
        <h1 align="center">Update Data</h1>
        <hr />
        <form className="row g-3 div-mid" onSubmit={updateData}>
          <div className="col-md-6 form-control input-main shadow  rounded d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-account"></i>
            </label>
            <input
              className=" inputsignup "
              type="text"
              placeholder="User Name"
              name="name"
              maxLength="255"
              value={fetchData.name}
              onChange={editData}
             
            />
          </div>
          <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-email"></i>
            </label>
            <input
              className="inputsignup"
              type="email"
              placeholder="Email Id"
              name="email"
              maxLength="255"
              value={fetchData.email}
              onChange={editData}
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
              value={fetchData.phone}
              onChange={editData}
            />
          </div>
          {/* <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              className="inputsignup"
              type="Password"
              placeholder="Password"
              name="pwd"
              maxLength="10"
              value={fetchData.pwd}
            />
          </div> */}
                   
          <center className="submit-divr ">
            <button className="submit btn btn-outline-success" type="Submit">
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  )
}

export default EditProfile