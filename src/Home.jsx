import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "./img/Transport-logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsTruck } from "react-icons/bs";
import { FaShip, FaFly } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import video from './img/icon/Transport.mp4'
import pricing from '/Transport Triangle/front/src/img/pricing.png'
import deadline from '/Transport Triangle/front/src/img/deadline.png'
import folder from '/Transport Triangle/front/src/img/folder.png'
import ab1 from '/Transport Triangle/front/src/img/ab1.jpg'
import ab2 from '/Transport Triangle/front/src/img/ab2.jpg'
import ab_sh1 from '/Transport Triangle/front/src/img/ab-sh1.png'
import service1 from "C:/Transport Triangle/front/src/img/service1.jpg";
import service2 from "C:/Transport Triangle/front/src/img/service2.jpg";
import service3 from "C:/Transport Triangle/front/src/img/service3.jpg";
import service4 from "C:/Transport Triangle/front/src/img/service4.jpg";
import s1 from "C:/Transport Triangle/front/src/img/s1.jpg";
import s2 from "C:/Transport Triangle/front/src/img/s2.jpg";
import s4 from "C:/Transport Triangle/front/src/img/s4.jpg";
import s6 from "C:/Transport Triangle/front/src/img/s6.jpg";
import user1 from 'C:/Transport Triangle/front/src/img/user1.png'
import user2 from 'C:/Transport Triangle/front/src/img/user2.png'
import user3 from 'C:/Transport Triangle/front/src/img/user3.png'
import Footer from './Footer/Footer'


