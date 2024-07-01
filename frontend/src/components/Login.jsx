import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {Link, useNavigate} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Login() {
    const navigate=useNavigate();
    const [formdata, setFormData]=useState({email:"",password:""});
  const handleOnChange=(event)=>{
    setFormData((currData)=>{
  return {
    ...currData,
    [event.target.name]:event.target.value
  }
    }
        
        
    )
}


const handleOnSubmit=async(event)=>{
    event.preventDefault();
    if(formdata.email.length>0&& formdata.password.length>0){
    const formData={
        email:formdata.email,
        password:formdata.password,
        
    };

    try{
        const response=await axios.post(
            "http://localhost:8080/api/v1/login",
            formData
        );

        localStorage.setItem('auth',JSON.stringify(response.data));
        setFormData({email:"",password:""});
        toast.success("Login Successfull");
        const authData = JSON.parse(localStorage.getItem('auth'));
        const { user } = authData;
        
        if(user.role=="Developer"){
            navigate("/developerdashboard");
        }
        else if(user.role=="Marketing"){
            navigate("/marketingdashboard");

        }
        else if(user.role=="Finance"){
            navigate("/financedashboard");

        }
    }catch(err){
        if(err.response){
        console.log(err);
        toast.error(err.response.data.message);}
    }}
    else{
        toast.error("Please fill the fields");
    }

};
useEffect(()=>{
    const authData = JSON.parse(localStorage.getItem('auth'));
    if(authData){
        const { user, token } = authData;
        if(!token){
            
        }
        else{
            setTimeout(()=>{
            toast.success("Already Logged In");
            if(user.role=="Developer"){
                navigate("/developerdashboard");
            }
            else if(user.role=="Marketing"){
                navigate("/marketingdashboard");
    
            }
            else if(user.role=="Finance"){
                navigate("/financedashboard");
    
            }},2000);
        }
    }
    

})

  return (
  <><div className="row">
  {/* ---------------------------------------- */}
  <div className="card" style={{width: "40rem", margin:"auto", marginTop:"10%", border:"0px"}}>
  <div className="card-body">
   {/* ------------------------------------ */}
   


   
<div className="col-8 offset-2">
    <h1 className="mb-3">Login</h1>

     <form onSubmit={handleOnSubmit} className="needs-validation" noValidate>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" name="email" id='email' placeholder="Enter Email" className="form-control" value={formdata.email} onChange={handleOnChange} required/>
          
       
        </div>



        <div className="mb-3">
            <label htmlFor="password"  className="form-label">Password</label>
            <input type="password" name="password" id='password' placeholder="Enter password" className="form-control" value={formdata.password} onChange={handleOnChange} required/>
       
        </div> 
        <p>don't have account? <a href='/signup ' className='color-blue' >Sign up</a></p>
        <button className="btn btn-success">Login</button>
     </form>
    </div>
    </div>

   {/* ------------------------------------------- */}
    
  </div>
</div>
  {/* ---------------------------------------- */}
 
  </>
  )
}

export default Login