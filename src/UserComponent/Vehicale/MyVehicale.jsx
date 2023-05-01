import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Vehicale.css'

function MyVehicale() {
    const {id}=useParams();
    const [vehicale, setVehicale] = useState([])
    const [vehicaleLength, setVehicaleLength] = useState()

    useEffect(() => {
      axios.get(`http://localhost:3001/fetchSingleVehicale/${id}`).then((res)=>{
        setVehicale(res.data.data)
        setVehicaleLength(res.data.data.length)
      })
    }, [id])
    
  return (
    <>
    <div className="client-dashbord">
      <div className="table-box myvehicale container mb-2 shadow card ">
        <h4 className="text-dark mb-4">My Vehicle Detail</h4>
        <div className="table-responsive">
        {vehicaleLength === 0 ? (
          <>
            <div class="mx-auto me-2" style={{ width: 800 }}>
              <h4>you have note add youre vehicle</h4>
            </div>
          </>
        ) : (
          <table className="table  table-bordered text-light border-dark  mb-0">
            <thead  className="bg-dark">
              <tr>
                <th>Index Id</th>
                <th>Name </th>
                <th>Contact</th>
                <th>Vehicle Name</th>
                <th>Vehicle Number</th>
                <th>Vehicle Capacity</th>
                <th>Vehicle Starting</th>
                <th>Vehicle Destination</th>
              </tr>
            </thead>
            {vehicale.map((e,index)=>{
              return(
                <>
                  <tbody>
                  <tr className='vehicale-tr' key={e._id}>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.vname}</td>
                    <td>{e.vnumber}</td>
                    <td>{e.capacity}</td> 
                    <td>{e.slocation}</td> 
                    <td>{e.dlocation}</td> 
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
    </>
  )
}

export default MyVehicale