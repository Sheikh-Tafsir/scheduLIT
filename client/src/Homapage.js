import React from 'react'
import "./style.css"
import Heromain from './Heromain';
import About from './About';
import Service from './Service';
import Team from './Team';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Footer from './Footer';
import Axios from 'axios';
//import Authorization from './Authorization';

//import {Routes, Route, Link} from "react-router-dom";

import { useState } from "react";
//import $ from "jquery";


//import {FaSun} from "react-icons/fa";
//import {FaMoon} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import {HiOutlineMenuAlt1} from "react-icons/hi";


const Homapage = () => {
        const [menuStatus, setMenuStatus] = useState(0);
        const [x, setX] = useState(0);
        const aa =() =>{
          Axios.post("http://localhost:3001/logged",{
            lgname:"flag",
          }).then((response) =>{
              setX(response.data.message);
          });        
        };

        const loggout = () =>{
          Axios.post("http://localhost:3001/loggout",{
            lgname:"flag",
          }).then((response) =>{
              setX(response.data.message);
          });        
        };

        const renderAuthButton = () => {
          {aa()};
          //alert(x);
          if (x===1) {
            return <a href='/' className="rega" onClick={() => loggout()}>Log out</a>
          } 
          else {
            return <a href='/authorization' className="rega">Log in</a>
          }
        };
        const servicelogstat = () => {
          {aa()};
          if (x===1) {
            return <Service></Service>
          }

        }
        
        
        //const stickyhead = () =>{
        window.addEventListener("scroll",function(){
            var header=document.querySelector(".headbar");
            header.classList.toggle("sticky",window.scrollY > 0);
        });
      
        const menuscrolfunc = () =>{
            document.querySelector(".headmenubarr").classList.add("headmenu_toggle");
            document.querySelector("#menuicon").style.visibility = "hidden";
            document.querySelector("#menualticon").style.visibility="visible";
            document.querySelector(".headbar").classList.add("headbar_tog");
            document.querySelector(".menualter").classList.add("menualter_tog");
        };
        const menuclosfunc = () =>{
            document.querySelector(".headmenubarr").classList.remove("headmenu_toggle");
            document.querySelector("#menuicon").style.visibility = "visible";
            document.querySelector("#menualticon").style.visibility="hidden";
            document.querySelector(".headbar").classList.remove("headbar_tog");
            document.querySelector(".menualter").classList.remove("menualter_tog");
        };

  return (
    <div className="homapage">
      <div className="canvas">
        <div className="headbar" data-aos="fade-down">
          <div className="headlogo">
            <a href="https://ibb.co/4Mrp97L"><img src="https://i.ibb.co/y67Dq4h/pq.png" alt="pp" border="0" height="70rem" width="170rem"/></a>
          </div>
          <div className="headmenu">
            <div className="headmenubarr">
              <a href="#" className="headmenuopt">Home</a>
              <a href="#About" className="headmenuopt">About</a>
              <a href="#Service" className="headmenuopt">Services</a>
              <a href="#Contacts" className="headmenuopt">Contacts</a>
            </div>
          </div>
          <div className="menubut">
            <FiMenu class="fimenu" onClick={() => menuscrolfunc()} id="menuicon"></FiMenu>
            <HiOutlineMenuAlt1 class="fimenu" onClick={() => menuclosfunc()} id="menualticon"></HiOutlineMenuAlt1>
          </div>
          <div className="reg">
            <div className="regg">
              {/*<a href='/authorization' className="rega">Sign in</a>*/}
              {renderAuthButton()}
            </div>
          </div>
        </div>
        <Heromain></Heromain>
        <About></About>
        <div>
          {servicelogstat()}
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