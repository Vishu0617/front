import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  './GoodsDetail.css'

function PaymentHistory() {
   
    const [userPaymetData, setUserPaymetData] = useState([])
    const [userPaymentLength, setUserPaymentLength] = useState()

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
         alert(res.data.message)
        }).catch((err)=>{
          console.log(err,"server error");
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
                <th>USer Contect</th>
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
                        <button className="btn btn-outline-danger rounded" onClick={() => {
                        if (window.confirm("Are you sure remove this data"))paymentDataDelete(e._id);}}><i class="zmdi zmdi-delete zmdi-hc-1x"></i>
                        </button>
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