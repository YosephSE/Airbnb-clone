import React from "react"
import logo from "../assets/airbnb-logo.png"


function NavBar(){
    return(
        <nav className="nav-bar">
           <img src={logo} alt="Airbnb Logo" className="nav-logo" />
        </nav>
    )
  }


export default NavBar