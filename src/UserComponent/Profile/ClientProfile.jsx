import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './ClientProfile.css'

function ClientProfile() {
   
    const [fetchData, setFetchData] = useState([])
    const {id}=useParams();
    // console.log(id)

    useEffect(()=>{
        axios.get(`http://localhost:3001/fetchData/${id}`).then((res)=>{
        //    console.log(res.data.data);
           setFetchData(res.data.data)
        })
    })

  return (
    <>
     <div className="rounded mb-0 viwProfile card p-5 container">
        <div className="row g-3 div-mid">
          <center><img className="profile shadow" src={`http://localhost:3001/${fetchData.file}`} alt="profile" /><br/>
           <Link className='edit-link' to={`/client/UserComponent/EditProfile/ClientFileEdit/${id}`}>Edit Profile</Link>
          </center>
             <span className='ps-2'>{fetchData.name}</span><hr/>
          <div className="col-md-12   rounded  d-flex">
            <label className="form-label">
              <i className="zmdi zmdi-email"></i>
            </label>
            <span className='ps-2'>{fetchData.email}</span>
          </div>
          <div className="col-md-12  rounded  d-flex">
            <label className="form-label">
              <i className="zmdi zmdi-phone"></i>
            </label>
            <span className='ps-2'>{fetchData.phone}</span>
          </div>
          
        </div><hr/>
        <div align="center" className='d-flex social'>
            <Link className='s-link' href="https://www.facebook.com/profile.php?id=100044580701985"><center><i class="zmdi zmdi-facebook"></i></center></Link>
            <Link className='s-link' href="https://www.facebook.com/profile.php?id=100044580701985"><center><i class="zmdi zmdi-twitter"></i></center></Link>
            <Link className='s-link' href="https://www.facebook.com/profile.php?id=100044580701985"><center><i class="zmdi zmdi-whatsapp"></i></center></Link>
            <Link className='s-link' href="https://www.facebook.com/profile.php?id=100044580701985"><center><i class="zmdi zmdi-linkedin"></i></center></Link>
        </div>
          {/* <center><Link className='edit-data' to={`/client/UserComponent/EditProfile/EditProfile/${fetchData._id}`}>Edit Data</Link></center> */}
      </div>
      
        
     
    </>
  )
}

export default ClientProfile