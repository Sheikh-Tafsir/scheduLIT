import React from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom';
import "./style.css"
import {FiMenu} from "react-icons/fi";
import {HiOutlineMenuAlt1} from "react-icons/hi";

const Headnavbar = () => {
    let loggedstat=localStorage.getItem("loggedstat");

    const loggout = () =>{
      localStorage.setItem("loggedstat",0);     
      window.location.reload(); 
    };
    
    
    //const stickyhead = () =>{
    window.addEventListener("scroll",() =>{
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
    <>
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
              {(loggedstat==1)?
                <Link to='/' className="rega" onClick={() => loggout()}>Log out</Link>:<Link to='/authorization' className="rega">Log in</Link>
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default Headnavbar