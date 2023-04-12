import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ClientPayment.css'
import {  toast } from 'react-toastify';
import Button from '@mui/material/Button';



function ClientPayment({clientData}) {
 
  const {id}=useParams();
  // console.log(id)
  const {pri}=useParams();
  // console.log(pri)
  const {tid}=useParams();
  // console.log(tid)
  const navigate=useNavigate();
  const [clientPay, setClientPay] = useState({})

  console.log(clientData.email)

  const inputPayment=(e)=>{
     setClientPay({...clientPay,[e.target.name]:e.target.value})
    //  console.log(clientPay)
  }

  const paymentSubmit=(e)=>{
    e.preventDefault();
    console.log(clientPay)
    axios.post(`http://localhost:3001/clientPayment/${id}/${pri}/${clientData.email}/${tid}`,clientPay).then((res)=>{
     console.log(res.data.message)
    //  alert(res.data.message)
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
     navigate(`/client/UserComponent/Payment/OtpVerification/${id}`)
    }).catch((error)=>{
      console.log(error.response.data.error)
      // alert(error.response.data.error)
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
    })
  }

  return (
    <>
    <div className="client-dashbord">
      <div align="center">
      <form className="row col-md-6 mt-5 payment-main shadow rounded" onSubmit={paymentSubmit} >
          <h1>Card Detail</h1><hr/>
          <div className="col-md-6 mt-3">
            <label  className="form-label"><b>Card Holder Name:-</b></label>
            <input type="text" className="form-control bg-gradient" name='cname'  onChange={inputPayment} placeholder='Enter Card Holder Name'  />
          </div>
          <div className="col-md-6  mt-3">
            <label className="form-label"><b>Card Number  :-</b></label>
            <input type="text" className="form-control" name='cnumber'  maxLength={16} minLength={3} onChange={inputPayment} placeholder='Enter Card Number'  />
          </div>
          <div className="col-md-6  mt-3">
            <label  className="form-label"><b>Expi Month and Year :-</b></label>
            <input type="month" className="form-control" name='exptime'  onChange={inputPayment} placeholder="Expi Month and Year"  />
          </div>
          <div className="col-md-6  mt-3">
            <label  className="form-label"><b>Cvv Number :-</b></label>
            <input type="text" className="form-control" name='cvv' maxLength={3} minLength={3}  onChange={inputPayment} placeholder="Enter Cvv number"  />
          </div>
          <div className="col-md-6  mt-3">
            <label  className="form-label"><b>Amount :-</b></label>
            <input type="text" className="form-control" name='amount' value={pri} placeholder="Enter Amount"  />
          </div>
          <div className="col-12 mb-2 mt-3">
            <Button type="submit" className="btn bg-dark text-white">Payment</Button>
          </div>
      </form> 
      </div>
    </div>
    </>
  )
}

export default ClientPayment

