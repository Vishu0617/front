import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";
import Button from '@mui/material/Button';
import {  toast } from 'react-toastify';
import { FaFacebook,FaYoutube,FaTwitter,FaInstagram,FaGithub } from 'react-icons/fa';



function UserLogin({setClientData}) {
 
  const navigate=useNavigate();
  const [userLogin, setUserLogin] = useState()
  const [showPwd, setShowPwd] = useState('Password')


  const userInput=(e)=>{
    setUserLogin({...userLogin,[e.target.name]:e.target.value});
    // console.log(userLogin)
  }

  const loginData=(e)=>{
    e.preventDefault();
    // console.log(userLogin)
    axios.post("http://localhost:3001/clientLogin",userLogin, {
      withCredentials: true,
    }).then((res)=>{
      console.log(res.data.data )
      setClientData(res.data.data)
      const id=res.data.data._id;

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
      // alert(res.data.message)
      navigate(`/client/UserComponent/Dashbord/ClientDashbord/${id}`)
    }).catch((error)=>{
      toast.error(error.response.data.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(error.response.data.error)
    })
  }

  return (
    <>
 
    <div class="bg-image-login">
      <div class="mask1 d-flex align-items-center h-100" >
        <div class="container">
          <div class="row form-body justify-content-center">
            <div class=" bg-white new-login-form rounded-1 col-xl-5 col-md-8">
              <form class=" " onSubmit={loginData} >
                 <h5>User Login</h5><hr/>
                {/* <!-- Email input --> */}
                <i className="zmdi zmdi-email"></i> <label class="form-label" for="form1Example1">Email address</label>
                <div class="form-control d-flex mb-4">
                  <input type="email"  placeholder='Enter Email' name="email" maxLength={255} onChange={userInput} class="inputlogin" required />
                </div>

                {/* <!-- Password input --> */}
                <i className="zmdi zmdi-lock"></i> <label class="form-label" for="form1Example2">Password</label>
                <div class="form-control d-flex mb-4">
                  <input type={showPwd}  placeholder='Enter Password' name="pwd" maxLength={10} onChange={userInput} class="inputlogin" required />
                  {showPwd==="Password"?(
                  <span className="icon-div" onClick={()=>setShowPwd("text")}><i className="zmdi zmdi-eye-off icon"></i></span>
                  ):(
                    <span  className="icon-div" onClick={()=>setShowPwd("Password")}> <i className="zmdi zmdi-eye icon" ></i></span>
                  )} 
                </div>         
                <div class="col text-end">
                    <Link className="user-login-link" to='../../UserComponent/FoorgetPassword/UserForgetPassword'>Forgot password?</Link>
                  </div>
                {/* <!-- Submit button --> */}
                <Button type="submit" class="btn bg-dark text-white ">Sign in</Button>
                <div class="row linkDiv">
                  <div class="col d-flex justify-content-center">
                     Don't have account ? <Link className="user-login-link " align="right" to="/UserComponent/SignUp/UserSignUp">Click hear</Link>
                  </div>
                </div>
              </form>
              <hr/>
              <div class="text-center align-items-center">
                <p>Follow Transport Triangle on social media</p>
                <a href="05https://www.youtube.com/@vrpatel4" target='_blank' rel="noreferrer" alt="youtube" class="btn  m-1 rounded-circle">
                <FaYoutube className="social-icon" color="red"  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100044580701985" target='_blank' rel="noreferrer" alt="facebook" class="btn  m-1 rounded-circle" >
                <FaFacebook  className="social-icon" color="blue" />
                </a>
                <a href="https://twitter.com/vishalP1188150" target='_blank' rel="noreferrer" alt="twitter" class="btn  m-1 rounded-circle" >
                <FaTwitter  className="social-icon" color="#1DA1F2" />
                </a>
                <a href="https://github.com/Vishu0617" target='_blank' rel="noreferrer" alt="github" class="btn  m-1 rounded-circle">
                <FaGithub  className="social-icon" />
                </a>
                <a href="https://www.instagram.com/ptl_vishal_/" target='_blank' rel="noreferrer" alt="github" class="btn  m-1 rounded-circle">
                <FaInstagram className="instgram social-icon"  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <footer class="">
    <hr class="m-0" />

    <div class="text-center py-4 align-items-center">
      <p>Follow Transport Triangle on social media</p>
      <Link to="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" class="btn btn-outline-primary m-1" >
        <i class="zmdi zmdi-youtube-play"></i>
      </Link>
      <Link to="https://www.facebook.com/mdbootstrap" class="btn btn-outline-primary m-1" >
        <i class="zmdi zmdi-facebook"></i>
      </Link>
      <Link to="https://twitter.com/MDBootstrap" class="btn btn-outline-primary m-1" >
        <i class="zmdi zmdi-twitter"></i>
      </Link>
      <Link to="https://github.com/mdbootstrap/mdb-ui-kit" class="btn btn-outline-primary m-1">
        <i class="zmdi zmdi-github"></i>
      </Link>
    </div>
    </footer> */}
    </>
    
  );
}

export default UserLogin;
