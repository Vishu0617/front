import axios from "axios";
import React, { useEffect, useState } from "react";
// import profile from "/Transport Triangle/front/src/img/profile.png";
import { Link, useParams } from "react-router-dom";
import './ClientHeader.css'

function ClientHeader() {
  
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
      <div className="container-fluid navbar navbar-expand-lg shadow bg-bg-primary">
       
          <img className="logo" src={`http://localhost:3001/${fetchData.file}`} alt="profile" />
       
       <div align="center" className="clientHeader">
        <h1 className='ms-5 '>Client Dashboard</h1>
       </div>
          <button
            className="navbar-toggler clientTogal ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="search "></div>
            <div className="links navbar-collapse ">
           
              <ul className="navbar-nav ms-auto">
                <li className="nav-item  mt-2">
                 <Link className="clientLink" to={`/client/UserComponent/Dashbord/ClientDashbord/${id}`}>Home</Link>
                </li>
                <li className=" nav-item mt-2">
                   <Link className="clientLink" to={`/client/UserComponent/Profile/ClientProfile/${id}`}>Profile</Link>
                </li>
                <li className="nav-item  mt-2">
                 <Link className="clientLink" to={`/client/UserComponent/Mygoods/Mygoods/${id}`}>Mygoods</Link>
                </li>
                <li className="nav-item  mt-2">
                 <Link className="clientLink" to={`/client/UserComponent/Vehicale/Vehicale/${id}`}>Vehicale</Link>
                </li>
                <li className="nav-item  mt-2">
                  <Link className="clientLink" to={`/client/UserComponent/Services/Services/${id}`}>Services</Link>
                </li>
                <li className="nav-item  mt-2">
                 <Link className="clientLink" to={`/client/UserComponent/Rating/Rating/${id}`}>Rate Us</Link>
                </li>
                <li className="nav-item  mt-2 me-5 ">
                 <Link className="clientLink" to="/admin/AdminComponent/Logout/Logout"> Logout </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}

export default ClientHeader;
