import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './ClientFileEdit.css'

function ClientFileEdit() {
  const [userFile, setUserFile] = useState();
  const [preview, setPreview] = useState();

  const {id}=useParams();


  const userFileInput = (e) => {
    const file = e.target.files[0];
    setUserFile(file);
      let fileUrl = window.URL.createObjectURL(file);
      console.log(file);
      setPreview(fileUrl);
  };

  const uploadFile = (e) => {
      e.preventDefault();
    // console.log(userFile);
    const fromData=new FormData();
    fromData.append("file",userFile);

    axios.post(`http://localhost:3001/updateFile/${id}`,userFile)
         .then((res)=>{
          console.log(res.data);
         }).catch((err)=>{
          console.log(err);
         })
  
    };

  return (
    <>
     
     <div className="shadow rounded signup-main mb-4 p-5 mt-4 container">
        <h1 align="center">Select New Profile</h1>
        <hr />
        <form className="row g-3 div-mid" onSubmit={uploadFile}>
        <div className="col-md-6 form-control input-main shadow rounded  d-flex">
            <label className="form-label mt-2"></label>
            <input
              className="inputsignup"
              type="file"
              name="file"
              onChange={userFileInput}
              // required
            />
          </div>
                <img className='upload' src={preview} alt=""  />

          <center className="submit-divr ">
            <button className="submit btn btn-outline-success" type="Submit">
             Upload Profile
            </button>
          </center>
        </form>
      </div>
    </>
  )
}

export default ClientFileEdit