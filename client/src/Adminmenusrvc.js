import React from 'react'
import {Link} from 'react-router-dom';

const Adminmenusrvc = () => {

  return (
    <div className="menusrvc" data-aos="fade-down">
        <div className="headlogo">
            <img src="https://i.ibb.co/y67Dq4h/pq.png" alt="pp" border="0" height="95%" width="35%"/>
        </div>
        
        <div className="headmenu">
            <div className="headmenubarr">
                <a href="/adminservice" className="headmenuopt">Home</a>
                <a href="/adminviewbooks" className="headmenuopt">Bookings</a>
                <a href="/roomroutine" className="headmenuopt">Routine</a>
                <a href="/adminviewusers" className="headmenuopt">Users</a>
            </div>
        </div>
    </div>
  )
}

export default Adminmenusrvc