import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer'
import './UserData.css'

function UserDataEdit() {
    
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
            navigate(`/admin/AdminComponent/UserData/UserData/${id}`)
        })
    }

  return (
    <>
      <div className='editbody'>       
         <div className="shadow rounded edit-main border-dark mb-4 p-5 mt-4 container">
            <h1 align="center">Update My Data</h1>
            <hr />
            <form className="row g-3 " onSubmit={updateData}>
              <div className="col-md-6 form-control user-data-edit shadow  rounded d-flex">
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
              <div className="col-md-6 form-control user-data-edit shadow rounded  d-flex">
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
              <div className="col-md-6 form-control user-data-edit shadow rounded  d-flex">
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
              <center className="submit-divr ">
                <button className="btn btn-outline-success" type="Submit">
                  Submit
                </button>
              </center>
            </form>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default UserDataEdit