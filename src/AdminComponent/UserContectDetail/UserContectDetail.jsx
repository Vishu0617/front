import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import './UserContectDetail.css'

function UserContectDetail() {
  const [fetchUser, setFetchUser] = useState([]);
  const [contectLength, setContectLength] = useState()
  // const {id}=useParams()
  //   const navigate=useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/messageFetch`)
      .then((res) => {
        setFetchUser(res.data.data);
        setContectLength(res.data.data.length)
        console.log(res.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const userDelete=(id)=>{
    axios.delete(`http://localhost:3001/messageDelete/${id}`).then((res)=>{
      console.log(res.data.message);
     alert(res.data.message);      
    }).catch((err)=>{
      console.log(err,"server error");
    })
  }

  return (
    <>
      <div className="contect-detail  h-100 pt-lg-5 pb-lg-5">
        <div className="table-box contect-table mb-2 border-dark shadow card ">
          <h4 className="text-dark mb-4">Clent Message Detail</h4>
          <div className="table-responsive">
          {contectLength === 0 ? (
            <>
              <div class="mx-auto " style={{ width: 600 }}>
                <h1>don'n have contect use</h1>
              </div>
            </>
          ) : (
            <table className="table table-bordered border-dark table-hover mb-0">
              <thead>
                <tr>
                  <th>Index Id</th>
                  <th>Client Name</th>
                  <th>Client Email</th>
                  <th>Client Contect</th>
                  <th>Client Address</th>
                  <th>Client Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              {fetchUser.map((e, index) => {
                return (
                  <tbody>
                    <tr key={e._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{e.cname}</td>
                      <td>{e.cemail}</td>
                      <td>{e.cphone}</td>
                      <td>{e.address}</td>
                      <td>{e.msg}</td>
                      <td>
                        <span className="ps-2 mb-2 d-flex fw-bold">
                          <button
                            className="me-1 shadow btn btn-outline-danger rounded-circle"
                            onClick={() => {
                              if (window.confirm("Are you sure delete this data"))
                                userDelete(e._id);
                            }}
                          >
                            <i class="zmdi zmdi-delete zmdi-hc-1x"></i>
                          </button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserContectDetail;
