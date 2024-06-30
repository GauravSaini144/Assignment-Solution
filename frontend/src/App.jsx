import React from "react"
import { Routes,Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import DeveloperDashboard from "./components/DeveloperDashboard.jsx";
import FinanceDashboard from "./components/FinanceDashboard.jsx";
import MarketingDashboard from "./components/MarketingDashboard.jsx";
import { Toaster } from "react-hot-toast";
function App(){
  return (
    <>
    <Navbar/>
     <Routes>
       
       <Route path= "/" element={<Login/>}/>
       <Route path= "/signup" element={<Signup/>}/> 
       <Route path= "/DeveloperDashboard" element={<DeveloperDashboard/>}/>
       <Route path= "/MarketingDashboard" element={<MarketingDashboard/>}/>
       <Route path= "/FinanceDashboard" element={<FinanceDashboard/>}/>
       </Routes>
       <Toaster/>
    </>
  )

}
export default App
