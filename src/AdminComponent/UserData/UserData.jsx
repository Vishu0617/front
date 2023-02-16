import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserData.css";

function UserData() {
  const [fetchUser, setFetchUser] = useState([]);
  // const {id}=useParams()
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/fetachAll`).then((res) => {
      setFetchUser(res.data.data);
    }).catch((error)=>{
      console.log(error);
    });
  });

  const userDelete=(id)=>{
    axios.delete(`http://localhost:3001/deleteClient/${id}`).then((res)=>{
      console.log(res.data.message);
     alert(res.data.message);
      
    }).catch((err)=>{
      console.log(err,"server error");
    })
  }

  const userUpdate=(id)=>{
   navigate(`/admin/AdminComponent/UserData/UserDataEdit/${id}`)
  }
  return (
    <>
      <div className="table-box container mb-2 shadow card ">
        <h4 className="text-dark mb-4">User Detail</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-hover mb-0">
            <thead>
              <tr>
                <th>Index Id</th>
                <th>User Profile </th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Contect</th>
                <th>Action</th>
              </tr>
            </thead>
            {fetchUser.map((e, index) => {
              return (
                <tbody>
                  <tr key={e._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:3001/${e.file}`}
                        height={50}
                        width={50}
                        alt="profile"
                      />
                    </td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>
                      <span className="ps-2  mb-2 d-flex fw-bold">
                        <button className="me-1 shadow btn btn-outline-success rounded-circle" onClick={()=>{if(window.confirm("Are you sure delete this data"))userDelete(e._id)}}><i class="zmdi zmdi-delete zmdi-hc-1x"></i></button>
                    
                        {/* <Link className="elink shadow rounded-circle" to={`/admin/AdminComponent/UserData/UserDataEdit/${e._id}`}><i class="zmdi zmdi-edit zmdi-hc-1x"></i></Link> */}
                        <button className="me-1 btn btn-outline-danger shadow rounded-circle" onClick={()=>{if(window.confirm("Are you sure Update this data"))userUpdate(e._id)}}><i class="zmdi zmdi-edit zmdi-hc-1x"></i></button>
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

export default UserData;
