import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, NavLink,useNavigate,useParams } from 'react-router-dom'
import './AdminHeader.css'
import AdminProfile from '../Profile/AdminProfile';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import {  toast } from 'react-toastify';

// import logout from "../../img/icon/logout.png"

function AdminHeader() {
  const {id}=useParams();
  console.log(id)
  const [fetchData, setFetchData] = useState([]);
  const navigate = useNavigate()


   useEffect(() => {
    axios.get(`http://localhost:3001/fetchAdmin/${id}`).then((res) => {
      setFetchData(res.data.data);
    });
   }, [id])

   //logout function's
   const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   //logout function's end 

  //  change profile 
  const [isSetOpen, setIsSetOpen] = useState(false)

  const handleClickOpen1=()=>{
    setIsSetOpen(true)
  }

  const handleClose1=()=>{
    setIsSetOpen(false)
  }

  //  change profile end

  const logout=()=>{
    axios.get("http://localhost:3001/logout").then((res) => {
      console.log(res.data.message);
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("/",{replace:true});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  //logout function's end

   const linkClasses = (isActiveLink) => {
    let classes = "adminLink ";

    if (isActiveLink) {
      classes +=" adminLink  bg-dark text-light  active ";
    }
    return classes;
  };

   
  return (
    <>
<div className="navbar fixed-top navbar-expand-lg ahomeHeader shadow ">
  <div className="container-fluid">
    <div className="dropdown d-profile">
        <Link title='Change Profile Photo'  onClick={handleClickOpen1} >
         <img className="logo border-dark" src={`http://localhost:3001/${fetchData.file}`} alt="profile" />
        </Link>
        {/* change profile photo */}
        <Dialog className="dialog" open={isSetOpen} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogContent className="bg-light" id="alert-dialog-description">
            <AdminProfile />
            </DialogContent>
            <DialogActions className="bg-light">
              <Button className="btn payCancel shadow text-white bg-dark" onClick={handleClose1}>Cancel</Button>
            </DialogActions>
          </Dialog>
      {/* <br/><b>{fetchData.name}</b> */}
      </div>
      <h1 className='admin-dash'>Dashboard</h1>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse links-div navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-2 ms-auto mb-lg-0">
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/admin/AdminComponent/Dashbord/AdminDashbord/${id}`} ><i className="zmdi zmdi-home zmdi-hc-1x" ></i> Home </NavLink>
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/admin/AdminComponent/UserData/UserData/${id}`}><i className="zmdi zmdi-accounts-alt zmdi-hc-1x"></i> Data</NavLink>
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/admin/AdminComponent/Goods/GoodsDetail/${id}`}><i className="zmdi zmdi-airplane zmdi-hc-1x"></i> Detail</NavLink>
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/admin/AdminComponent/Vehicale/AdminViewDetail/${id}`} ><i className="zmdi zmdi-truck zmdi-hc-1x"></i> View </NavLink> 
        </li>
        <li className="nav-item mt-2">
        <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/admin/AdminComponent/Feedback/UserFeedback/${id}`} ><i className="zmdi zmdi-comments zmdi-hc-1x"></i> Feedbacks</NavLink> 
      </li>
      <li className="nav-item mt-2">
      <NavLink className={({ isActive }) => linkClasses(isActive)} to={`/admin/AdminComponent/UserContectDetail/UserContectDetail/${id}`} ><i className="zmdi zmdi-phone-in-talk zmdi-hc-1x"></i> Detail </NavLink>
      </li>
        <li className="nav-item mt-2">
        <NavLink className="text-dark" to={`#`} onClick={handleClickOpen} >Logout</NavLink> 
        </li>
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
      </ul>
      <div>
        <div className="ps-3 call-text">
        <div to="tel:0282 1234 1452" className="call-block align-items-center">
                <p className="mb-0 ">Call :-<a href="tel:`{fetchData.phone}`" alt="call">{fetchData.phone}</a></p>
                {/* <a href="tel:`{fetchData.phone}`" alt="call">{fetchData.phone}</a> */}
                <p className="mb-0">E-mail :-<a href="mailto:`{fetchData.email}`" alt="email">{fetchData.email}</a></p>
                {/* <a href="mailto:`{fetchData.email}`" alt="sending email">{fetchData.email}</a> */}
        
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default AdminHeader