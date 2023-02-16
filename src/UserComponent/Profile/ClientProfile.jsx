import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './ClientProfile.css'

function ClientProfile() {
   
    const [fetchData, setFetchData] = useState([])
    const {id}=useParams();
    // console.log(id)

    useEffect(()=>{
        axios.get(`http://localhost:3001/fetchData/${id}`).then((res)=>{
        //    console.log(res.data.data);
           setFetchData(res.data.data)
        })
    })

  return (
    <>
     <div className="shadow rounded bg-info signup-main mb-4 p-5 mt-4 container">
        <div className="row g-3 div-mid">
          <center><img className="profile" src={`http://localhost:3001/${fetchData.file}`} alt="profile" /><br/>
           {/* <Link className='edit-link' to={`/client/UserComponent/EditProfile/ClientFileEdit/${id}`}>Edit Profile</Link> */}
          </center>
          <div className="col-md-6 bg-bg-warning  input-main shadow  rounded d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-account"></i>
            </label>
            <span className='mt-2 ms-3'>{fetchData.name}</span>
          </div>
          <div className="col-md-6 bg-bg-warning  input-main shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-email"></i>
            </label>
            <span className='mt-2 ms-3'>{fetchData.email}</span>
          </div>
          <div className="col-md-6 bg-bg-warning  input-main mb-5 shadow rounded  d-flex">
            <label className="form-label mt-2">
              <i className="zmdi zmdi-phone"></i>
            </label>
            <span className='mt-2 ms-3'>{fetchData.phone}</span>
          </div>
          </div>
          <center><Link className='edit-data' to={`/client/UserComponent/EditProfile/EditProfile/${fetchData._id}`}>Edit Data</Link></center>
      </div>
    </>
  )
}

export default ClientProfile