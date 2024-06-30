import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
function Logout() {
    const navigate = useNavigate();
     
    const logout=async() => {
        localStorage.removeItem("auth");
      await  axios.get("http://localhost:8080/api/v1/logout");
          toast.success("loggged out");
            navigate("/");
    
    };
  return (
   <><>
   <button onClick={logout}>Log out</button>
   </>
</>
  )

}

export default Logout