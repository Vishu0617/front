import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

function UserContectDetail() {
  const [fetchUser, setFetchUser] = useState([]);
  // const {id}=useParams()
  //   const navigate=useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/messageFetch`)
      .then((res) => {
        setFetchUser(res.data.data);
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
      <div className="table-box container mb-2 shadow card ">
        <h4 className="text-dark mb-4">Clent Message Detail</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-hover mb-0">
            <thead>
              <tr>
                <th>Index Id</th>
                <th>Client Name</th>
                <th>Client Email</th>
                <th>Client Contect</th>
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
                    <td>{e.msg}</td>
                    <td>
                      <span className="ps-2 mb-2 d-flex fw-bold">
                        <button
                          className="me-1 shadow btn btn-outline-success rounded-circle"
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
        </div>
      </div>
    </>
  );
}

export default UserContectDetail;
