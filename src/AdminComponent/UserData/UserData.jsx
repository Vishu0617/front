import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./UserData.css";

function UserData() {
  const [fetchUser, setFetchUser] = useState([]);
  const [lenght, setLenght] = useState()
  const {id}=useParams() //admin id
  // console.log(id)
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/fetachAll`).then((res) => {
      setFetchUser(res.data.data);
      setLenght(res.data.data.length);
      // console.log(res.data.data.length)

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
 
  const [query, setQuery] = useState("");
  const keys = ["name"];
  const Users = fetchUser.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query))
  );

  return (
    <>
    <div className="user-detail h-100 pt-lg-5 pb-lg-5">
      <div className="table-box user-table shadow border-dark card">
          <div align="center ">
            <input className="userSearcrh rounded-1 ps-1" placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
          </div>
        <h4 className="text-dark mb-1">User Detail</h4>
        <div className="table-responsive ">
        {lenght === 0 ? (
          <>
            <div class="mx-auto" style={{ width: 300 }}>
              <h1>user note available</h1>
            </div>
          </>
        ) : (
          <table className="table  table-bordered border-dark table-hover mb-0">
            <thead>
              <tr>
                <th width={10}>Index Id</th>
                <th width={10}>User Profile </th>
                <th>User Name</th>
                <th width={25}>User Email</th>
                <th width={10}>User Contect</th>
                <th width={25}>Action</th>
              </tr>
            </thead>
            {Users.map((e, index) => {
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
                    <td >
                      <span className=" container mb-2 d-flex fw-bold" >
                        <button className="btn btn-outline-danger shadow rounded-circle" title="Delete This User" onClick={()=>{if(window.confirm("Are you sure delete this data"))userDelete(e._id)}}><i class="zmdi zmdi-delete zmdi-hc-1x"></i></button>
                        {/* <Link className="elink shadow rounded-circle" to={`/admin/AdminComponent/UserData/UserDataEdit/${e._id}`}><i class="zmdi zmdi-edit zmdi-hc-1x"></i></Link> */}
                        <button className="btn btn-outline-success ms-2 shadow rounded-circle " title="Update This User" onClick={()=>{if(window.confirm("Are you sure Update this data"))userUpdate(e._id)}}><i class="zmdi zmdi-edit zmdi-hc-1x"></i></button>
                        <Link className="btn btn-outline-secondary ms-2 shadow rounded-circle " title="Give Youre Feedback" to={`/admin/AdminComponent/UserData/UserPersnalFeedback/${id}/${e._id}`} ><i class="zmdi zmdi-comment-text zmdi-hc-1x"></i></Link>
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

export default UserData;
