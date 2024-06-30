import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import Logout from './Logout.jsx';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MarketingDashboard() {
    const navigate=useNavigate();
    useEffect(()=>{
        const authData = JSON.parse(localStorage.getItem('auth'));
        const { user, token } = authData;
        if(!token){
        toast.error("access denied");
          navigate("/");

        }
        else if(user.role!=="Marketing"){
        toast.error("access denied");
        navigate("/");
        }else{
            toast.success("welcome back");
        }
        
    },[]);
  return (<>
   <div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Marketing Dashboard</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <Logout/>
  </div>
</div>
    </>
  )
}

export default MarketingDashboard