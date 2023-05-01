import axios from 'axios';
import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer';
import './Feedback.css'
import {  toast } from 'react-toastify';


function Feedback() {
  
  const {id}=useParams();
  
  // const navigate=useNavigate()

  const [feedback, setFeedback] = useState()

  const inputData=(e)=>{
    setFeedback({...feedback,[e.target.name]:e.target.value})
  }

  const feedbackSubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:3001/feedback/${id}`,feedback).then((res)=>{
      console.log(res.data.message)
      // alert(res.data.message)
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
      setFeedback({fbphone:"",fbemail:"",fbmessage:""})

      // navigate(`/client/UserComponent/Dashbord/ClientDashbord/${id}`)
    }).catch((error)=>{
      console.log(error.response.data.error);
      // alert(error.response.data.error)
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
  }

  return (
    <>
      <div className="client-dashbord">
        <form className="row g-3 fid-main border-dark shadow rounded" onSubmit={feedbackSubmit} >
            <div className="col-md-6">
              <label className="form-label fw-bold  text-dark">Enter Phone Number  :-</label>
              <input type="text" className="form-control fbinput border-dark" name='fbphone' onChange={inputData} maxLength={10} placeholder='9157157898'  />
            </div>
            <div className="col-md-6">
              <label  className="form-label fw-bold  text-dark">Enter E-mail :-</label>
              <input type="text" className="form-control fbinput border-dark" name='fbemail' onChange={inputData} placeholder="alex@gmail.com"  />
            </div>
            <div className="col-md-6">
              <label  className="form-label fw-bold text-dark">Suggestion:-</label>
              <textarea className="form-control fbinput border-dark"  rows="3" name='fbmessage' placeholder='Type your feedback here...............' onChange={inputData}></textarea>
            </div>  

           
              <button type="submit" className="btn book-btn border-dark">Submit</button>
           

        </form>  
      </div>
      <Footer />
    </>
  )
}

export default Feedback