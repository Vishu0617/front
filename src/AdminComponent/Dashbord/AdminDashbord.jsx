import React, { useEffect, useState } from "react";
import { FaSuitcase, FaStar } from "react-icons/fa";
import { RiTruckFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import "./AdminDashbord.css";
import axios from "axios";
// import Footer from "../../Footer/Footer";

function AdminDashbord() {
  const [fetchGoods, setFetchGoods] = useState([]);
  const [goodsLength, setGoodsLength] = useState()
  const [userLenght, setUserLenght] = useState()
  const [vehicaleLenght, setVehicaleLenght] = useState()
  const [feedBackLength, setFeedBackLength] = useState()
  
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios.get("http://localhost:3001/fetchgoodsAll").then((res) => {
      setFetchGoods(res.data.data);
      setGoodsLength(res.data.data.length)
    });

    axios.get(`http://localhost:3001/fetachAll`).then((res) => {
      setUserLenght(res.data.data.length);
    })

    axios.get("http://localhost:3001/fetchVehicacle").then((res)=>{
      setVehicaleLenght(res.data.data.length)
     })

     axios.get("http://localhost:3001/fetchFeedback").then((res)=>{
      setFeedBackLength(res.data.data.length)
     })
  }, [id]);

  return (
    <>
      <section className="dashboard-block " >
        <div className="dashboard-block1">
          <div className="col-12">
            <div className="row">
              <Link  to={`/admin/AdminComponent/Goods/GoodsDetail/${id}`} className="col-xl-3 col-md-6 col-12 text-decoration-none ">
                <div className="card-info shadow bg-success card border-dark rounded p-2">
                  <div className="d-flex justify-content-between">
                    <FaSuitcase className="Trips text-white" />
                    <div className="card-info-content text-end">
                      <label className="mb-1">Total Trips</label>
                      <h4 className="text-danger">
                        <u>{goodsLength}</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">45% higher growth</p>
                </div>
              </Link>
              <Link  to={`/admin/AdminComponent/Vehicale/AdminViewDetail/${id}`} className="col-xl-3 col-md-6 col-12 text-decoration-none">
                <div className="card-info shadow bg-warning card border-dark rounded p-2 ">
                  <div className="d-flex justify-content-between">
                    <RiTruckFill className="Trips text-white"/>
                    <div className="card-info-content text-end">
                      <label className="mb-1">Total Vehicle</label>
                      <h4 className="text-danger">
                        <u>{vehicaleLenght}</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">65% lower growth</p>
                </div>
              </Link>
              <Link  to={`/admin/AdminComponent/UserData/UserData/${id}`} className="col-xl-3 col-md-6 col-12 text-decoration-none">
                <div className="card-info shadow bg-primary card border-dark rounded p-2 ">
                  <div className="d-flex justify-content-between">
                    <i class="zmdi zmdi-accounts zmdi-hc-3x text-white"></i>
                    <div className="card-info-content text-end">
                      <label className="mb-1">Total User</label>
                      <h4 className="text-danger">
                        <u>{userLenght}</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">25% lower growth</p>
                </div>
              </Link>
              <Link  to={`/admin/AdminComponent/Feedback/UserFeedback/${id}`} className="col-xl-3 col-md-6 col-12 text-decoration-none">
                <div className="card-info shadow bg-danger card border-dark rounded p-2 ">
                  <div className="d-flex justify-content-between">
                    <FaStar className="Trips text-white" />
                    <div className="card-info-content text-end">
                      <label className="mb-1">Total Feedback</label>
                      <h4 className="text-danger">
                        <u>{feedBackLength}</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">15% higher growth</p>
                </div>
              </Link>
              {/* treap detail */}
              <div className="col-12 mt-2 mb-3">
                <div className="table-box table-hover border-dark table-bordered shadow card">
                  <h4 className="text-dark mb-4">Trip Details</h4>
                  <div className="table-responsive">
                  {goodsLength === 0 ? (<>
                      <div class="mx-auto" style={{ width: 600 }}>
                        <h1>There is no transection yet</h1>
                      </div>
                      </>) : (
                    <table className="table table-border-secondary border-dark table-hover mb-0 ">
                      <thead>
                        <tr className="">
                          <th width={10}>Index Id</th>
                          <th width={20}>Starting Point </th>
                          <th>Destination Point</th>
                          <th>Customer Contect</th>
                          <th>Date</th>
                          <th width={10}>Vehicale Km</th>
                          <th>Payment</th>
                          <th>Descripteion</th>
                          <th>Payment Status</th>
                          <th>Goods Status</th>
                        </tr>
                      </thead>
                      {fetchGoods.map((e, index) => {
                        return (
                          <>
                            <tbody>
                              <tr className="datatable" key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e.spoint}</td>
                                <td>{e.dname}</td>
                                <td>{e.cphone}</td>
                                <td>{e.date}</td>
                                <td>{e.km}</td>
                                <td>{e.price}</td>
                                <td>{e.descr}</td>
                                <td> {e.paymentStatus === "Paid"?(<><h6 className="text-success">Payment Success !</h6></>):(<><h6 className="text-text-danger">Payment Pending!</h6></>)} </td>
                                <td>{e.status}</td>
                              </tr>
                            </tbody>
                          </>
                        );
                      })}
                    </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   {/* <Footer /> */}

    </>
  );
}

export default AdminDashbord;
