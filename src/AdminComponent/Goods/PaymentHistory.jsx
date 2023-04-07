import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  './GoodsDetail.css'
import {  toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


function PaymentHistory() {
   
    const [userPaymetData, setUserPaymetData] = useState([])
    const [userPaymentLength, setUserPaymentLength] = useState()
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
      axios.get(`http://localhost:3001/paymentHistoryAll`).then((res)=>{
        setUserPaymetData(res.data.data)
        setUserPaymentLength(res.data.data.length)
      })
    }, [])
    
    const paymentDataDelete=(id)=>{
        axios.delete(`http://localhost:3001/paymentRemove/${id}`)
        .then((res)=>{
         console.log(res.data.message)
        //  alert(res.data.message)
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
          toast.success(err, {
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
    <div className='goods-body'>
      <div className="table-box paymentHistyBody border-dark mb-2 shadow card ">
      <h4 className="text-dark mb-4">Payment Detail</h4>
      {userPaymentLength === 0 ? (
        <>
          <div class="mx-auto" style={{ width: 600 }}>
            <h1>don't have any transection yet</h1>
          </div>
        </>
      ) : (
        <div className=" table-responsive">
          <table className="table table-bordered border-dark table-hover mb-0">
            <thead>
            <tr>
                <th>Index Id</th>
                <th>Transection Date</th>
                <th>User Name</th>
                <th>User Contect</th>
                <th>Payment Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            {userPaymetData.map((e, index) => {
              return (
                <>
                  <tbody>
                    <tr key={e._id}>
                      <td width={20}>{index + 1}</td>
                      <td width={20}>{e.date}</td>
                      <td>{e.client.name}</td>
                      <td width={20}>{e.client.phone}</td>
                      <td width={20}>{e.amount}</td>
                        <td width={20}>
                        <button className="btn btn-outline-danger rounded-circle" onClick={handleClickOpen}><i class="zmdi zmdi-delete zmdi-hc-1x"></i>
                        </button>
                        <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                              <DialogContent className="bg-light" id="alert-dialog-description">
                                 <h4>Are you sure Delete this Transection ?</h4>
                              </DialogContent>
                              <DialogActions className="bg-light">
                                <Button className="btn cancelbutton shadow text-white bg-dark" onClick={handleClose}>Cancel</Button>
                                <Button className="btn deletbutton shadow text-white bg-dark"  onClick={()=>paymentDataDelete(e._id)} > Delete </Button>
                              </DialogActions>
                          </Dialog>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      )}
      </div>
    </div>
    </>
  )
}

export default PaymentHistory