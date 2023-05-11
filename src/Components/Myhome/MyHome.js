import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Myhome.css";
import dev from "../../Image/developer1.gif";
const MyHome = () => {
    return (
        <section className='home-section'>

            <div className="side-bar">

                <Link to="/instagram"><FaInstagram style={{ color: "black" }} /></Link>
                <Link to="/twitter"><FaTwitter style={{ color: "black" }} /></Link>
                <Link to="/Linkdin"><FaLinkedin style={{ color: "black" }} /></Link>
                <Link to="https://github.com/Aj7891"><FaGithub style={{ color: "Black" }} /></Link>

            </div>

            <div className="home">
                <div className="home-left">
                    <h1>Hello There !</h1>
                    <h3>I am Ajay from new Delhi,India</h3>
                    <h2>I am a <span> Full Stack Developer</span></h2>

                    <button className='cnt me'>Contact</button>
                </div>
                <div className="home-right">
                    <img src={dev} alt="devloper" />
                </div>
            </div>

        </section>

    )
}

export default MyHome
