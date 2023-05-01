import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import './UserContectDetail.css'
import {  toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function UserContectDetail() {
  const [fetchUser, setFetchUser] = useState([]);
  const [contectLength, setContectLength] = useState()
  const [open, setOpen] = useState(false);

  // const {id}=useParams()
  //   const navigate=useNavigate();

   // delete
   const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //delete end

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
    //  alert(res.data.message);    
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
      <div className="contect-detail pt-lg-5 pb-lg-5">
        <div className="table-box contect-table mb-2 border-dark shadow card ">
          <h4 className="text-dark mb-4">Clent Message Detail</h4>
          <div className="table-responsive">
          {contectLength === 0 ? (
            <>
              <div class="mx-auto " style={{ width: 600 }}>
                <h1>don'n have contact use</h1>
              </div>
            </>
          ) : (
            <table className="table table-bordered border-dark table-hover mb-0">
              <thead>
                <tr>
                  <th>Index Id</th>
                  <th>Client Name</th>
                  <th>Client Email</th>
                  <th>Client Contact</th>
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
                          <button className="me-1 shadow btn btn-outline-danger rounded-circle" onClick={handleClickOpen}><i class="zmdi zmdi-delete zmdi-hc-1x"></i>
                          </button>
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
          )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserContectDetail;
