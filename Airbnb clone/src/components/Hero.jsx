import React from "react";
import hero from "../assets/photo-grid.png"


function Hero(){
    return(
        <div className="hero">
            <img src={hero} alt="Hero Section"className="hero-icon"/>
        </div>
    )
}

export default Hero