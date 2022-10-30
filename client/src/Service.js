import React from 'react'
import {FaArrowRight} from "react-icons/fa";
const Service = () => {
  return (
    <>
        <div className="service" id="Service" >
            <h2>Services</h2>
            <div className="srvcmenu" >
                <div className="srvc">
                    <img src="https://img.pikbest.com/png-images/20211011/tiny-programmers-upgrading-operation-system-of-computer_6142453.png!bw700" />
                    <h2>Book room</h2>
                    <p> Book a room in your preferred slot and date depending on availability for a quiz or extra class.</p>
                    <button><a href="/calender">Book<FaArrowRight className="arricon"></FaArrowRight></a></button>
                </div>
                <div className="srvc">
                    <img src="https://www.pngfind.com/pngs/m/74-746223_notifications-vector-laundry-icon-png-transparent-png.png" />
                    <h2>Manage Booking</h2>
                    <p>Manage your room bookings, change the timing or cancel the booking all together based on your requirement. </p>
                    <button><a href="/checkbook">Manage<FaArrowRight className="arricon"></FaArrowRight></a></button>
                </div>
                
                <div className="srvc" >
                    <img src="https://www.pngitem.com/pimgs/m/157-1576399_learning-daily-routine-business-man-hd-png-download.png" />
                    <h2>DashBoard</h2>
                    {/*<p> Make your routine by giving the coursenames , courseteachers and other constraints! </p>*/}
                    <p>Check and update or modify and save all your personal info with us</p>
                    <button><a href="/dash">Let's Go<FaArrowRight className="arricon"></FaArrowRight></a></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service