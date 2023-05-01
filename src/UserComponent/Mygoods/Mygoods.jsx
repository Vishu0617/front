import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Mygoods.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import {  toast } from 'react-toastify';


function Mygoods() {
  const { id } = useParams();
  const navigate = useNavigate();

  let totalTrips;
  const [fetchGoods, setFetchGoods] = useState([]);
  const [length, setLength] = useState();
  // const [messageModel, setMessageModel] = useState()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/fetchgoods/${id}`).then((res) => {
      setFetchGoods(res.data.data);
      setLength(res.data.data.length);
      // console.log(res.data.data)
    });
  });

  const payment = (tid, pri) => {
    navigate(`/client/UserComponent/Payment/ClientPayment/${id}/${tid}/${pri}`);
  };

  return (
    <>
      <div className="client-dashbord">
        <div className="table-box container mb-2 p-2 shadow card">
          <h4 className="text-dark mb-4">Trip Detail</h4>
          {length === 0 ? (
            <>
              <div class="mx-auto" style={{ width: 350 }}>
                <h4>don't have any transaction yet</h4>
              </div>
            </>
          ) : (
          <div className=" table-responsive">
            <Link className="paymentHistory" to={`/client/UserComponent/Payment/PayemntHistry/${id}`}>
              Payment Histroy
            </Link>
              <table className="table table-bordered text-light border-dark mb-0">
                <thead className="bg-dark">
                  <tr>
                    <th>Index Id</th>
                    <th>Starting</th>
                    <th>Destination</th>
                    <th>Driver Contact</th>
                    <th>Sending Date</th>
                    <th>Km</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {fetchGoods.map((e, index) => {
                  totalTrips = index + 1;
                  return (
                    <>
                      <tbody>
                        <tr className="goods-main-tr" key={e._id}>
                          <td>{index + 1}</td>
                          <td>{e.spoint}</td>
                          <td>{e.dname}</td>
                          <td>{e.cphone}</td>
                          <td>{e.date}</td>
                          <td>{e.km}</td>
                          <td>{e.price}</td>
                          <td>{e.status}</td>
                          <td>{e.descr}</td>
                          <td>
                            {e.paymentStatus === "Paid"?(<>
                              <h6 className="text-success ">Payment Success !</h6>
                            </>):(<>
                             {/* <button className="btn paybutton" onClick={() => {if (window.confirm("Are you sure payement this transection"))payment(e._id, e.price);}}>Pay</button> */}
                             <Button className="bg-dark text-white btn" onClick={handleClickOpen}>Pay</Button>
                            </>)}
                            <Dialog className="dialog" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                              <DialogContent className="bg-light" id="alert-dialog-description">
                                 <h4>Are you sure Payment This Transaction</h4>
                              </DialogContent>
                              <DialogActions className="bg-light">
                                <Button className="btn payCancel shadow text-white bg-dark" onClick={handleClose}>Cancel</Button>
                                <Button className="btn paybutton shadow text-white bg-dark" onClick={() =>payment(e._id, e.price)} autoFocus>
                                 Pay Now
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
              <span>
                <b>
                  <u>Total Trips:- {totalTrips}</u>
                </b>
              </span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mygoods;
