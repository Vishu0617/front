import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../Footer/Footer'
import './UserFeedback.css'
import {  toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function UserFeedback() {
   
    const [fetchFeedback, setFetchFeedback] = useState([])
    const [feedLenght, setFeedLenght] = useState()
    
    const [open, setOpen] = useState(false);
    
    // delete
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    //delete end

    useEffect(() => {
      axios.get(`http://localhost:3001/fetchFeedback`).then((res)=>{
        setFetchFeedback(res.data.data)
        setFeedLenght(res.data.data.length)
        console.log(res.data.data.length)
      })
    }, [])
    
    const userDelete=(id)=>{
        axios.delete(`http://localhost:3001/deleteFeedback/${id}`).then((res)=>{
          console.log(res.data.message);
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
          console.log(err,"server error");
          toast.error(err, {
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
      }

  return (
    <>
    <div className='feedback-body pt-lg-5 pb-lg-5'>
      <div className="table-box feedback-table mb-2 shadow border-dark card ">
        <h4 className="text-dark mb-4">User Feedback Detail</h4>
        {feedLenght === 0 ? (
          <>
            <div class="mx-auto me-3" style={{ width: 900 }}>
              <h1>Feedback note write yet</h1>
            </div>
          </>
        ) : (
        <div className="table-responsive">
          <table className="table table-bordered border-dark table-hover mb-0">
            <thead>
              <tr>
                <th>Index Id</th>
                <th>User Name</th>
                <th>User Contact</th>
                <th>User E-mail</th>
                <th>User Message</th>
                <th>Action</th>
              </tr>
            </thead>
            
            {fetchFeedback.map((e, index) => {
              return (
                <tbody>
                  <tr key={e._id}>
                    <td width={20}>{index + 1}</td>
                    <td width={40}>{e.client.name}</td>
                    <td width={40}>{e.fbphone}</td>
                    <td width={40}>{e.fbemail}</td>
                    <td >{e.fbmessage}</td>
                    <td width={10}>
                      <span className="ps-2  mb-2 d-flex fw-bold">
                        <button className="me-1 shadow btn btn-outline-danger  rounded-circle" onClick={handleClickOpen}><i class="zmdi zmdi-delete zmdi-hc-1x"></i></button>
                        <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                              <DialogContent className="bg-light" id="alert-dialog-description">
                                 <h4>Are you sure delete this data ?</h4>
                              </DialogContent>
                              <DialogActions className="bg-light">
                                <Button className="btn cancelbutton shadow text-white bg-dark" onClick={handleClose}>Cancel</Button>
                                <Button className="btn deletbutton shadow text-white bg-dark"  onClick={()=>userDelete(e._id)} > Delete </Button>
                              </DialogActions>
                        </Dialog>
                      </span>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
       )}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default UserFeedback