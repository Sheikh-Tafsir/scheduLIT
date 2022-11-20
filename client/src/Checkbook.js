import React, { useState } from 'react'
import Axios from 'axios';
import Menusrvc from './Menusrvc';
import {FaTrashAlt} from 'react-icons/fa'

const Checkbook = () => {

    const [bookedList,setBookedList] = useState([]);
    const [deletestat,setDeletestat]=useState();
    let usrname=localStorage.getItem("usrname");
    window.addEventListener("load",function(){
        Axios.post('http://localhost:3001/checkbook',{
            val:1,
            usermail:usrname,
        }).then((response) =>{
            setBookedList(response.data);
            //alert(JSON.stringify(response.data));
        });
    });
    const deletebookingrout = (vday,vdate,vroomno,vslot,vemail) => {
        //alert(day +" " + date + " " +roomno)
        Axios.post('http://localhost:3001/deletebookingrout',{
            vday:vday,
            vdate:vdate,
            vroomno:vroomno,
            vslot:vslot,
            vduration:1,
        }).then((response) =>{
            
            //alert(JSON.stringify(response.data));
        });
        deletebookingchck(vday,vdate,vroomno,vslot,vemail);
        
    };
    const deletebookingchck = (vday,vdate,vroomno,vslot,vemail) => {
        //alert(day +" " + date + " " +roomno)
        Axios.post('http://localhost:3001/deletebookingchck',{
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
        <Menusrvc></Menusrvc>
        <h2>All Booked Slots</h2>
        
        <div className="checkbooks">
            <div className="checkbookpnt" id="checkbookpnthd">
                <p className="checkbookpnt1">SL</p>
                <p className="checkbookpnt2">Day</p>
                <p className="checkbookpnt3">Date</p>
                <p className="checkbookpnt4">Room</p>
                <p className="checkbookpnt5">Time</p>
                <p className="checkbookpnt6">User Email</p>
                <p className="checkbookpnt7">Delete</p>
            </div>
            {bookedList.map((item, index) => {
                return <div>
                    <div key={index} className="checkbookpnt">
                        <p className="checkbookpnt1">{index +1}. </p>
                        <p className="checkbookpnt2">{item.day} </p> 
                        <p className="checkbookpnt3">{item.date} </p>
                        <p className="checkbookpnt4">{item.roomno} </p>
                        {item.slotno == "slot1" ? <p  className="checkbookpnt5">8.00-9.15</p> : item.slotno == "slot2" ? <p className="checkbookpnt5">9.15-10.30</p> : item.slotno == "slot3" ? <p className="checkbookpnt5">10.30-11.45</p> : item.slotno == "slot4" ? <p className="checkbookpnt5">11.45-1.00</p> : item.slotno == "slot5" ? <p className="checkbookpnt5">1.00-2.30</p> : item.slotno == "slot6" ? <p className="checkbookpnt5">2.30-3.45</p> : <p className="checkbookpnt5">3.45-5.00</p>}
                        <p className="checkbookpnt6"> {item.email} </p>
                        <p className="checkbookpnt7" onClick={()=>deletebookingrout(item.day,item.date,item.roomno,item.slotno,item.email)}> <FaTrashAlt className="checkbookpnt7_icon"></FaTrashAlt> </p>
                    </div>
                </div>
            })}
        </div>

    </div>
  )
}

export default Checkbook