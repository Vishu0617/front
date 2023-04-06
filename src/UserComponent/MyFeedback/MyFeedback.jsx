import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MyFeedback() {
      // const {id}=useParams() //admin id
      const {id}=useParams() //user id
      // const navigate=useNavigate();
              // console.log("Admin id:-"+id) 
              // console.log("User id:-"+uid) 
     const [fetchFeedback, setFetchFeedback] = useState([])
      useEffect(() => {
        axios.get(`http://localhost:3001/getPersnalFeedback/${id}`).then((res)=>{
          setFetchFeedback(res.data.data);
        })
      }, [id])
  return (
    <>
    <div className=' container-fluid'>
        <div className=' mb-3'>
            {fetchFeedback.map((e)=>{
                return(<>
                
                <div className='  rounded-1'>
                    <p>{e.feedback}<p align="right">{e.date}, {e.time}</p></p>              
                </div>
                </>)
            })}
        </div>
      </div>
    </>
  )
}

export default MyFeedback