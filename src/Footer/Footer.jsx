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
                        <li className="list-inline-item"><Link to="#"><i className="zmdi zmdi-facebook-box"></i></Link></li>
                        <li className="list-inline-item"><Link to="#"><i className="zmdi zmdi-linkedin"></i></Link></li>
                        <li className="list-inline-item"><Link to="#"><i className="zmdi zmdi-twitter"></i></Link></li>
                        <li className="list-inline-item"><Link to="#"><i className="zmdi zmdi-youtube"></i></Link></li>
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
                        <Link to="mailto:transport@gmail.com">transport@gmail.com</Link>
                    </li>
                    <li className="d-md-flex">
                    <i className="zmdi zmdi-phone"></i>
                        <Link to="tel:1234567890">123 456 789</Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <div className="footer-btm">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12 text-center">
                    <p className="sub-footer">©2023 All rights reserved. Design & Developed by <Link className=" fw-bold" >itdevloper2021@gmail.com</Link></p>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer