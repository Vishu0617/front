import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Logout() {
  
  const navigate = useNavigate();
  // promise

  useEffect(() => {
    axios
      .get("http://localhost:3001/logout",{withCredentials:true})
      .then((res) => {
       navigate("/") ;
        console.log(res.data.message);
        // alert(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  });

}

export default Logout;
