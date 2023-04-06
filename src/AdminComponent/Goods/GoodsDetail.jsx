import axios from "axios";
import React, { useEffect, useState } from "react";
import './GoodsDetail.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";

function GoodsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fetchGoods, setFetchGoods] = useState([]);
  const [goodsLength, setGoodsLength] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/fetchgoodsAll").then((res) => {
      setFetchGoods(res.data.data);
      setGoodsLength(res.data.data.length);
      console.log(res.data.data.length);
    });
  }, [id]);

  const userUpdate = (pid) => {
    navigate(`/admin/AdminComponent/Goods/GoodsStatus/${id}/${pid}`);
  };

  const goodsDelete=(gid)=>{

    axios.delete(`http://localhost:3001/goodsDelete/${gid}`)
         .then((res)=>{
          console.log(res.data.message)
          alert(res.data.message)
         }).catch((err)=>{
           console.log(err,"server error");
         })
  }

  const [query, setQuery] = useState("");
  const keys = ["spoint","date"];
  const goodsSearch = fetchGoods.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query))
  );

  return (
    <>
    <div className="goods-body h-100 pt-lg-5 pb-lg-5">
        <div className="goods-table table-box mb-2 border-dark shadow card">
            <Link className="payment-histy-link" to={`/admin/AdminComponent/Goods/PaymentHistory/${id}`}>Payment Histriy</Link>
          <div align="center">
            <input
              className="userSearcrh rounded-1"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </div>
          <h4 className="text-dark mb-1">User Transection Detail</h4>
          <div className="table-responsive">
            {goodsLength === 0 ? (
              <>
                <div class="mx-auto" style={{ width: 600 }}>
                  <h1>There is no transection yet</h1>
                </div>
              </>
            ) : (
              <table className="table table-bordered border-dark table-hover mb-0">
                <thead>
                  <tr>
                    <th>Index Id</th>
                    <th>Starting</th>
                    <th>Destination</th>
                    <th>Drivar Contect</th>
                    <th>Sending Date</th>
                    <th>Km</th>
                    <th>Price</th>
                    <th>Owner Name</th>
                    <th>Owner Contect</th>
                    <th>Payment Status</th>
                    <th>Goods Status</th>
                    <th>Descri</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {goodsSearch.map((e, index) => {
                  return (
                    <tbody>
                      <tr key={e._id}>
                        <td>{index + 1}</td>
                        <td>{e.spoint}</td>
                        <td>{e.dname}</td>
                        <td>{e.cphone}</td>
                        <td>{e.date}</td>
                        <td>{e.km}</td>
                        <td>{e.price}</td>
                        <td>{e.client.name}</td>
                        <td>{e.client.phone}</td>
                        <td> {e.paymentStatus === "Paid"?(<><h6 className="text-success">Payment Success !</h6></>):(<><h6 className="text-text-danger">Payment Pending!</h6></>)} </td>
                        <td>{e.status}</td>
                        <td>{e.descr}</td>
                        <td>
                        <div className="d-flex">
                          <button
                            className="btn btn-outline-success action me-2 rounded"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onClick={() => {
                          if (window.confirm("Are you sure Update this data"))userUpdate(e._id);}}><i class="zmdi zmdi-edit zmdi-hc-1x"></i>
                          </button>
                          
                          <button
                            className="btn btn-outline-danger action me-2 rounded"
                            onClick={() => {
                          if (window.confirm("Are you sure delete this data"))goodsDelete(e._id);}}><i class="zmdi zmdi-delete zmdi-hc-1x"></i>
                          </button>
                          </div>
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

export default GoodsDetail;
