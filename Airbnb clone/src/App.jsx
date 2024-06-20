import React from "react"
import hero from "./assets/logo.png"
import './App.css'

function NavBar(){
  return(
      <nav>
         <img src={hero} alt="Hero Section" className="nav-logo" />
      </nav>
  )
}


function Hero(){
    return(
        <div>
            Hello
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