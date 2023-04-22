import axios from "axios";
import { useParams } from "react-router-dom";
// import Footer from "../../Footer/Footer";
import "./UserPersnalFeedback.css";
// import {  toast } from 'react-toastify';
import { useMutation, useQuery ,useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function UserPersnalFeedback() {
  // const {id}=useParams() //admin id
  const { uid } = useParams(); //user id
  // const navigate=useNavigate();
  // console.log("Admin id:-"+id)
  // console.log("User id:-"+uid)
  // const {data,isInitialLoading,error}=useQuery(['userFeedback'],()=>axios.get(`http://localhost:3001/getPersnalFeedback/${uid}`)).data
  const [fetchUser, setFetchUser] = useState([]);
  const [feedback, setFeedback] = useState();
  const queryClient=useQueryClient()


  useEffect(() => {
    //fetch user name 
    axios.get(`http://localhost:3001/fetchData/${uid}`).then((res) => {
      setFetchUser(res.data.data);
    });
  }, [uid]);

  const inputfb=(e)=>{
    setFeedback({...feedback,[e.target.name]:e.target.value})
    // console.log(feedback)
  }

  //create mutation
  const callFeedbackApi=async (feedback)=>{
    return (await axios.post(`http://localhost:3001/persnalfeedback/${uid}`,feedback)).data
  }
  
  //mutation function
  const submitFbMutation=useMutation(()=>callFeedbackApi(feedback),{
  onSuccess:()=>{
    console.log("Success");
    queryClient.invalidateQueries(["userData"])
  },
  onError:(error)=>{
    console.log(error)
  }
})

  //maping feedback
  const { data, isInitialLoading, error } = useQuery(["userData"], () =>
    fetch(`http://localhost:3001/getPersnalFeedback/${uid}`).then((res) =>
      res.json()
    )
  );

  if (error) {
    return <div>Error</div>;
  } else if (isInitialLoading) {
    return <div>Loding...</div>;
  } else {
    console.log(data);

    return (
      <>
        <div className="feed-body">
          <div className="persnal-feed-body p-1 rounded">
            <h3>Reviews</h3>
            <div className="user-data mb-3">
              <h2>{fetchUser.name}</h2>
              <hr />
              {data &&
                data.data &&
                data.data.map((userFeedback) => (
                  <>
                    <div className="fmessage rounded-1">
                      <hr />
                      <p>
                        {userFeedback.feedback}
                        <p align="right">
                          {userFeedback.date}, {userFeedback.time}
                        </p>
                      </p>
                      <hr />
                    </div>
                  </>
                ))}
            </div>
            <div className='feed-main container-fluid '  >
      <form  className="col-md-6 container feed-main rounded d-flex">
            <input
              className="shadow me-2 bg-white border-danger rounded-1 feed-input"
              type="text"
              placeholder="Enter youre Sugestion..."
              name="feedback"
              onChange={inputfb}
              // required
            />

            <button onClick={(e)=>submitFbMutation.mutate()} className='btn btn-primary border-danger shadow' >Send</button>
      </form>
      </div>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default UserPersnalFeedback;
