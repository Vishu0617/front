import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../../Footer/Footer'
import './AdminViewDetail.css'

function AdminViewDetail() {
    const [fetchData, setFetchData] = useState([])
    const [vehicaleLength, setVehicaleLength] = useState()

    useEffect(() => {
       axios.get("http://localhost:3001/fetchVehicacle").then((res)=>{
        setFetchData(res.data.data)
        setVehicaleLength(res.data.data.length)
        console.log(res.data.data.length)
       })
    })

    const vehicaleDelete=(vid)=>{
      axios.delete(`http://localhost:3001/vehicaleDelete/${vid}`)
      .then((res)=>{
       console.log(res.data.message)
       alert(res.data.message)
      }).catch((err)=>{
        console.log(err,"server error");
      })
    }

    const [query, setQuery] = useState("");
    const keys = ["vnumber","name"];
    const vehicalView = fetchData.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );

  return (
    <>
    <div className='adminViewVehicale h-100 pt-lg-5 pb-lg-5'>
     <div className="table-box vehicale-table mb-2 shadow border-dark card ">
     <div align="center">
        <input className="userSearcrh rounded-1" placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
       </div>
        <h4 className="text-dark mb-4">Vehicale Detail</h4>
        <div className="table-responsive">
        {vehicaleLength === 0 ? (
          <>
            <div class="mx-auto me-2" style={{ width: 800 }}>
              <h1>There is No Vehicale available</h1>
            </div>
          </>
        ) : (
          <table className="table table-bordered border-dark table-hover mb-0">
            <thead>
              <tr>
                <th>Index Id</th>
                <th>Name </th>
                <th>Contect</th>
                <th>Vehicale Name</th>
                <th>Vehicale Number</th>
                <th>Vehicale Capacity</th>
                <th>Vehicale Starting</th>
                <th>Vehicale Destination</th>
                <th>Action</th>
               
              </tr>
            </thead>
            {vehicalView.map((e,index)=>{
              return(
                <>
                  <tbody>
                  <tr key={e._id}>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.vname}</td>
                    <td>{e.vnumber}</td>
                    <td>{e.capacity}</td>
                    <td>{e.slocation}</td> 
                    <td>{e.dlocation}</td>
                    <td> <button
                          className="btn btn-outline-danger action rounded"
                          onClick={() => {
                         if (window.confirm("Are you sure delete this Vehicale detail"))vehicaleDelete(e._id);}}><i class="zmdi zmdi-delete zmdi-hc-1x"></i>
                        </button></td>
                  </tr>
                </tbody>
                </>
              )
            })}
        </table>
         )}
        </div>
      </div>
    </div>
    <Footer />

    </>
  )
}

export default AdminViewDetail