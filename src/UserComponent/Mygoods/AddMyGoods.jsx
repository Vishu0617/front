import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import './AddGoods.css'
import Button from '@mui/material/Button';
import {  toast } from 'react-toastify';


function AddMyGoods() {

  const [goods, setGoods] = useState({})
  const {id}=useParams()
  const navigate=useNavigate();

  const inputData=(e)=>{
    setGoods({...goods,[e.target.name]:e.target.value})
    // console.log(goods)
  }

  const inputGoods=(e)=>{
    e.preventDefault();
    console.log(goods)
    axios.post(`http://localhost:3001/addgoods/${id}`,goods).then((res)=>{
        console.log("Response",res.data);
        // alert(res.data.message);
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
        navigate(`/client/UserComponent/Mygoods/Mygoods/${id}`);
        setGoods({spoint:"",dname:"",cphone:"",date:"",km:"",price:"",descr:""})
    }).catch((error) => {
      console.log(error.response.data.error);
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
    });
  }

  return (
    <>
      <div className='client-dashbord'>
      <form className="row g-3 add-goods-main shadow rounded" onSubmit={inputGoods}>
            <h1>Add Trips</h1><hr/>
            <div className="col-md-6 input-div ">
              <label  className="form-label"><b>Starting Point :-</b></label>
              <input type="text" className="form-control border-dark add-goods" name='spoint' onChange={inputData} placeholder='Enter youre curent Address'  />
            </div>
            <div className="col-md-6 input-div">
              <label className="form-label"><b>Destination Point  :-</b></label>
              <input type="text" className="form-control border-dark add-goods" name='dname' onChange={inputData} placeholder='Enter youre destination Address'  />
            </div>
            <div className="col-md-6 input-div">
              <label  className="form-label"><b>Client Number  :-</b></label>
              <input type="text" className="form-control border-dark add-goods" name='cphone' onChange={inputData} maxLength={10} placeholder="Contect detail"  />
            </div>
            <div className="col-md-6 input-div">
              <label  className="form-label"><b>Date  :-</b></label>
              <input type="Date" className="form-control border-dark add-goods" name='date' onChange={inputData}  />
            </div>
            <div className="col-md-6 input-div">
              <label  className="form-label"><b>Vehicale Km  :-</b></label>
              <input type="text" className="form-control border-dark add-goods" name='km' onChange={inputData} placeholder="distance"  />
            </div>
            <div className="col-md-6 input-div">
              <label  className="form-label"><b>Payment  :-</b></label>
              <input type="text" className="form-control border-dark add-goods" name='price' onChange={inputData} placeholder="price"  />
            </div>

            <div className="col-12">
              <label  className="form-label"><b>Description:-</b></label>
              <textarea className="form-control border-dark add-goods"  rows="3" name='descr' placeholder='Enter Load height,weight,width' onChange={inputData}></textarea>
            </div>  

            <div className="col-12 mb-2">
              <Button type="submit" className="btn addGoods bg-dark text-white">Add</Button>
            </div>

      </form>  
      </div>
      <Footer />  
    </>
  )
}

export default AddMyGoods