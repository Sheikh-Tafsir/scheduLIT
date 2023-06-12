import React,{ useEffect, useState } from 'react'
import "./style.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Aos from "aos"
import  "aos/dist/aos.css"

import Homapage from './Homapage';
import Authorization from './Authorization';
import Signup from './Signup';
import Forgetpass from './Forgetpass';
import Calender from './Calender';
import Bookslot from './Bookslot';
import Checkbook from './Checkbook';
import Service from './Service';
import Dash from './Dash';
import Menusrvc from './Menusrvc';
import Adminlogin from './Adminlogin';
import Userview from './Userview';
import Adminviewbooks from './Adminviewbooks';
import Adminservice from './Adminservice';
import Adminmenusrvc from './Adminmenusrvc';
import Changepass from './Changepass';
import Roomroutine from './Roomroutine';
import Notfound from './Notfound';


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

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homapage/>} />
          <Route path='authorization' element={<Authorization/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='forgetpass' element={<Forgetpass/>} />
          <Route path='changepass' element={<Changepass/>} />
          <Route path='calender' element={<Calender/>} />
          <Route path='service' element={<Service/>} />
          <Route path='bookslot' element={<Bookslot/>} />
          <Route path='checkbook' element={<Checkbook/>} />
          <Route path='dash' element={<Dash/>} />
          <Route path='menusrvc' element={<Menusrvc/>} />
          <Route path='admnlgn' element={<Adminlogin/>} />
          <Route path='adminviewusers' element={<Userview/>} />
          <Route path='adminviewbooks' element={<Adminviewbooks/>} />
          <Route path='adminservice' element={<Adminservice/>} />
          <Route path='adminmenusrvc' element={<Adminmenusrvc/>} />
          <Route path='roomroutine' element={<Roomroutine/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
