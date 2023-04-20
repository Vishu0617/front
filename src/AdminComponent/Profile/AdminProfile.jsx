import React, { useEffect, useState } from 'react'
import './AdminProfile.css'
// import profile from '/Transport Triangle/front/src/img/profile.png'
import { Link, useParams } from 'react-router-dom';
import AdminProfileUpdate from './AdminProfileUpdate';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

function AdminProfile() {

 const {id}=useParams();
  console.log(id)
  const [fetchData, setFetchData] = useState([]);
  // const navigate = useNavigate()

  //  change profile 
  const [isSetOpen, setIsSetOpen] = useState(false)

  const handleClickOpen1=()=>{
    setIsSetOpen(true)
  }

  const handleClose1=()=>{
    setIsSetOpen(false)
  }

  //  change profile end


   useEffect(() => {
    axios.get(`http://localhost:3001/fetchAdmin/${id}`).then((res) => {
      setFetchData(res.data.data);
    });
   }, [id])

  return (
    <>
    <div className="rounded w-100 div-main mb-1 p-2 container">
      <div className="profile-main">
        <div className="position-relative">
          <img className="vprofile rounded-circle mb-2" src={`http://localhost:3001/${fetchData.file}`} height={100} width={100} alt="profile" />
        </div>
         <Link className='text-decoration-none'  onClick={handleClickOpen1}>Update Photo</Link>
         <Dialog className="dialog" open={isSetOpen} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogContent className="bg-light" id="alert-dialog-description">
              <AdminProfileUpdate />
            </DialogContent>
            <DialogActions className="bg-light">
              <Button className="btn payCancel shadow text-white bg-dark" onClick={handleClose1}>Cancel</Button>
            </DialogActions>
          </Dialog>
      </div>
    </div>

    </>
  )
}

export default AdminProfile