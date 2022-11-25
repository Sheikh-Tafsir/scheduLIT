import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {FaHome,FaBriefcase,FaUserCircle,FaGlobe,FaFacebookMessenger} from "react-icons/fa";
import {ImCross} from 'react-icons/im';

const  Footer = () => {
  const menuclosfun = () =>{
    document.querySelector(".headmenubarr").classList.remove("headmenu_toggle");
    document.querySelector("#menuicon").style.visibility = "visible";
    document.querySelector("#menualticon").style.visibility="hidden";
    document.querySelector(".headbar").classList.remove("headbar_tog");
    document.querySelector(".menualter").classList.remove("menualter_tog");
};
  return (
    <div>
        <div className="footer">
            <img src="https://i.ibb.co/y67Dq4h/pq.png" height="100rem" width="150rem" alt="footerlogo"></img>
            <div className="footmenu">
                <a href="#About" >About</a>
                <a href="#Service">Service</a>
                <a href="#Contacts">Contacts</a>
            </div>
            <div className="footicons">
                <a href="https://www.facebook.com/tmr.rahman"><FaFacebook className="footicon"></FaFacebook></a>
                <a href="https://www.instagram.com/sheikh_tafsir_rahman"><FaInstagram className="footicon"></FaInstagram></a>
                <a href="#"><FaTwitter className="footicon"></FaTwitter></a>
            </div>
            <p>&#169; Sheikh, All rights reserved</p>
        </div>
        <div className="menualter">
          <a href="#" className="menuicons"><FaHome ></FaHome></a>
          <a href="#About" className="menuicons"><FaUserCircle></FaUserCircle></a>
          <ImCross className="menuicons" id="cross2" onClick={() => menuclosfun()}></ImCross>
          <a href="#Service" className="menuicons"><FaBriefcase></FaBriefcase></a>
          <a href="#Contacts" className="menuicons" ><FaFacebookMessenger></FaFacebookMessenger></a>
        </div>
    </div>
  )
}

export default Footer