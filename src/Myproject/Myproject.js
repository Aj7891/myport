import React from 'react';
import Card from '../Components/Card/Card';
import "./Myproject.css";

const Myproject = () => {
  return (
    <section className='project'>

       
       <div className="pro-heading">
        <h1>Project</h1>
       </div>
        
        <div className="proj">
            <Card/>
            <Card/>
            <Card/>
        </div>
      

    </section>
  )
}

export default Myproject
