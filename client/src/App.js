import React,{ useEffect, useState } from 'react'
import "./style.css"

import Homapage from './Homapage';
/*import Heromain from './Heromain';
import About from './About';
import Service from './Service';
import Team from './Team';
import Contacts from './Contacts';
import Footer from './Footer';*/
import Authorization from './Authorization';
import Signup from './Signup';
import Forgetpass from './Forgetpass';
import Calender from './Calender';
import Bookslot from './Bookslot';
import Checkbook from './Checkbook';

import {Routes, Route, Link} from "react-router-dom";
import Aos from "aos"
import  "aos/dist/aos.css"
import Service from './Service';
import Dash from './Dash';
import Menusrvc from './Menusrvc';
import Adminlogin from './Adminlogin';
import Userview from './Userview';
import Adminviewbooks from './Adminviewbooks';
import Adminservice from './Adminservice';
import Adminmenusrvc from './Adminmenusrvc';
import Changepass from './Changepass';


/*import { useState } from "react";
import $ from "jquery";

import {FaSun} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import {HiOutlineMenuAlt1} from "react-icons/hi";*/

const App = () => {
  const stickyhead = () =>{
    var header=document.querySelector(".headbar");
    header.classList.toggle("sticky",window.scrollY > 0);
  };
  const menuscrolfunc = () =>{
    document.querySelector(".headmenu").classList.add("headmenu_toggle");
    document.querySelector("#menuicon").style.visibility = "hidden";
    document.querySelector("#menualticon").style.visibility="visible";
  };
  const menuclosfunc = () =>{
    document.querySelector(".headmenu").classList.remove("headmenu_toggle");
    document.querySelector("#menuicon").style.visibility = "visible";
    document.querySelector("#menualticon").style.visibility="hidden";
  };
  useEffect(()=>{
    Aos.init({duration: 2000,once: true});
  }, []);

  return (
    /*<div onWheel={() => stickyhead()} onScroll={() => stickyhead()} >
      <div className="canvas">
        <div className="headbar">
          <div className="headlogo">
            <a href="https://ibb.co/4Mrp97L"><img src="https://i.ibb.co/Sv0xbpg/logo5.png" alt="pp" border="0" height="50rem" width="200rem"/></a>
          </div>
          <div class="headmenu">
            <a href="#" className="headmenuopt">Home</a>
            <a href="#About" className="headmenuopt">About</a>
            <a href="#Service" className="headmenuopt">Services</a>
            <a href="#Contacts" className="headmenuopt">Contacts</a>
          </div>
          <div className="menubut">
            <FiMenu class="fimenu" onClick={() => menuscrolfunc()} id="menuicon"></FiMenu>
            <HiOutlineMenuAlt1 class="fimenu" onClick={() => menuclosfunc()} id="menualticon"></HiOutlineMenuAlt1>
          </div>
          <div className="reg">
            <a href="#">Sign in</a>
          </div>
        </div>
        <Heromain></Heromain>
        <About></About>
        <Service></Service>
        <Team></Team>
        <Contacts></Contacts>
        <Footer></Footer>
        <Homapage></Homapage>
        
      </div>
    </div>*/
    <div>
      <Routes>
        <Route path='/' element={<Homapage/>} />
        <Route path='/authorization' element={<Authorization/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgetpass' element={<Forgetpass/>} />
        <Route path='/changepass' element={<Changepass/>} />
        <Route path='/calender' element={<Calender/>} />
        <Route path='/bookslot' element={<Bookslot/>} />
        <Route path='/checkbook' element={<Checkbook/>} />
        <Route path='/dash' element={<Dash/>} />
        <Route path='/menusrvc' element={<Menusrvc/>} />
        <Route path='/admnlgn' element={<Adminlogin/>} />
        <Route path='/adminviewusers' element={<Userview/>} />
        <Route path='/adminviewbooks' element={<Adminviewbooks/>} />
        <Route path='/adminservice' element={<Adminservice/>} />
        <Route path='/adminmenusrvc' element={<Adminmenusrvc/>} />

      </Routes>
    </div>
  )
}

export default App
