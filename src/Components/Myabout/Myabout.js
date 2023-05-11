import React from 'react';
import pro from "../../Image/coding1.gif";
import "./Myabout.css";
import mail from "../../Image/email.png";

const Myabout = () => {
  return (
    <section className='about'>

    <div className="pro">
        <img src={pro} alt="programmer" />
    </div>
    <div className="about-me">
      
           <p>
              I am extremely proficient in Front-End Development using HTML5,
              Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript,
              React.Js & Vue.Js And apart from Front-End, I have good knowledge
              in Back-End using node.js ,MySQL, mongoDB, Database and
              continuously engage in trying to extend my skills with new
              technology.
           </p>

           <h3>Any type of query and discussion</h3>

           <a href="">
             
                <p>
                <img src={mail} alt="mail" className="mail" /> ajintern003@gmail.com
                </p>
              
            </a>

            <button className='cnt me'>Download Resume</button>


    </div>

    </section>
  )
}

export default Myabout
