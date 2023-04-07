import React from 'react'
import './Footer.css'
import logo from "../img/Transport-logo.png";
import { Link } from 'react-router-dom';


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
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100044580701985" target='_blank' rel="noreferrer" alt="facebook"><i className="zmdi zmdi-facebook-box"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/vishal-patel-0b744a271/" target='_blank' rel="noreferrer" alt="linkedin"><i className="zmdi zmdi-linkedin" ></i></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/vishalP1188150" target='_blank' rel="noreferrer" alt="twitter" ><i className="zmdi zmdi-twitter" target='_blank' alt="facebook"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.youtube.com/@vrpatel405/featured"  target='_blank' rel="noreferrer" alt="youtube"><i className="zmdi zmdi-youtube"></i></a></li>
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
                        <a href="mailto:itdevloper2021@gmail.com" alt="email">itdevloper2021@gmail.com</a>
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
                {/* <a href="sms:" target="_blank" rel="noreferrer">Share on SMS</a> */}
                    <p className="sub-footer">©2023 All rights reserved. Design & Developed by <a href="mailto:itdevloper2021@gmail.com" alt="sending email">itdevloper2021@gmail.com</a> </p>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer