import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './AdminHeader.css'

function AdminHeader() {
  const {id}=useParams();
  console.log(id)
  return (
    <>
       <div className="container-fluid navbar navbar-expand-lg shadow  bg-warning">
        <h1 className='ms-5'>Dashboard</h1>
          <button
            className="navbar-toggler ms-auto"
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
              {/* <li className="nav-item  mt-2">
                 <img className="nav-link link" src="" alt="profile" />
                </li> */}
                <li className="nav-item  mt-2">
                  <Link className="nav-link link" to={`/admin/AdminComponent/Dashbord/AdminDashbord/${id}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item mt-2 ">
                  <Link className="nav-link link" to={`/admin/AdminComponent/UserData/UserData/${id}`}>
                  User Data
                  </Link>
                </li>
                <li className="nav-item mt-2 ">
                  <Link className="nav-link link" to={`/admin/AdminComponent/UserContectDetail/UserContectDetail/${id}`}>
                  ContectData
                  </Link>
                </li>
                <li className="nav-item mt-2">
                  <Link
                    className="nav-link link"
                    to="/admin/AdminComponent/Logout/Logout"
                  >
                    Logout
                  </Link>
                </li>
                {/* <li className="nav-item mt-2">
                  <Link className="nav-link link" to="/">
                    Logout
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

    </>
  )
}

export default AdminHeader