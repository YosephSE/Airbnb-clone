import React from "react";
import hero from "../assets/photo-grid.png"


function Hero(){
    return(
        <div className="hero">
            <img src={hero} alt="Hero Section"className="hero-icon"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero