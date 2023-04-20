import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ClientFileEdit from '../EditProfile/ClientFileEdit';
import './ClientProfile.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

function ClientProfile() {
   
    const [fetchData, setFetchData] = useState([])
    const {id}=useParams();
    // console.log(id)

    //logout function's
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useEffect(()=>{
        axios.get(`http://localhost:3001/fetchData/${id}`).then((res)=>{
        //    console.log(res.data.data);
           setFetchData(res.data.data)
        })
    })

  return (
    <>
     <div className="rounded mb-0 viwProfile card p-5 container">
        <div className="row g-3 div-mid">
          <center><img className="profile" src={`http://localhost:3001/${fetchData.file}`} alt="profile" /><br/>
           <Link className='edit-link' onClick={handleClickOpen} to="#">Update Profile</Link>
           <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogContent className="bg-light" id="alert-dialog-description">
              <ClientFileEdit />
            </DialogContent>
            <DialogActions className="bg-light">
              <Button className="btn payCancel shadow text-white bg-dark" onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
          </center>
             <span className='ps-2'>{fetchData.name}</span><hr/>
          <div className="col-md-12   rounded  d-flex">
            <label className="form-label">
              <i className="zmdi zmdi-email"></i>
            </label>
            <span className='ps-2'>{fetchData.email}</span>
          </div>
          <div className="col-md-12  rounded  d-flex">
            <label className="form-label">
              <i className="zmdi zmdi-phone"></i>
            </label>
            <span className='ps-2'>{fetchData.phone}</span>
          </div>
          
        </div><hr/>
        <div align="center" className='d-flex social'>
            <a className='s-link' href="https://www.facebook.com/profile.php?id=100044580701985" target='_blank' rel="noreferrer"><center><i class="zmdi zmdi-facebook"></i></center></a>
            <a className='s-link' href="https://twitter.com/vishalP1188150" target='_blank' rel="noreferrer"><center><i class="zmdi zmdi-twitter"></i></center></a>
            <a className='s-link' href="https://www.youtube.com/@vrpatel405" target='_blank' rel="noreferrer"><center><i class="zmdi zmdi-youtube"></i></center></a>
            <a className='s-link' href="https://www.instagram.com/ptl_vishal_/" target='_blank' rel="noreferrer"><center><i class="zmdi zmdi-instagram"></i></center></a>
        </div>
          {/* <center><Link className='edit-data' to={`/client/UserComponent/EditProfile/EditProfile/${fetchData._id}`}>Edit Data</Link></center> */}
      </div>
      
        
     
    </>
  )
}

export default ClientProfile