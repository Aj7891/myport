import React from 'react';
import "./Footer.css";
import { FaLinkedin,FaInstagram,FaTwitter,FaGithub } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className='foot'>
      <div className="myfoot">
        <h1>Stay connected</h1>
        <p>New Delhi, India</p>
        <h3>+91-9582508117</h3>
      </div>
      <div className="foot-icons">
        <Link to="/hello"><FaLinkedin/></Link>
        <Link to="/hello"><FaTwitter/></Link>
        <Link to="https://github.com/Aj7891"> <FaGithub/></Link>
        <Link to="https://www.instagram.com/ajay.yadav_3/"> <FaInstagram/> </Link>
        
       
      </div>
    </footer>
  )
}

export default Footer
