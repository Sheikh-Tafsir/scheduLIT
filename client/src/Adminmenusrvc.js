import React from 'react'
import {FiMenu} from "react-icons/fi";
import {HiOutlineMenuAlt1} from "react-icons/hi";

const Adminmenusrvc = () => {
    const menuscrolfunc = () =>{
        document.querySelector(".headmenubarr").classList.add("headmenu_toggle");
        document.querySelector("#menuicon").style.visibility = "hidden";
        document.querySelector("#menualticon").style.visibility="visible";
       
    };
    const menuclosfunc = () =>{
        document.querySelector(".headmenubarr").classList.remove("headmenu_toggle");
        document.querySelector("#menuicon").style.visibility = "visible";
        document.querySelector("#menualticon").style.visibility="hidden";
        
    };
  return (
    <div className="menusrvc" data-aos="fade-down">
        <div className="headlogo">
            <img src="https://i.ibb.co/y67Dq4h/pq.png" alt="pp" border="0" height="95%" width="35%"/>
        </div>
        
        <div className="headmenu">
            <div className="headmenubarr">
                <a href="/adminservice" className="headmenuopt">Home</a>
                <a href="/adminviewbooks" className="headmenuopt">Bookings</a>
                <a href="/adminviewusers" className="headmenuopt">Users</a>
            </div>
        </div>
        {/*<div className="menubut">
            <FiMenu class="fimenu" onClick={() => menuscrolfunc()} id="menuicon"></FiMenu>
            <HiOutlineMenuAlt1 class="fimenu" onClick={() => menuclosfunc()} id="menualticon"></HiOutlineMenuAlt1>
        </div>*/}
    </div>
  )
}

export default Adminmenusrvc