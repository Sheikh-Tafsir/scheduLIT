import React, { useState } from 'react'
import Axios from 'axios';
import {FaTrashAlt} from 'react-icons/fa'
import Adminmenusrvc from './Adminmenusrvc';

const Adminviewbooks = () => {
    const [bookedList,setBookedList] = useState([]);
    const [deletestat,setDeletestat]=useState();
    let usrname=localStorage.getItem("usrname");
    window.addEventListener("load",function(){
        Axios.post('http://localhost:3001/admincheckbookings',{
            val:1,
            usermail:usrname,
        }).then((response) =>{
            setBookedList(response.data);
            //alert(JSON.stringify(response.data));
        });
    });

    const deletebookingrout = (vday,vdate,vroomno,vslot,vemail,voldslot) => {
        //alert(day +" " + date + " " +roomno)
        Axios.post('http://localhost:3001/admindeletebookingrout',{
            vday:vday,
            vdate:vdate,
            vroomno:vroomno,
            vslot:vslot,
            vduration:1,
            voldslot:voldslot,
        }).then((response) =>{
            
            //alert(JSON.stringify(response.data));
        });
        deletebookingchck(vday,vdate,vroomno,vslot,vemail);
    };

    const deletebookingchck = (vday,vdate,vroomno,vslot,vemail) => {
        //alert(day +" " + date + " " +roomno)
        Axios.post('http://localhost:3001/admindeletebookingchck',{
            vday:vday,
            vdate:vdate,
            vroomno:vroomno,
            vslot:vslot,
            vemail:vemail,
            vduration:1,
        }).then((response) =>{
            
            //alert(JSON.stringify(response.data));
        });
        window.location.reload(false);
        setDeletestat("deleted");
        
    };
  return (
    <div className="checkbook">
        <Adminmenusrvc></Adminmenusrvc>
        <h2>All Booked Slots</h2>
        
        <div className="checkbooks">
            <div className="checkbookpnt" id="checkbookpnthd">
                <p className="checkbookpnt1">SL</p>
                <p className="checkbookpnt2">Day</p>
                <p className="checkbookpnt3">Date</p>
                <p className="checkbookpnt4">Room</p>
                <p className="checkbookpnt5">Time</p>
                <p className="checkbookpnt6">User Email</p>
                {/*<p className="checkbookpnt7">Delete</p>*/}
            </div>
            {bookedList.map((item, index) => {
                const currentDate = new Date();
                const bookDate = new Date(item.date);

                if (bookDate > currentDate) {
                    return (
                    <div>
                        <div key={index} className="checkbookpnt">
                        <p className="checkbookpnt1">{index + 1}. </p>
                        <p className="checkbookpnt2">{item.day} </p>
                        <p className="checkbookpnt3">{item.date} </p>
                        <p className="checkbookpnt4">{item.roomno} </p>
                        <p className="checkbookpnt5"> {item.time} </p>
                        <p className="checkbookpnt6"> {item.email} </p>
                        </div>
                    </div>
                    );
                }

                return null; // Return null if the date is not greater than today
            })}
        </div>

    </div>
  )
}

export default Adminviewbooks