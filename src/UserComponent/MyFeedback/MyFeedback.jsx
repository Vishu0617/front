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
     const [length, setLength] = useState()
      useEffect(() => {
        axios.get(`http://localhost:3001/getPersnalFeedback/${id}`).then((res)=>{
          setFetchFeedback(res.data.data);
          setLength(res.data.data.length)
        })
      }, [id])
  return (
    <>
    <div className=' container-fluid'>
    {length===0 ?(
       <>
       <div class="mx-auto" style={{ width: 400 }}>
         <h4 className="">There is no rewiews yet</h4>
       </div>
     </>
     ):(
     <div className=' mb-3'>
      {fetchFeedback.map((e)=>{
          return(<>
          <div className='  rounded-1'>
              <p>{e.feedback}<p align="right">{e.date}, {e.time}</p></p>              
          </div>
          </>)
         })}
    </div>
  )}   
</div>
    </>
  )
}

export default MyFeedback