import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer';

function PayemntHistry() {
  
  const [paymentHistry, setPaymentHistry] = useState([])
  const [length, setLength] = useState();
   const {id}=useParams() 

  useEffect(() => {
    axios.get(`http://localhost:3001/paymentHistory/${id}`).then((res)=>{
      setPaymentHistry(res.data.data)
      setLength(res.data.data.length);

    })
  }, [id])
  

  return (
    <>
    <div className="client-dashbord">
     <div className="table-box py-histry container mb-2 shadow card ">
    <h4 className="text-dark mb-4">Payment Detail</h4>
    {length === 0 ? (
      <>
        <div class="mx-auto" style={{ width: 600 }}>
          <h1>don't have any transection yet</h1>
        </div>
      </>
    ) : (
      <div className=" table-responsive">
        <table className="table table-bordered text-light border-dark table-hover mb-0">
          <thead className="bg-dark border-light">
          <tr>
              <th>Index Id</th>
              <th>Cart Name</th>
              <th>Cart Number</th>
              <th>E-mail</th>
              <th>Payment Date</th>
              <th>Payment Amount</th>
            </tr>
          </thead>
          {paymentHistry.map((e, index) => {
            return (
              <>
                <tbody>
                  <tr className='vehicale-tr' key={e._id}>
                  <td>{index + 1}</td>
                  <td>{e.cname}</td>
                  <td>{e.cnumber}</td>
                  <td>{e.email}</td>
                  <td>{e.date}</td>
                  <td>{e.amount}</td>
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
    <Footer />
    </>
  )
}

export default PayemntHistry