import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import './UserPersnalFeedback.css'

function UserPersnalFeedback() {
    // const {id}=useParams() //admin id
    const {uid}=useParams() //user id
    // const navigate=useNavigate();
            // console.log("Admin id:-"+id) 
            // console.log("User id:-"+uid) 
   const [feedback, setFeedback] = useState()
   const [fetchUser, setFetchUser] = useState([])
   const [fetchFeedback, setFetchFeedback] = useState([])
   const [lenght, setLenght] = useState()

    useEffect(() => {
      axios.get(`http://localhost:3001/fetchData/${uid}`).then((res)=>{
        setFetchUser(res.data.data);
      })
      axios.get(`http://localhost:3001/getPersnalFeedback/${uid}`).then((res)=>{
        setFetchFeedback(res.data.data);
        setLenght(res.data.data.length)

      })
    }, [uid])

    const inputfb=(e)=>{
        setFeedback({...feedback,[e.target.name]:e.target.value})
        // console.log(feedback)
    }
    
    const submitFb=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3001/persnalfeedback/${uid}`,feedback).then((res)=>{
            console.log(res.data.message)
            setFeedback({feedback:""});
            alert(res.data.message)
            // navigate(`/admin/AdminComponent/UserData/UserData/${id}`);
        }).catch((error)=>{
            console.log(error.response.data.error)
        })
    }

  return (
    <>
    <div className='feed-body'>
      <div className='persnal-feed-body rounded'>
      {lenght === 0 ? (
          <>
            <div class="mx-auto" style={{ width: 500 }}>
              <h1>There is no review</h1>
            </div>
          </>
        ) : (
        <div className='user-data mb-3'>
            <h2>{fetchUser.name}</h2>
            <h3>Reviews</h3>
            <hr/>
            {fetchFeedback.map((e)=>{
                return(<>
                
                <div className='fmessage shadow-lg rounded-1'>
                    <p>{e.feedback}<p align="right">{e.date}, {e.time}</p></p>              
                </div>
                </>)
            })}
        </div>
        )}
      </div>
      <div className='feed-main container-fluid '  >
      <form onSubmit={submitFb}  className="col-md-6 container feed-main rounded d-flex">
            <input
              className="shadow me-2  border-danger rounded-1 feed-input"
              type="text"
              placeholder="Enter youre Sugestion..."
              name="feedback"
              onChange={inputfb}
              required
            />

            <button className='btn btn-primary border-danger shadow' >Send</button>
      </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default UserPersnalFeedback