import React from 'react'
import { Link } from 'react-router-dom'
import '../About/About.css'
// import shape from '../img/shape.png'
import about1 from '../img/about1.png'
import about2 from '../img/about2.png'
import about3 from '../img/about3.png'
import shape3 from '../img/shape-3.png'
import skill1 from '../img/skill1.png'
import skill2 from '../img/skill2.png'
import help from '../img/help-img.png'
import user1 from '../img/user1.png'
import user2 from '../img/user2.png'
import user3 from '../img/user3.png'
    // import Re1 from '../img/Re1.png'
    // import Re2 from '../img/Re2.png'
    // import Re3 from '../img/Re3.png'

function About() {

  return (
    <>
<section className="main-top shadow bg-primary bread-crumb">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="bread-content">
                    <h1>About Us</h1>
                    <ul className="list-inline bread-list mb-0">
                        <li className="list-inline-item"><Link className='link' to="/">Home</Link></li>
                        <li className="list-inline-item">About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about-us shadow mt-4 ">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12">
                <div className="about-thumb-wrap">
                    {/* <img className="img-1" src={shape} alt="img" /> */}
                    <img className="img-2" src={about1} alt="img"/>
                    <img className="img-3" src={about2} alt="img" />
                    <div className="exprience-wrap">
                        <img src={shape3} alt="img" />
                        <div className="about-details">
                            <h2>22</h2>
                            <p>YEARS EXPERIENCE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="company-content about-content">
                    <span>About Us</span>
                    <h2>Welcome World Wide Best Transport Company</h2>
                    <p className="content-border-left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <ul className="abt-inner-wrap list-inline mb-0">
                                <li><i className="fa-solid fa-circle-check"></i>Unlimited Revisions</li>
                                <li><i className="fa-solid fa-circle-check"></i>Best Fitness Excercise</li>
                                <li><i className="fa-solid fa-circle-check"></i>Combine Fitness and</li>
                                <li><i className="fa-solid fa-circle-check"></i>Best Solutions</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-12 align-self-center">
                            <div className="about-img">
                                <img src={about3} alt="img" />
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-more-services">About More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="fect-area shadow mt-4 " >
    <div className="container">
        <div className="fact-area-bg">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fact-wrap">
                        <h2>2000+</h2>
                        <h5>PROJECT COMPLETE</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fact-wrap">
                        <h2>100+</h2>
                        <h5>BEST EMPLOYEES</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fact-wrap">
                        <h2>450+</h2>
                        <h5>WORLDWIDE CLIENTS</h5>
                        <p>Lorem Ipsum is sply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fact-wrap after-none">
                        <h2>80+</h2>
                        <h5>WORLD AWARDS</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="over-skill shadow mt-4 ">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12">
                <div className="company-content">
                    <span>Our Skills</span>
                    <h2>Why Choose For Us?</h2>
                    <p>Globally foster client-centered convergence through accurate deliverables. Synergistically
                        actualize transparent.</p>
                </div>
                <div className="skill-progress-area">
                    <div className="single-progressbar">
                        <div className="title Freight">
                            <h6>Cargo Freight
                            </h6>
                            <div className="progress-count-wrap">
                                <span className="progress-count counting" data-count="85">50</span>
                                <span className="counting-icons">%</span>
                            </div>
                        </div>
                        <div className="progress-item" id="progress-running">
                            <div className="progress-bg">
                                <div id="progress" className="progress-rate Freight" data-value="85">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-progressbar">
                        <div className="title Freight">
                            <h6>Air Freight
                            </h6>
                            <div className="progress-count-wrap">
                                <span className="progress-count counting" data-count="20">80</span>
                                <span className="counting-icons">%</span>
                            </div>
                        </div>
                        <div className="progress-item" id="progress-running-1">
                            <div className="progress-bg">
                                <div id="progress-1" className="progress-rate" data-value="80" >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-progressbar">
                        <div className="title Freight" >
                            <h6>Road Freight
                            </h6>
                            <div className="progress-count-wrap">
                                <span className="progress-count counting" data-count="90">90</span>
                                <span className="counting-icons">%</span>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-bg">
                                <div id="progress-2" className="progress-rate" data-value="90">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-progressbar">
                        <div className="title Freight" >
                            <h6>Train Freight</h6>
                            <div className="progress-count-wrap">
                                <span className="progress-count counting" data-count="75">85</span>
                                <span className="counting-icons">%</span>
                            </div>
                        </div>
                        <div className="progress-item mb-0" id="progress-running-3">
                            <div className="progress-bg">
                                <div id="progress-3" className="progress-rate" data-value="75">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="skill-img1">
                            <img src={skill1} alt="img" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="skill-img2">
                            <img src={skill2} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="need-help shadow mt-4 ">
    <div className="wrorker-img">
        <img src={help} alt='help' />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="help-box">
                    <div className="company-content">
                        <span className="text-white">Let's Talk</span>
                        <h2>YOU NEED ANY HELP?
                            GET FREE CONSULTATION</h2>
                    </div>
                    <div className="d-flex question-content">
                        <div className="c-icon">
                        <i class="zmdi zmdi-phone"></i>
                        </div>
                        <div className="question-details">
                            <h6>Have Any Question</h6>
                            <h3>+19524357106</h3>
                        </div>
                    </div>
                    <Link to="/Contact/Contact" className="btn contact-btn">Contact Us</Link>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="our-team shadow mt-4">

<div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <div className="company-content ourteam-title">
                <span>Team Members</span>
                <h2>Our Professional Team </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
            <div className="our-team-box">
                <div className="team-img">
                     <img src={user1} alt="img"/>
                </div>
                <div className="team-content">
                    <h5>MISHEL MARSH</h5>
                    <p>Co-Founder</p>
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
            <div className="our-team-box">
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
            <div className="our-team-box">
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
</section>
{/* <section className="review-block shadow mt-4 mb-4">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="company-content review-title">
                    <span>Testimonials</span>
                    <h2>Our Client's Feedback </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="review-box">
                    <div className="qute-i"><span><i class="zmdi zmdi-quote"></i></span></div>
                    <p className="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s</p>
                    <div className="client-wrap d-flex align-items-center">
                        <div className="client-img">
                            <img src={Re1} alt="img" />
                        </div>
                        <div className="r-detail">
                            <h5>MONISH POUL</h5>
                            <p className="mb-0">Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="review-box">
                    <div className="qute-i"><span><i class="zmdi zmdi-quote"></i></span></div>
                    <p className="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s</p>
                    <div className="client-wrap d-flex align-items-center">
                        <div className="client-img">
                            <img src={Re2} alt="img" />
                        </div>
                        <div className="r-detail">
                            <h5>ANJELINA MATHEUS</h5>
                            <p className="mb-0">Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="review-box">
                    <div className="qute-i"><span><i class="zmdi zmdi-quote"></i></span></div>
                    <p className="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s</p>
                    <div className="client-wrap d-flex align-items-center">
                        <div className="client-img">
                            <img src={Re3} alt="img" />
                        </div>
                        <div className="r-detail">
                            <h5>MICHEL CLACRK</h5>
                            <p className="mb-0">Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>     */}
    </>
  )
}

export default About