function Home({setAdminData,setClientData}) {
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/fetchFeedback`).then((res)=>{
      setFeedback(res.data.data)
    })
  }, [])
  

  return (
    <>

<header>
  <div className="p-5 text-center">
    <video autoPlay muted loop src={video} className="login-video"></video>
    <div className="maskbody">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <div className="d-flex heding-main  justify-content-center ">
            <img  className="bg-light heding1 rounded-3" height={50} width={50} src={logo} alt="logo" />
              <h1 className="mb-3">Transport Triangle</h1>
            <img  className="bg-light heding2 rounded-3" height={50} width={50} src={logo} alt="logo" />
          </div>
          <h4 className="mb-3">This is help to transport youre goods very fast and best services</h4>
          <Link className="homLnk btn btn-outline-light" to="/AdminComponent/Login/AdminLogin"> Admin </Link>
          <Link className="homLnk btn btn-outline-light" to="/UserComponent/UserLogin/UserLogin"> User </Link>
          
            <div className="ps-3 call-text text-center mt-3">
                <label>if you have any query or contact then call this number.</label><br/>
                <i className="zmdi zmdi-phone"></i> <label>Call Us </label>
                <p className="mb-0 fw-bold"><a href="tel:9157167899" alt="call">9157167899</a></p>
            </div>
        </div>
        <div>
      </div>
      </div>
    </div>
  </div>
</header>

<section className="timetracking-block bg-white ">
    <div className="container">
        <div className="col-12">
            <div className="row">
                <div className="col-lg-4 car col-md-6 mb-4">
                    <div className="feature-innerbox card">
                      <div className="f-icon">
                        <img src={pricing} alt="icon" />
                      </div>
                        <div className="inner-text">
                            <h3>Transparent Pricing</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="feature-innerbox card">
                      <div className="f-icon">
                        <img src={deadline} alt="icon" />
                      </div>
                        <div className="inner-text">
                            <h3>Transparent Pricing</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="feature-innerbox card">
                      <div className="f-icon">
                        <img src={folder} alt="icon" />
                      </div>
                        <div className="inner-text">
                            <h3>Transparent Pricing</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="our-company bg-white">
    <div className="container">
        <div className="col-12">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="company-content">
                        <span>About Our Company</span>
                        <h2>Digital & Trusted Transport Logistic Company</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <div className="about-feature-area">
                        <div className="d-flex align-items-center mb-4">
                            <div className="f-icon">
                            <i class="zmdi zmdi-globe-alt"></i>
                            </div>
                            <div className="about-ft-text">
                                <h3>Fast Worldwide Delivery</h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <div className="f-icon">
                            <i class="zmdi zmdi-shield-security"></i>
                                <i className="fa-solid fa-check check-icon"></i>
                            </div>
                            <div className="about-ft-text">
                                <h3>Safe And Secure Delivery</h3>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="">
                            <Link className="btn btn-primary exp-btn" alt="about" to="/About/About">Explore More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="about-img-wrap position-relative">
                        <div className="about-img-area">
                        <img src={ab1} alt="img" />
                        </div>
                        <div className="about-img-shape">
                            <img className="shap-img" src={ab_sh1} alt="img" />
                        </div>
                        <div className="about-img-area2">
                            <img src={ab2} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="service-section bg-white">
  <div className="container ">
    <div className="row">
      <div className="col-12">
        <div className="cor-title">
          <span>What we do</span>
          <h3>We Provide all Kinds of Logistics Service</h3>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img ">
            <img className="rounded serv-img card" src={service1} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <i class="zmdi zmdi-airplane serv-icon "></i>
              </div>
            </center>
            <h3>Air Freight</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img">
            <img className="rounded serv-img card" src={service2} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <center>
                  <FaShip />
                </center>
              </div>
            </center>
            <h3>Ocen Freight</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img">
            <img className="rounded serv-img card" src={service3} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <center>
                  <BsTruck />
                </center>
              </div>
            </center>
            <h3>Cargo Container</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img">
            <img className="rounded serv-img card" src={service4} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <center>
                  <TbTruckDelivery />
                </center>
              </div>
            </center>
            <h3>Road Transport</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img">
            <img className="rounded serv-img card" src={s1} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <center>
                  <FaShip />
                </center>
              </div>
            </center>
            <h3>Ocean Cargo</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img">
            <img className="rounded serv-img card" src={s2} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <center>
                  <FaFly />
                </center>
              </div>
            </center>
            <h3>Fly Anywhere</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing.</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img">
            <img className="rounded serv-img card" src={s6} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <center>
                  <TbTruckDelivery />
                </center>
              </div>
            </center>
            <h3>Cargo Shipping</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-12 mb-4">
        <div className="service-innerbox card">
          <div className="service-img">
            <img className="rounded serv-img card" src={s4} alt="img" />
          </div>
          <div className="service-content position-relative">
            <center>
              <div className="cor-service-icon shadow-lg card rounded">
                <center>
                  <i class="zmdi zmdi-wrench"></i>
                </center>
              </div>
            </center>
            <h3>Maintenance</h3>
            <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
            <div className="service-btn">
              <Link className="Link" to="/About/About">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="container bg-white">
    <div className="row">
        <div className="col-md-12 text-center ">
            <div className="company-content ourteam-title">
                <span>Team Members</span>
                <h2>Our Professional Team </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
            <div className="our-team-box card">
                <div className="team-img">
                     <img src={user1} alt="img"/>
                </div>
                <div className="team-content">
                    <h5>MISHEL MARSH</h5>
                    <p>Co-Founder</p>
                    <div className="hover-icon">
                    <i class="zmdi zmdi-plus"></i>
                        <ul className="social-area list-inline">
                            <li><Link to="#"><i class="zmdi zmdi-facebook"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-twitter"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-whatsapp"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
            <div className="our-team-box card">
                <div className="team-img">
                     <img src={user2} alt="img"/>
                </div>
                <div className="team-content">
                    <h5>ANJELINA ROSEE</h5>
                    <p>Founder</p>
                    <div className="hover-icon">
                    <i class="zmdi zmdi-plus"></i>
                        <ul className="social-area list-inline">
                        <li><Link href="#"><i class="zmdi zmdi-facebook"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-twitter"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-whatsapp"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
            <div className="our-team-box card">
                <div className="team-img">
                     <img src={user3} alt="img"/>
                </div>
                <div className="team-content">
                    <h5>MICHEL RICHARD</h5>
                    <p>Director & CEO</p>
                    <div className="hover-icon">
                    <i class="zmdi zmdi-plus"></i>
                        <ul className="social-area list-inline">
                        <li><Link href="#"><i class="zmdi zmdi-facebook"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-twitter"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-whatsapp"></i></Link></li>
                            <li><Link href="#"><i class="zmdi zmdi-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section className="review-block bg-white mt-4 mb-4">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="company-content review-title">
                    <span>Testimonials</span>
                    <h2>Our Client's Feedback </h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                </div>
            </div>
       {feedback.map((e)=>{
        return(<>
           <div className="col-lg-4 col-md-6 col-12 ">
                <div className="review-box card">
                    <div className="qute-i card"><span ><i class="zmdi zmdi-quote"></i></span></div>
                    <p className="r-text">{e.fbmessage}</p>
                    <div className="client-wrap d-flex align-items-center">
                        <div className="client-img">
                            <img className="fbprofile" src={`http://localhost:3001/${e.client.file}`} alt="img" />
                        </div>
                        <div className="r-detail">
                            <h5>{e.client.name}</h5>
                            {/* <p className="mb-0">Co-Founder</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>)
       })}
        </div>
    </div>
</section>   

<Footer />
    </>
  );
}

export default Home;
