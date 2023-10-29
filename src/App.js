import React from "react";
import {Routes,Route} from "react-router-dom"
import "./App.css"
import "../src/index.css"
import Home from "./home"
import About from "./about"
import Contact from "./contact";
import Skills from "./skills"
// import Layout from "./layout";
import Sanjeed from "./layout";

function App() {
    return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route index element={<Home/>}/> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/layout" element={<Sanjeed/>}/>
      </Routes>
      
    );
  }

  export default App