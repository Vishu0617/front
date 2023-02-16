import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Mygoods.css'


function Mygoods() {

  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
     axios.get("http://localhost:3001/fetchVehicacle").then((res)=>{
      // console.log(res.data.data)
      setFetchData(res.data.data)
     })

  })
  
  
 return (
    <>
    <div className="table-box container mb-2 shadow card ">
        <h4 className="text-dark mb-4">Vehicale Detail</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-hover mb-0">
            <thead>
              <tr>
                <th>Index Id</th>
                <th>Name </th>
                <th>Contect</th>
                <th>Vehicale Name</th>
                <th>Vehicale Number</th>
                <th>Vehicale Capacity</th>
                <th>Action</th>
              </tr>
            </thead>
            {fetchData.map((e,index)=>{
              return(
                <>
                 {/* <label className='ms-2' key={e._id}>{index+1}</label>
                 <label className='ms-2'>{e.name}</label>
                 <label className='ms-2'>{e.phone}</label>
                 <label className='ms-2'>{e.vname}</label>
                 <label className='ms-2'>{e.vnumber}</label>
                 <label className='ms-2'>{e.capacity}</label>
                  */}
                  <tbody>
                  <tr key={e._id}>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.vname}</td>
                    <td>{e.vnumber}</td>
                    <td>{e.capacity}</td>
                  </tr>
                </tbody>
                </>
              )
            })}
        </table>
        </div>
      </div>
      </>
  )
}

export default Mygoods