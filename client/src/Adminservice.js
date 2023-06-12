import React from 'react'
import {FaArrowRight} from "react-icons/fa";
import {Link} from 'react-router-dom';

const Adminservice = () => {
    const loggout = () =>{
        localStorage.setItem("loggedstat",0);  
        window.open("/", "_top");     
    };
  return (
    <>
        <div className="headbar" data-aos="fade-down">
            <div className="headlogo">
                <a href="https://ibb.co/4Mrp97L"><img src="https://i.ibb.co/y67Dq4h/pq.png" alt="pp" border="0" height="70rem" width="170rem"/></a>
            </div>
            <div className="reg">
                <div className="reggg">
                    <Link to='/' className="rega" onClick={() => loggout()}>Log out</Link>
                </div>
            </div>
        </div>
        <div className="service" id="admnsrvc"> 
            <h2>Admin Services</h2>
            <div className="srvcmenu" >
                <div className="srvc">
                    <img src="https://img.pikbest.com/png-images/20211011/tiny-programmers-upgrading-operation-system-of-computer_6142453.png!bw700" />
                    <h2>View Bookings</h2>
                    <p> Book a room in your preferred slot and date depending on availability for a quiz or extra class.</p>
                    <button><a href="/adminviewbooks">Book<FaArrowRight className="arricon"></FaArrowRight></a></button>
                </div>
                <div className="srvc">
                    <img src="https://www.pngfind.com/pngs/m/74-746223_notifications-vector-laundry-icon-png-transparent-png.png" />
                    <h2>Update Routine</h2>
                    <p>Update and modify your routine, change the start and end time of clasees when you need. </p>
                    <button><a href="/roomroutine">Manage<FaArrowRight className="arricon"></FaArrowRight></a></button>
                </div>   
                <div className="srvc">
                    <img src="https://www.pngitem.com/pimgs/m/157-1576399_learning-daily-routine-business-man-hd-png-download.png" />
                    <h2>View Users</h2>
                    <p>Manage your room bookings, change the timing or cancel the booking all together based on your requirement. </p>
                    <button><a href="/adminviewusers">Manage<FaArrowRight className="arricon"></FaArrowRight></a></button>
                </div>        
            </div>
        </div>
    </>
  )
}

export default Adminservice