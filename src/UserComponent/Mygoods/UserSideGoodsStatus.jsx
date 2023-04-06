import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserSideGoodsStatus() {
   
  const navigate=useNavigate();
  const [goodsFetch, setGoodsFetch] = useState([])
  const {pid}=useParams()//product id
  const {id}=useParams()//user id

  useEffect(() => {
      axios.get(`http://localhost:3001/editStatus/${pid}`).then((res)=>{
        setGoodsFetch(res.data.data) 
      }) 
  }, [pid])

  const editStatus=(e)=>{
    setGoodsFetch({...goodsFetch,[e.target.name]:e.target.value})
  }

  const  statusUpdate=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3001/statusUpdate/${pid}`,goodsFetch).then((res)=>{
        console.log(res.data.data)
        alert(res.data.message)
        navigate(`/client/UserComponent/Mygoods/Mygoods/${id}`)
    })
   }

  return (
    <>
      <div className="shadow rounded w-25 mt-5 mb-3 bg-light container">
        <h1 align="center">Update Data</h1>
        <hr />
        <form onSubmit={statusUpdate}>
        <div className="w-50 container">
           <select className="form-control w-70" aria-label="Default select example" name='status' value={goodsFetch.status} onChange={editStatus}>
            <option value="Pending" >Pending</option>
            <option value="Shipped" >Shipped</option>
            <option value="Dispatched" >Dispatched</option>
            <option value="Delivered" >Delivered</option>
            <option value="Canceled" >Canceled</option>
           </select>
          </div>
          <center className="container mt-5 ">
            <button className="submit ms-2 btn btn-outline-success" type="Submit">
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  )
}

export default UserSideGoodsStatus
