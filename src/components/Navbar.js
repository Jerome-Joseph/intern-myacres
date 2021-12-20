import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [location, setLocation] = useState("Mumbai")
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" id="nav1" href="/">MyAcres</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {location}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" onClick={()=>{setLocation("Mumbai")}}>Mumbai</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>{setLocation("Navi Mumbai")}}>Navi Mumbai</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>{setLocation("Chennai")}}>Chennai</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>{setLocation("Hyderabad")}}>Hyderabad</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>{setLocation("Kolkata")}}>Kolkata</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <div className="collapse navbar-collapse" id="nav2">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Login
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Contacted Properties</a></li>
                        <li><a className="dropdown-item" href="#">Viewed Properties</a></li>
                        <li><a className="dropdown-item" href="#">Searches</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Recommendations</a></li>
                        <li><a className="dropdown-item" href="#">My Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <button type="button" className="btn btn-dark mx-5">Login</button>
                    </ul>
                    </li>
                    <button id='btn1' type="button" className="btn btn-light">Post Property</button>
                </ul>
                </div>
            </div>
         </nav>  
        </>
    )
}

export default Navbar
