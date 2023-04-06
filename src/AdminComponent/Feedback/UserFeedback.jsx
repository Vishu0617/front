import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../Footer/Footer'
import './UserFeedback.css'

function UserFeedback() {
   
    const [fetchFeedback, setFetchFeedback] = useState([])
    const [feedLenght, setFeedLenght] = useState()
     
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
         alert(res.data.message);
          
        }).catch((err)=>{
          console.log(err,"server error");
        })
      }

  return (
    <>
    <div className='feedback-body h-100 pt-lg-5 pb-lg-5'>
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
                <th>User Contect</th>
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
                        <button className="me-1 shadow btn btn-outline-danger  rounded-circle" onClick={()=>{if(window.confirm("Are you sure delete this data"))userDelete(e._id)}}><i class="zmdi zmdi-delete zmdi-hc-1x"></i></button>
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