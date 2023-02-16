import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Contact.css'

function Contact() {

  const navigate=useNavigate();
  const [clientMessg, setClientMessg] = useState({})

  const dataInput=(e)=>{
    setClientMessg({...clientMessg,[e.target.name]:e.target.value});
    // console.log(clientMessg)

  }

  const dataSubmit=(e)=>{
    e.preventDefault();
    console.log(clientMessg)
    axios.post("http://localhost:3001/clientMessage",clientMessg)
          .then((res)=>{
            console.log(res.data.message);
            alert(res.data.message);
            navigate("/");
          }).catch((error)=>{
            console.log(error.response.data.error)
            alert(error.response.data.error)
          })  
  }

  return (
    <>
      <section className="main-top shadow bg-info">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-content">
                <h1>Contact Us</h1>
                <ul className="list-inline bread-list mb-0">
                  <li className="c-link"><a href="/">Home</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-info container rounded shadow mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="contact-wrapper">
                <div className="contact-text company-content">
                  <span>Get a Quote</span>
                  <h2> Get in Touch And We'll Help Your Business </h2>
                </div>
                <div className="contact-detail rounded shadow">
                  <div className="d-flex">
                    <div className="contact-i">
                      <i className="zmdi zmdi-pin"></i>
                    </div>
                    <div className="contact-contact ">
                      <h3>Office address</h3>
                      <Link to="#">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="contact-detail rounded shadow">
                  <div className="d-flex">
                    <div className="contact-i">
                      <i className="zmdi zmdi-phone"></i>
                    </div>
                    <div className="contact-contact">
                      <h3>phone number</h3>
                      <Link to="tel:(123) 456-123">(123) 456-123</Link>
                      <Link className="d-block" to="tel:(123) 320-596">
                        (123) 320-596
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="contact-detail rounded shadow">
                  <div className="d-flex">
                    <div className="contact-i">
                      <i className="zmdi zmdi-email"></i>
                    </div>
                    <div className="contact-contact">
                      <h3>Mail address</h3>
                      <Link href="mailto:help@trans.com">help@trans.com</Link>
                      <Link
                        className="d-block"
                        href="mailto:transport@gmail.com"
                      >
                        transport@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12  ">
              <div className="contact-form shadow rounded">
                <h3>Get a Quote</h3>
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <label className="form-label">Your Name</label>
                    <input type="text" name='cname' onChange={dataInput} className="form-control input-feild" />
                  </div>
                  <div className="col-md-6 col-12">
                    <label className="form-label">Email Address</label>
                    <input type="email" name='cemail' onChange={dataInput} className="form-control input-feild" />
                  </div>
                  <div className="col-md-6 col-12">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name='cphone' onChange={dataInput} className="form-control input-feild" />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Message</label>
                    <textarea
                      name='msg'
                      onChange={dataInput}
                      className="form-control txt-area"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      onClick={dataSubmit}
                      className="btn btn-outline-success shadow dark"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-block ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map-address shadow mt-5 rounded-3">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.779091845512!2d73.05315751424057!3d20.75974600228489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0edf1017ec3bf%3A0xa549dc1885e04e5d!2sIzonnet%20Web%20Solution%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1673086859695!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  className="map rounded"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </h1>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact