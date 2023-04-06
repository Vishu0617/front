import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ClientProfile from "../Profile/ClientProfile";
import EditProfile from "../EditProfile/EditProfile";
// import Logout from '/Transport Triangle/front/src/AdminComponent/Logout/Logout'
import "./ClientHeader.css";
import MyFeedback from "../MyFeedback/MyFeedback";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';



function ClientHeader() {
  const [fetchData, setFetchData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`http://localhost:3001/fetchData/${id}`).then((res) => {
      //    console.log(res.data.data);
      setFetchData(res.data.data);
    });
  });
  
  //logout function's
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout=()=>{
    axios.get("http://localhost:3001/logout").then((res) => {
      console.log(res.data.message);
      navigate("/",{replace:true});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  //logout function's end

  const linkClasses = (isActiveLink) => {
    let classes = "clientLink ";

    if (isActiveLink) {
      classes +="clientLink bg-dark text-light active";
    }
    return classes;
  };

  return (
    <>
<div className="navbar navbar-expand-lg homeHeader shadow ">
  <div className="container-fluid ">
      <div className="dropdown d-profile ">
          <img className="logo dropdown-toggle" data-bs-toggle="dropdown" src={`http://localhost:3001/${fetchData.file}`} alt="profile" />
          <ul className="dropdown-menu ms-2 ps-2 homeHeader">
            <li><NavLink data-bs-toggle="modal" data-bs-target="#exampleModal"> Profile <i class="zmdi zmdi-account align-items-end"></i> </NavLink></li>
            <li><hr/></li>
            <li><NavLink className={({ isActive }) => linkClasses(isActive)} data-bs-toggle="modal" data-bs-target="#exampleModal1" to={`/client/UserComponent/EditProfile/EditProfile/${id}`}> Edit <i class="zmdi zmdi-edit align-items-end "></i></NavLink></li>
            <li><hr/></li>
            <li><NavLink className={({ isActive }) => linkClasses(isActive)} data-bs-toggle="modal" data-bs-target="#exampleModal2" to={`/client/UserComponent/MyFeedback/MyFeedback/${id}`}> Feedback <i class="zmdi zmdi-comments align-items-end"></i>  </NavLink></li>
            <li><hr/></li>
            <li><NavLink  to={`#`} onClick={handleClickOpen}>Logout</NavLink></li>
          </ul>
          <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogContent className="bg-light" id="alert-dialog-description">
                <h4>Are you sure Logout</h4>
            </DialogContent>
            <DialogActions className="bg-light">
              <Button className="btn payCancel shadow text-white bg-dark" onClick={handleClose}>Cancel</Button>
              <Button className="btn paybutton shadow text-white bg-dark" onClick={logout}>
                Logout
              </Button>
            </DialogActions>
          </Dialog>
      </div>
      {/* view profile */}
      <div className="modal fade userprofile1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content userprofile shadow">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <ClientProfile />
              </div>
          </div>
        </div>
      </div>
      {/* view and profile */}
       
      {/* edit profile */}
      <div className="modal fade userprofile1" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content  userprofile shadow">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <EditProfile  />
            </div>
        </div>
      </div>
      </div>
       {/* edit edit  profile */}

       {/* my feedback */}
       <div className="modal fade modal-dialog-scrollable userprofile1" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content  userprofile shadow">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Reviews</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <MyFeedback />
            </div>
        </div>
      </div>
      </div>
       {/* my feedback end */}

    <h1 className='ms-5 client-dash'>Dashboard</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse links-div navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-2 ms-auto mb-lg-0">
        <li className="nav-item mt-2 ">
          <NavLink  className={({ isActive }) => linkClasses(isActive)}   to={`/client/UserComponent/Dashbord/ClientDashbord/${id}`} > <i class="zmdi zmdi-home"></i> Home </NavLink>
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/client/UserComponent/Mygoods/Mygoods/${id}`} >  <i class="zmdi zmdi-airplane"></i> Trips </NavLink>
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/client/UserComponent/Mygoods/AddMyGoods/${id}`} > <i class="zmdi zmdi-airplane"></i> Add Trips </NavLink>
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/client/UserComponent/Vehicale/Vehicale/${id}`} > <i class="zmdi zmdi-truck"></i>  Add Vehicale </NavLink>
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)}  to={`/client/UserComponent/Vehicale/VehicaleDetail/${id}`} > <i class="zmdi zmdi-truck"></i> Vehicale </NavLink> 
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)}  to={`/client/UserComponent/Feedback/Feedback/${id}`} >  <i class="zmdi zmdi-comment-alt-text"></i> Feedback </NavLink> 
        </li>

      </ul>
      <div>
        <div  className="d-flex call-block align-items-center">
        <i className="zmdi zmdi-phone"></i>
            <div className="ps-3 call-text-u text-dark">
                <label>Call Us</label>
                <p className="mb-0"><a href="tel:+9157167899" alt="call">9157167899</a></p>
            </div>
        </div>
      </div>
    </div>
   </div>
</div>
    </>
    
  );
}

export default ClientHeader;

