import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {toast} from "react-hot-toast"
function Signup() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({name:"",email:"",password:""});
    const [role, setRole]=useState("Developer");

    const handleOnChange=(event)=>{
        setFormData((currdata)=>{
            return{
                ...currdata,
                [event.target.name]:event.target.value
            }
        });
    };
    const handleRole=(event)=>{
        setRole(event.target.value);
    }
    const handleOnSubmit = async(event)=>{
         event.preventDefault();
        if(formData.name.length>2 && formData.email.length>8 && formData.password.length>5){
            const Data={
                name:formData.name,
                email:formData.email,
                password:formData.password,
                role,
            };
        

            try{
                const response= await axios.post(
                    "http://localhost:8080/api/v1/signup",Data
                );
                localStorage.setItem('auth',JSON.stringify(response.data));
                 
                toast.success("Signup Successfull");
                setFormData({name:"", email:"",password:""});
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
        

            
            
        }
    


  return (
    <>
    <div className="row">
    <div className="card" style={{width: "30rem", margin:"auto", marginTop:"5%", border:"0px "}}>
    <div className="card-body">
   <div className="col-8 offset-2">
       <h1 className="mb-3">SignUp</h1>

        <form onSubmit={handleOnSubmit} className="needs-validation" noValidate>

           <div className="mb-3">
               <label htmlFor="name" className="form-label">Name</label>
               <input type="text" name="name" id='name' placeholder="Enter Name" value={formData.name} onChange={handleOnChange} className="form-control" required/>
           </div>

           <div className="mb-3">
               <label htmlFor="email" className="form-label">Email</label>
               <input type="email" name="email" id='email' placeholder="Enter Email" className="form-control" value={formData.email} onChange={handleOnChange} required/>
          
           </div>  


           <div className="mb-3">
               <label htmlFor="role" className="form-label">Role</label>
               <select name="role" id="role" className='bg-gray mx-4' value={role} onChange={handleRole} required>
                <option value="Developer">Developer</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
               </select>
           
           </div>  

           <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
               <input type="password" name="password" id='password' placeholder="Enter password" className="form-control" value={formData.password} onChange={handleOnChange} required/>
          
           </div> 
           <button className="btn btn-success">SignUp</button>
        </form>
       </div>
       </div></div></div>

    </>
  )
}

export default Signup