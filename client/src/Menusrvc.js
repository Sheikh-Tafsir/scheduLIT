import React from 'react'
import {FiMenu} from "react-icons/fi";
import {HiOutlineMenuAlt1} from "react-icons/hi";

const Menusrvc = () => {
  return (
    <div className="menusrvc">
        <div className="headlogo">
            <img src="https://i.ibb.co/y67Dq4h/pq.png" alt="pp" border="0" height="95%" width="35%"/>
        </div>
        <div className="headmenu">
            <div className="headmenubarr">
                <a href="/" className="headmenuopt">Home</a>
                <a href="/calender" className="headmenuopt">Bookroom</a>
                <a href="/checkbook" className="headmenuopt">Bookings</a>
            </div>
        </div>
    </div>
  )
}

export default Menusrvc