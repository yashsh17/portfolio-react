import React from 'react'
import './Hero.css'
import whats from "../../assets/whats.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import yash from '../../assets/yash.pdf'

const Hero = () => {
    return(
        <div id='home' className='hero'>
         <img src={whats} alt=""/>
         <h1><span>I'm Yash Sharma,</span> Full Stack developer & AI Enthusiast</h1>
        
         <div className="hero-action">

            <AnchorLink href="#contact" offset={50}>
               <div className="hero-connect">Connect With me</div>
            </AnchorLink>

            <a href={yash} download="Yash_Sharma_Resume.pdf" target="_blank" rel="noopener noreferrer">
               <div className="hero-resume">My Resume</div>
            </a>

         </div>
        </div>
    )
}

export default Hero

