import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './GoodsDetail.css'
import Footer from '../../Footer/Footer';

function GoodsStatus() {
    
    const {id}=useParams(); //admin id
    const {pid}=useParams(); //product id
    const [fetchGoods, setFetchGoods] = useState([])
    const navigate=useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/editStatus/${pid}`).then((res)=>{
            setFetchGoods(res.data.data) 
        }) 
    }, [pid])
    
    const editStatus=(e)=>{
        setFetchGoods({...fetchGoods,[e.target.name]:e.target.value})
    }

   const  statusUpdate=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3001/statusUpdate/${pid}`,fetchGoods).then((res)=>{
        console.log(res.data.data)
        alert(res.data.message)
        navigate(`/admin/AdminComponent/Goods/GoodsDetail/${id}`)
    })
   }

  return (
    <>
    <div className="goods-status-body">
      <div className="shadow goods-status-table rounded ">
        <h5 align="center">Update Data</h5>
        <hr />
        <form className="goods-status-form" onSubmit={statusUpdate}>
           <select className="form-control goods-status-value" aria-label="Default select example" name='status' value={fetchGoods.status} onChange={editStatus}>
            <option value="Pending" >Pending</option>
            <option value="Shipped" >Shipped</option>
            <option value="Dispatched" >Dispatched</option>
            <option value="Delivered" >Delivered</option>
            <option value="Canceled" >Canceled</option>
           </select>
        <center className="container goods-status-buutton ">
          <button className="btn btn-outline-success" type="Submit">
            Submit
          </button>
        </center>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default GoodsStatus