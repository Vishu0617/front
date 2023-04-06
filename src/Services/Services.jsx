import React from "react";
import "./Services.css";
import { BsPersonCheckFill, BsTruck } from "react-icons/bs";
import { FaShip, FaFly } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAvTimer } from "react-icons/md";
import service1 from "C:/Transport Triangle/front/src/img/service1.jpg";
import service2 from "C:/Transport Triangle/front/src/img/service2.jpg";
import service3 from "C:/Transport Triangle/front/src/img/service3.jpg";
import service4 from "C:/Transport Triangle/front/src/img/service4.jpg";
import s1 from "C:/Transport Triangle/front/src/img/s1.jpg";
import s2 from "C:/Transport Triangle/front/src/img/s2.jpg";
import s4 from "C:/Transport Triangle/front/src/img/s4.jpg";
import s6 from "C:/Transport Triangle/front/src/img/s6.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section className="main-top bread-crumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-content">
                <h1>Services</h1>
                <ul className="list-inline bread-list mb-0">
                  <li className="list-inline-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-inline-item">Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="service-title">Explore further</h2>
            </div>
            <div className="col-md-4 col-12">
              <div className="exp-box">
                <div className="exp-icon">
                  <BsTruck />
                </div>
                <div className="explore-content">
                  <h4>Fast Worldwide delivery</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nibh euismod .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="exp-box">
                <div className="exp-icon">
                  <BsPersonCheckFill />
                </div>
                <div className="explore-content">
                  <h4>Safety & Compliance</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nibh euismod .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="exp-box">
                <div className="exp-icon">
                  <MdAvTimer />
                </div>
                <div className="explore-content">
                  <h4>Faster Performance</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nibh euismod .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="cor-title">
                <span>What we do</span>
                <h2>We Provide all Kinds of Logistics Service</h2>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 mb-4">
              <div className="service-innerbox">
                <div className="service-img">
                  <img className="rounded serv-img card" src={service1} alt="img" />
                </div>
                <div className="service-content position-relative">
                  <center>
                    <div className="cor-service-icon shadow-lg card rounded">
                      <i class="zmdi zmdi-airplane"></i>
                    </div>
                  </center>
                  <h3>Air Freight</h3>
                  <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
                  <div className="service-btn overlay">
                    <Link className="Link" to="/About/About">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 mb-4">
              <div className="service-innerbox">
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
              <div className="service-innerbox">
                <div className="service-img">
                  <img className="rounded serv-img card" src={service3} alt="img" />
                </div>
                <div className="service-content position-relative">
                  <center>
                    <div className="cor-service-icon shadow-lg card rounded">
                      <center>
                        {" "}
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
              <div className="service-innerbox">
                <div className="service-img">
                  <img className="rounded serv-img card" src={service4} alt="img" />
                </div>
                <div className="service-content position-relative">
                  <center>
                    <div className="cor-service-icon shadow-lg card rounded">
                      <center>
                        {" "}
                        <TbTruckDelivery />
                      </center>
                    </div>
                  </center>
                  <h3>Road Transport</h3>
                  <p>Lorem ipsum dolor sit ame consectetur adipiscing .</p>
                  <div className="service-btn">
                    <Link className="Link" routerLink="/service-details">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 mb-4">
              <div className="service-innerbox">
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
              <div className="service-innerbox">
                <div className="service-img">
                  <img className="rounded serv-img card" src={s2} alt="img" />
                </div>
                <div className="service-content position-relative">
                  <center>
                    <div className="cor-service-icon shadow-lg card rounded">
                      <center>
                        {" "}
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
              <div className="service-innerbox">
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
              <div className="service-innerbox">
                <div className="service-img">
                  <img className="rounded serv-img card" src={s4} alt="img" />
                </div>
                <div className="service-content position-relative">
                  <center>
                    <div className="cor-service-icon shadow-lg card rounded">
                      <center>
                        {" "}
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
    </>
  );
}

export default Services;
