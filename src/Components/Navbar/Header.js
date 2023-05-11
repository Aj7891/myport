import React, { useState } from 'react';
import logo from "../../Image/logo1.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa"



const Header = () => {

  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);

  return (
    <>

      <nav className='navbar'>
        <div className="logo">
          <img src={logo} alt="logImg" />
        </div>

        <div className={Click ? "nav-link active" : "nav-link"}>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/skill">Skill</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>

        <div className='bar-icon' onClick={handleClick}>
          {Click ? <FaTimes size={20} style={{ color: "var(--blue)" }} /> : <FaBars size={20} style={{ color: "var(--blue)" }} />}

        </div>

      </nav>

    </>
  )
}

export default Header
