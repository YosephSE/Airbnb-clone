import React from "react"
import './App.css'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"




function App(){
  return(
    <div>
      <NavBar/>
      <Hero/>
      <Cards/>
    </div>
  )
}

export default App