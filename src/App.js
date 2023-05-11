import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project"
import Skill from "./Routes/Skill";
import Contact from "./Routes/Contact";
import Error from "./Routes/Error";
import "./index.css";
import Header from "./Components/Navbar/Header";
import Footer from "./Components/Footer/Footer";



const App = () => {
  return (

    <>
   
    <BrowserRouter>
      <Header/> 
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/> 
      
    </BrowserRouter>   

     
    </>
    
    
  )
}

export default App
