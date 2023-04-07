import React from 'react'
import './Footer.css'
import logo from "../img/Transport-logo.png";
import { Link } from 'react-router-dom';
import { FaFacebook,FaYoutube,FaTwitter,FaInstagram,FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <>

<footer className="footer-bg ">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-6">
                <div className="footer-logo-content">
                  
                        <img src={logo} alt="footer-logo" />
                
                    <p>This is a Transport Managment Collage base project</p>
                    <ul className="nav col-md-12 list-unstyled d-flex me-2">
                        <li className="ms-1"><a href="https://www.youtube.com/@vrpatel405/featured" target='_blank' rel="noreferrer" alt="youtube" className="btn m-1 rounded-circle"><FaYoutube className="social-icon" color="red"/></a></li>
                        <li className="ms-1"><a href="https://www.facebook.com/profile.php?id=100044580701985" target='_blank' rel="noreferrer" alt="facebook" className="btn  m-1 rounded-circle" ><FaFacebook  className="social-icon" color="blue" /></a></li>
                        <li className="ms-1"><a href="https://twitter.com/vishalP1188150" target='_blank' rel="noreferrer" alt="twitter" className="btn  m-1 rounded-circle" ><FaTwitter  className="social-icon" color="#1DA1F2" /></a></li>
                        <li className="ms-1"><a href="https://github.com/Vishu0617" target='_blank' rel="noreferrer" alt="github" className="btn  m-1 rounded-circle"><FaGithub  className="social-icon" /></a></li>
                        <li className="ms-1"><a href="https://www.instagram.com/ptl_vishal_/" target='_blank' rel="noreferrer" alt="github" className="btn  m-1 rounded-circle"><FaInstagram className="instgram social-icon"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="footer-title">Company</h3>
                <ul className="f-list list-inline">
                    <li><Link  to="/Faq/Faq">FAQ</Link></li>
                    <li><Link to="/About/About" >About Us</Link></li>
                    <li><Link to="/Contact/Contact" >Contact Us</Link></li>
                    <li><Link to="/PrivacyPolicy/PrivacyPolicy">Privacy policy</Link></li>
                    <li><Link to="/Services/Services">Services</Link></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="footer-title">Official info:</h3>
                <ul className="address-list list-inline ps-0">
                    <li className="d-md-flex">
                    <i className="zmdi zmdi-pin"></i>
                    <p>This is a Transport Managment Collage base project</p>

                    </li>
                    <li className="d-md-flex">
                    <i className="zmdi zmdi-email"></i>
                        <a href="mailto:itdevloper2021@gmail.com" alt="sending email">itdevloper2021@gmail.com</a>
                    </li>
                    <li className="d-md-flex">
                    <i className="zmdi zmdi-phone"></i>
                    <p className="mb-0 fw-bold"><a href="tel:9157167899" alt="call">9157167899</a></p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <div className="footer-btm">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12 text-center">
                    <p className="sub-footer">©2023 All rights reserved. Design & Developed by <a href="mailto:itdevloper2021@gmail.com" alt="sending email">itdevloper2021@gmail.com</a> </p>
                </div>
            </div>
        </div>
    </div>
</footer>

{/* <div className="container">
    <div className='d-flex container'>

        <div className="col-lg-3 col-md-6">
            <h3 className="footer-title">Company</h3>
            <ul className="f-list list-inline">
                <li><Link  to="/Faq/Faq">FAQ</Link></li>
                <li><Link to="/About/About" >About Us</Link></li>
                <li><Link to="/Contact/Contact" >Contact Us</Link></li>
                <li><Link to="/PrivacyPolicy/PrivacyPolicy">Privacy policy</Link></li>
                <li><Link to="/Services/Services">Services</Link></li>
            </ul>
        </div>

        <div className="col-lg-3 col-md-6">
            <h3 className="footer-title">Official info:</h3>
            <ul className="address-list list-inline ps-0">
                <li className="d-md-flex">
                <i className="zmdi zmdi-pin"></i>
                <p>This is a Transport Managment Collage base project</p>

                </li>
                <li className="d-md-flex">
                <i className="zmdi zmdi-email"></i>
                    <a href="mailto:itdevloper2021@gmail.com" alt="sending email">itdevloper2021@gmail.com</a>
                </li>
                <li className="d-md-flex">
                <i className="zmdi zmdi-phone"></i>
                <p className="mb-0 fw-bold"><a href="tel:9157167899" alt="call">9157167899</a></p>
                </li>
            </ul>
        </div>
        
    
       
    </div>
    
    <footer class="d-flex flex-wrap justify-content-between align-items-center border-top">
       <div class="col-md-9 footer-btm d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img src={logo} height={50} width={50} alt='logo' />
            </a>
            <span class="text-muted">©2023 All rights reserved. Design & Developed by <a href="mailto:itdevloper2021@gmail.com" alt="sending email">itdevloper2021@gmail.com</a></span>
        </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex py-2">
        <li class="ms-1"><a href="https://www.youtube.com/@vrpatel405/featured" target='_blank' rel="noreferrer" alt="youtube" class="btn  m-1 rounded-circle"><FaYoutube className="social-icon" color="red"/></a></li>
        <li class="ms-1"><a href="https://www.facebook.com/profile.php?id=100044580701985" target='_blank' rel="noreferrer" alt="facebook" class="btn  m-1 rounded-circle" ><FaFacebook  className="social-icon" color="blue" /></a></li>
        <li class="ms-1"><a href="https://twitter.com/vishalP1188150" target='_blank' rel="noreferrer" alt="twitter" class="btn  m-1 rounded-circle" ><FaTwitter  className="social-icon" color="#1DA1F2" /></a></li>
        <li class="ms-1"><a href="https://github.com/Vishu0617" target='_blank' rel="noreferrer" alt="github" class="btn  m-1 rounded-circle"><FaGithub  className="social-icon" /></a></li>
        <li class="ms-1"><a href="https://www.instagram.com/ptl_vishal_/" target='_blank' rel="noreferrer" alt="github" class="btn  m-1 rounded-circle"><FaInstagram className="instgram social-icon"/></a></li>
    </ul>
    </footer>
</div> */}
    </>
  )
}

export default Footer