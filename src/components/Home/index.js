import React from "react";

import CarouselComponent from "../CarouselComponent";
import Services from '../Services'
import Careers from '../Careers'
import About from '../About'
import Team from '../Team'
import ContactUs from '../ContactUs'

import "./index.css";



const Home=()=>{
  

  return(

    <div>
      
      <CarouselComponent/>
      <Services/>
      <Careers/>
      <About/>
      <Team/>
      <ContactUs/>
      
      
    </div>
  )

}
export default Home