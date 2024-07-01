import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import Logout from './Logout.jsx';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function FinanceDashboard() {
    const navigate=useNavigate();
    useEffect(()=>{
        const authData = JSON.parse(localStorage.getItem('auth'));
        if(!authData){
          toast.error("Please Login");
          navigate("/");
        }else{
        const { user, token } = authData;
      

        if(!token){
        toast.error("access denied");
          navigate("/");

        }
        else if(user.role!=="Finance"){
        toast.error("access denied");
        navigate("/");
        }else{
            toast.success("welcome");
        }
        
    }},[]);
  return (<>
   <div className="card" style={{width: "18rem", margin:"auto", marginTop:"5%"}}>
  
  <div className="card-body">
    <h5 className="card-title">Finance Dashboard</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <Logout/>
  </div>
</div>
    </>
  )
}


export default FinanceDashboard