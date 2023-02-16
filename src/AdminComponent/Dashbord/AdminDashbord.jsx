import React, { useEffect, useState } from "react";
import { FaSuitcase, FaStar } from "react-icons/fa";
import { RiTruckFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import "./AdminDashbord.css";
// import axios from "axios";
import axios from "axios";

function AdminDashbord() {
  const [fetchData, setFetchData] = useState([]);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    axios.get(`http://localhost:3001/fetchAdmin/${id}`).then((res) => {
      setFetchData(res.data.data);
    });
  }, [id]);

  return (
    <>
      <section className="dashboard-block shadow-lg m-4 rounded">
        <div className="col-xl-2 col-lg-3 shadow-lg position-relative mt-5 ms-3">
          <div className="avatar-upload  d-flex w-100  mt-5">
            <div className="avatar">
             
                {/* <img src={preview} alt="" height={100} width={100} /> */}
                <img
                  className="profile shadow "
                  src={`http://localhost:3001/${fetchData.file}`}
                  alt="profile"
                />
              </div>
             <Link className="edit-data-admin" to={`/admin/AdminComponent/ProfileEdit/EditProfile/${id}`}>Edit Data</Link>
            </div>
          </div>
        {/* bio */}

        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="col-xl-3 col-md-2 col-12 bio-info ">
                <div className="card-info d-flex  p-2 ">
                  <div className="d-flex justify-content">
                    <label className="mt-1">
                      <i className="zmdi zmdi-account zmdi-hc-1x"></i>
                    </label>
                    <label className="mt-auto ps-2">{fetchData.name}</label>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-2 col-8 bio-info ">
                <div className="card-info p-2 ">
                  <div className="d-flex justify-content">
                    <label className="mt-1">
                      <i className="zmdi zmdi-email zmdi-hc-1x"></i>
                    </label>
                    <Link className="mt-auto ps-2 mb-2 ">
                      {fetchData.email}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-2 col-8 bio-info ">
                <div className="card-info p-2 ">
                  <div className="d-flex justify-content">
                    <label className="mt-0">
                      <i className="zmdi zmdi-phone  zmdi-hc-1x"></i>
                    </label>
                    <Link className="mt-auto ps-2 mb-1">{fetchData.phone}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <hr />
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12 ">
                <div className="card-info shadow rounded p-2 card">
                  <div className="d-flex justify-content-between">
                    <FaSuitcase className="Trips text-success" />
                    <div className="card-info-content text-end">
                      <label className="mb-1">Total Trips</label>
                      <h4 className="text-danger">
                        <u>$650</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">45% higher growth</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12 ">
                <div className="card-info shadow rounded p-2 card">
                  <div className="d-flex justify-content-between">
                    <RiTruckFill className="Trips text-warning" />
                    <div className="card-info-content text-end">
                      <label className="mb-1">Vehicle Cost</label>
                      <h4 className="text-danger">
                        <u>$1,250</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">65% lower growth</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="card-info shadow rounded p-2 card">
                  <div className="d-flex justify-content-between">
                    <FaSuitcase className="Trips text-primary" />
                    <div className="card-info-content text-end">
                      <label className="mb-1">New trips</label>
                      <h4 className="text-danger">
                        <u>$129</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">25% lower growth</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="card-info shadow rounded p-2 card">
                  <div className="d-flex justify-content-between">
                    <FaStar className="Trips text-danger" />
                    <div className="card-info-content text-end">
                      <label className="mb-1">Total Revenue</label>
                      <h4 className="text-danger">
                        <u>$10,125</u>
                      </h4>
                    </div>
                  </div>
                  <p className="mb-0">15% higher growth</p>
                </div>
              </div>
              <div className="col-12 mt-2  ">
                <div className="table-box shadow card ">
                  <h4 className="text-dark mb-4">Trip Details</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Vehicle image</th>
                          <th>Address</th>
                          <th>Date</th>
                          <th>Vehicle KM</th>
                          <th>Price</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="/assets/img/slides_3.jpg"
                              className="table-img"
                              alt="img"
                            />
                          </td>
                          <td>Chikhli to Mumbai</td>
                          <td>15/12/2022</td>
                          <td>216 KM</td>
                          <td>$ 260</td>
                          <td>
                            <span className="text-success fw-bold">New</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/assets/img/slides_1.jpg"
                              className="table-img"
                              alt="img"
                            />
                          </td>
                          <td>Surat to Valsad</td>
                          <td>10/12/2022</td>
                          <td>91 KM</td>
                          <td>$ 110</td>
                          <td>
                            <span className="text-warning fw-bold">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/assets/img/road.jpg"
                              className="table-img"
                              alt="img"
                            />
                          </td>
                          <td>Chikhli to Valsad</td>
                          <td>10/12/2022</td>
                          <td>28 KM</td>
                          <td>$ 50</td>
                          <td>
                            <span className="text-danger fw-bold">Cancel</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDashbord;
