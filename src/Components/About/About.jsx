import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import prof from "../../assets/prof.jpeg";

const About = () => {
    return(
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={prof} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>A final-year Computer Science and Engineering student, web developer, and AI enthusiast with hands-on experience in the MERN stack. Passionate about building innovative and user-friendly web applications.</p>
                        <p> Always eager to learn, explore new technologies, and combine creativity with problem-solving to deliver meaningful experiences.</p>
                    </div>
                    <div className="about-skills">
                                                    <div className="about-skill"><p>DSA
                            </p><hr style={{width:"50%"}}/></div>
                                                    <div className="about-skill"><p>React
                            </p><hr style={{width:"50%"}}/></div>
                                                    <div className="about-skill"><p>Express js
                            </p><hr style={{width:"50%"}}/></div>
                                                    <div className="about-skill"><p>Mongo db
                            </p><hr style={{width:"40%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
