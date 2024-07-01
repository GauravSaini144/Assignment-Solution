import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
    
<nav className="navbar navbar-expand-md bg-body-tertiary border-bottom sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><i className="fa-regular fa-compass"></i></a>
      <div className="navbar-nav">
        <a className="nav-link head " href="/"><b className='text-large'>Requin Solutions</b></a>
        
        
      </div>
     
    

      
      

        <div className="navbar-nav ms-auto">
         
        </div>
      </div>
    
  </nav>
    </>
  )
}

export default Navbar