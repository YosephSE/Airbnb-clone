import React from "react";
import ReactDOM from 'react-dom/client'
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App(){
  return(
    <div>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App