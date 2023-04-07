import React, { useEffect, useState } from "react";
// import VehicaleDetail from '../Vehicale/VehicaleDetail';
import './ClientDashbord.css'
// import Footer from '../../Footer/Footer'
import img1 from '../../img/icon/travel-icon.png'
import img2 from '../../img/icon/icon1.jpg'
import img3 from '../../img/icon/icon2.jpg'
import axios from "axios";
import { useParams } from "react-router-dom";

function ClientDashbord() {

   const [tripsDetail, setTripsDetail] = useState([])
   const [vehicaleLength, setVehicaleLength] = useState([])
   const [fetchFeedback, setFetchFeedback] = useState([])
   const [fetchData, setFetchData] = useState([])


   const { id } = useParams();
   
  useEffect(() => {
    axios.get(`http://localhost:3001/fetchgoods/${id}`).then((res) => {
      setTripsDetail(res.data.data.length);
      // console.log(res.data.data)
    });
    axios.get(`http://localhost:3001/fetchSingleVehicale/${id}`).then((res)=>{
      setVehicaleLength(res.data.data.length)
    })
    axios.get(`http://localhost:3001/getPersnalFeedback/${id}`).then((res)=>{
      setFetchFeedback(res.data.data.length);
    })
    axios.get("http://localhost:3001/fetchVehicacle").then((res)=>{
      setFetchData(res.data.data)
     })
  });

  return(
    <>
    <div className="client-dashbord  shadow" >
      <div className="border-dark rounded client-main-div1">
        <div className="row ">
          <div className="col-xl-3 col-md-6 col-6 rounded-1 card  client-trips ">
            <div className="shadow rounded p-2 ">
                <div className="d-flex justify-content-between">
                  <img className="me-4" src={img1} alt="trips icon" height={50} width={50} />
                  <label className="lable1 ">  Trips Detail </label>
                </div><hr/>
                <div className="valueTrips">
                  <span className="ms-1 ">{tripsDetail}</span>
                </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-6 rounded-1 card  client-trips ">
            <div className="shadow rounded p-2 ">
                <div className="d-flex justify-content-between">
                  <img className="me-4" src={img2} alt="trips icon" height={50} width={50} />
                  <label className="lable1 ">  Vehicale Detail </label>
                </div><hr/>
                <div className="valueTrips">
                  <span className="ms-1"> {vehicaleLength}</span>
                </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-6 rounded-1 card  client-trips ">
            <div className="shadow rounded p-2 ">
                <div className="d-flex justify-content-between">
                  <img className="me-4" src={img3} alt="trips icon" height={50} width={50} />
                  <label className="lable1 ">  Feedback Detail </label>
                </div><hr/>
                <div className="valueTrips">
                  <span className="ms-1">  {fetchFeedback}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      {/* vehicale detail */}
      <div className="table-box client-main-div border-dark container mb-2 shadow card ">
        <h4 className="mb-4">Finde youre Roote</h4>
        <div className="table-responsive">
        {vehicaleLength === 0 ? (
          <>
            <div class="mx-auto me-2" style={{ width: 800 }}>
              <h1 className=''>There is No Vehicale available</h1>
            </div>
          </>
        ) : (
          <table className="table table-bordered text-light border-dark  mb-0">
            <thead className=" bg-dark"> 
              <tr>
                <th>Index Id</th>
                <th>Name </th>
                <th>Contect</th>
                <th>Vehicale Name</th>
                <th>Vehicale Number</th>
                <th>Vehicale Capacity</th>
                <th>Vehicale Starting</th>
                <th>Vehicale Destination</th>
              </tr>
            </thead>
            {fetchData.map((e,index)=>{
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
    {/* <Footer /> */}
    </>
  )
}
 export default ClientDashbord;
   

    

   
