import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import {  toast } from 'react-toastify';

function AdminProfileUpdate() {
  const [userFile, setUserFile] = useState();
  const [preview, setPreview] = useState();
  // const navigate=useNavigate();
  const {id}=useParams();
  // console.log(id)


  const userFileInput = (e) => {
    const file = e.target.files[0];
    setUserFile(file);
      let fileUrl = window.URL.createObjectURL(file);
      console.log(file.file);
      setPreview(fileUrl);
  };

  const uploadFile = (e) => {
      e.preventDefault();
    console.log(userFile.name);
    const fromData=new FormData();
    fromData.append("file",userFile);

    axios.put(`http://localhost:3001/changeProfile/${id}`,fromData)
         .then((res)=>{
          console.log(res.data.message);
          // alert(res.data.message)
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         }).catch((err)=>{
          console.log(err.response.data.error);
          // alert(err.response.data.error)
          toast.error(err.response.data.error, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         })
  
    };
  return (
    <>
    <div className="rounded mb-4 p-5 mt-4 container">
        <h6>Select New Profile</h6>
        <hr />
        <form className="row g-3 div-mid" onSubmit={uploadFile} encType='mul'>
        <div className="col-md-6 form-control input-main  rounded  d-flex">
            <label className="form-label mt-2"></label>
            <input
              className="inputsignup"
              type="file"
              name="file"
              onChange={userFileInput}
              required
            />
          </div>
          <div className=''>
                <img className='rounded-circle' height={100} width={100} src={preview} alt=""  />
          </div>

          <center className="submit-divr ">
            <Button className="btn bg-dark text-white" type="Submit">
             Upload Profile
            </Button>
          </center>
        </form>
      </div>
    </>
  )
}

export default AdminProfileUpdate