import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Product from "./Components/Product";
import Contact from "./Components/Contact";

import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Slider from "./Components/slider";
function App()
{
  return(
    <div>
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route path="/services" element={< Services/>}/>
        <Route path="/Product" element={< Product/>}/>
        <Route path="/contact" element={< Contact/>}/>
   
        <Route path="/gallery" element={< Gallery/>}/>
      </Routes>
  <Footer/>
      </BrowserRouter>
     
    </div>
  )
}
export  default App;