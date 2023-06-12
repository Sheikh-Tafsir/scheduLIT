import React,{ useState } from 'react'
import "./style.css"

import Headnavbar from './Headnavbar';
import Heromain from './Heromain';
import About from './About';
import Service from './Service';
import Team from './Team';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Footer from './Footer';




const Homapage = () => {
  let loggedstat=localStorage.getItem("loggedstat");

  return (
    <div className="homapage">
      <div className="canvas">
        <Headnavbar></Headnavbar>
        <Heromain></Heromain>
        <About></About>
        <div>
          {(loggedstat==1)?
            <Service></Service>:<div></div>
          }
        </div>
        <Team></Team>
        <Gallery></Gallery>
        <Contacts></Contacts>
        <Footer></Footer>
        
      </div>
    </div>
  )
}

export default Homapage