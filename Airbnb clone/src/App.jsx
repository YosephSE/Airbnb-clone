import React from "react"
import hero from "./assets/logo.png"


function NavBar(){
  return(
      <nav>
          Hello
      </nav>
  )
}


function Hero(){
    return(
        <div>
            <img src={hero} alt="Hero Section" />
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