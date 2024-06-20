import React from "react"
import logo from "./assets/airbnb-logo.png"
import hero from "./assets/photo-grid.png"
import './App.css'

function NavBar(){
  return(
      <nav className="nav-bar">
         <img src={logo} alt="Airbnb Logo" className="nav-logo" />
      </nav>
  )
}


function Hero(){
    return(
        <div className="hero">
            <img src={hero} alt="Hero Section"className="hero-icon"/>
        </div>
    )
}


function App(){
  return(
    <div>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App