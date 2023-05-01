import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../../Footer/Footer'
import './AdminViewDetail.css'
import {  toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function AdminViewDetail() {
    const [fetchData, setFetchData] = useState([])
    const [vehicaleLength, setVehicaleLength] = useState()

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
       axios.get("http://localhost:3001/fetchVehicacle").then((res)=>{
        setFetchData(res.data.data)
        setVehicaleLength(res.data.data.length)
        console.log(res.data.data.length)
       })
    })

    const vehicaleDelete=(vid)=>{
      axios.delete(`http://localhost:3001/vehicaleDelete/${vid}`)
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

    const [query, setQuery] = useState("");
    const keys = ["vnumber","name"];
    const vehicalView = fetchData.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );

  return (
    <>
    <div className='adminViewVehicale pt-lg-5 pb-lg-5'>
     <div className="table-box vehicale-table mb-2 shadow border-dark card ">
     <div align="center">
        <input className="userSearcrh border rounded-1" placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
       </div>
        <h4 className="text-dark mb-4">Vehicle Detail</h4>
        <div className="table-responsive">
        {vehicaleLength === 0 ? (
          <>
            <div class="mx-auto me-2" style={{ width: 800 }}>
              <h1>There is No Vehicle available</h1>
            </div>
          </>
        ) : (
          <table className="table table-bordered border-dark table-hover mb-0">
            <thead>
              <tr>
                <th>Index Id</th>
                <th>Name </th>
                <th>Contact</th>
                <th>Vehicle Name</th>
                <th>Vehicle Number</th>
                <th>Vehicle Capacity</th>
                <th>Vehicle Starting</th>
                <th>Vehicle Destination</th>
                <th>Action</th>
               
              </tr>
            </thead>
            {vehicalView.map((e,index)=>{
              return(
                <>
                  <tbody>
                  <tr key={e._id}>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.vname}</td>
                    <td>{e.vnumber}</td>
                    <td>{e.capacity}</td>
                    <td>{e.slocation}</td> 
                    <td>{e.dlocation}</td>
                    <td> <button className="btn btn-outline-danger action  rounded-circle" onClick={handleClickOpen} ><i class="zmdi zmdi-delete zmdi-hc-1x"></i></button>
                        <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                              <DialogContent className="bg-light" id="alert-dialog-description">
                                 <h4>Are you sure delete this Vehicle detail ?</h4>
                              </DialogContent>
                              <DialogActions className="bg-light">
                                <Button className="btn cancelbutton shadow text-white bg-dark" onClick={handleClose}>Cancel</Button>
                                <Button className="btn deletbutton shadow text-white bg-dark"  onClick={()=>vehicaleDelete(e._id)} > Delete </Button>
                              </DialogActions>
                          </Dialog>
                    </td>
                  </tr>
                </tbody>
                </>
              )
            })}
        </table>
         )}
        </div>
      </div>
    </div>
    <Footer />

    </>
  )
}

export default AdminViewDetail