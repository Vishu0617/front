import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Vehicale.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {  toast } from 'react-toastify';


function VehicaleDetail() {
  const [fetchData, setFetchData] = useState([]);
  const [vehicaleLength, setVehicaleLength] = useState();
  const [vehicaleBook, setVehicaleBook] = useState();
  const id = useParams(); //user id

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/fetchVehicacle").then((res) => {
      // console.log(res.data.data)
      setVehicaleLength(res.data.data.length);
      setFetchData(res.data.data);
    });
  });

  const inputData = (e) => {
    setVehicaleBook(e.target.value);
    console.log(vehicaleBook);
  };

  const book = (vid, demail) => {
    axios
      .post(`http://localhost:3001/vehicaleBook`, {
        vid: vid,
        id: id.id,
        demail,
        address: vehicaleBook,
      })
      .then((res) => {
        console.log(res.data.message);
        
        toast.info(res.data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

      }).catch((error)=>{
         console.log(error.response.data.error)

         toast.error(error.response.data.error, {
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
      <div className="client-dashbord">
        <div className="table-box myvehical-color mb-2 shadow card ">
          <h4 className="mb-4">Vehicale Detail</h4>
          <div className="table-responsive">
            {vehicaleLength === 0 ? (
              <>
                <div class="mx-auto text-white me-2" style={{ width: 800 }}>
                  <h1 className="">There is No Vehicale available</h1>
                </div>
              </>
            ) : (
              <table className="table table-bordered table-bordered  border-dark mb-0">
                <thead className="bg-dark border-dark">
                  <tr>
                    <th width={10}>Id</th>
                    <th width={50}>Name </th>
                    <th width={10}>Contect</th>
                    <th>E-mail</th>
                    <th>Vehicale Name</th>
                    <th>Vehicale Number</th>
                    <th>Vehicale Capacity</th>
                    <th>Vehicale Starting</th>
                    <th>Vehicale Destination</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {fetchData.map((e, index) => {
                  return (
                    <>
                      <tbody>
                        <tr className="vehicale-tr" key={e._id}>
                          <td>{index + 1}</td>
                          <td>{e.name}</td>
                          <td>{e.phone}</td>
                          <td>{e.demail}</td>
                          <td>{e.vname}</td>
                          <td>{e.vnumber}</td>
                          <td>{e.capacity}</td>
                          <td>{e.slocation}</td>
                          <td>{e.dlocation}</td>
                          <td>
                            <Button
                              className="btn bg-dark text-white"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal4"
                            >
                              Book
                            </Button>
                          </td>
                        </tr>
                        <div
                          class="modal fade"
                          id="exampleModal4"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-body">
                                <textarea
                                  className="form-control"
                                  onChange={inputData}
                                  name="address"
                                  placeholder="Enter youre Current Address"
                                  required
                                ></textarea>
                              </div>
                              <div class="modal-footer">
                                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                {/* <Button type="button" class="btn bg-dark text-white book-btn"  onClick={() => {if (window.confirm("Are you sure Book this Vehicale"))book(e._id,e.demail,);}}>Submit</Button>*/}
                                <Button type="button" onClick={handleClickOpen} class="btn bg-dark text-white book-btn">Submit</Button>
                                  <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                                    <DialogContent className="bg-light" id="alert-dialog-description" >
                                      <h4>Are you sure Book this Vehicale</h4>
                                    </DialogContent>
                                    <DialogActions className="bg-light">
                                      <Button className="btn payCancel shadow text-white bg-dark" onClick={handleClose}> Cancel</Button>
                                      <Button type="button" class="btn bg-dark text-white book-btn" onClick={() => book(e._id, e.demail)}> Submit</Button>
                                    </DialogActions>
                                  </Dialog>
                              </div>
                            </div>
                          </div>
                        </div>
                      </tbody>
                    </>
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

export default VehicaleDetail;
