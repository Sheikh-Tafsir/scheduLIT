import React, { useState } from 'react';
import "./style.css"
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import Axios from 'axios';
import Menusrvc from './Menusrvc';

const calender = () => {
    //const [value, onChange] = useState(new Date());
    // State for date selected by user
    const [selectedDate, setSelectedDate] = useState();
    const [employeeList,setEmployeeList] = useState([]);
    const [insertstat,setInsertstat] =useState();
    let usrname=localStorage.getItem("usrname");

    // State for text above calander
    const [calendarText, setCalendarText] = useState(`No Date is selected`);
    const handleDateChange = (value) => {
        setSelectedDate(value);
        setCalendarText(`The selected Date is ${value.toDateString()}`);
        let valDate=value.toDateString();
        let valDay=valDate.substring(0, 3);
        let valDatee=valDate.substring(4, 15);
        //alert(valDatee);
        bookSlotday(valDay,valDatee);
    };

    //select date to book
    const bookSlotday = (valDay,valDatee) => {
        //alert(valDay);
        Axios.post('http://localhost:3001/bookday',{
            bookday:valDay,
            bookdatee:valDatee,
        }).then((response) =>{
            setEmployeeList(response.data);
            //alert(JSON.stringify(response.data));
        });
        /*if(valDay=="Sat" || valDay=="Fri")document.querySelector(".emptyslotshead").style.visibility="hidden";
        else document.querySelector(".emptyslotshead").style.visibility="visible";*/
        
        if(valDay=="Sat" || valDay=="Sun")document.querySelector(".emptyslotshead h2").innerHTML="No CLass on Weekends";
        else document.querySelector(".emptyslotshead h2").innerHTML="Choose From Free Slots";
        //document.querySelector(".emptyslotshead").style.transition = "all 2s";
        document.querySelector(".emptyslotshead").style.visibility="visible";
        document.querySelector(".emptyslotshead").style.transform="scale(1)";
    };


    //book slot time
    const bookSlot = (vtime,vday,vdate,vroomno,vslot) => {
        //alert(vtime +" "+ vday +" "+ vdate +" "+ vroomno +" "+ vslot +" "+ usrname);
        document.querySelector(".surebookque").classList.add("surebookque-tog");
        document.querySelector(".yesbook").addEventListener("click", yesFunction);
        document.querySelector(".nobook").addEventListener("click", noFunction);

        function yesFunction(){
            Axios.post('http://localhost:3001/daybooked',{
                vtime:vtime,
                vday:vday,
                vdate:vdate,
                vroomno:vroomno,
                vslot:vslot,
                vduration:1,
            }).then((response) =>{
                //alert(JSON.stringify(response.data));
            });

            saveSlot(vtime,vday,vdate,vroomno,vslot);
            //alert("yes");
            document.querySelector(".surebookque").classList.remove("surebookque-tog");
        }

        function noFunction(){
            //alert("no");
            document.querySelector(".surebookque").classList.remove("surebookque-tog");
        }

    
        
    }

    //save slot time and username in notific
    const saveSlot = (vtime,vday,vdate,vroomno,vslot) => {
        //alert(vtime +" "+ vday +" "+ vdate +" "+ vroomno +" "+ vslot +" "+ usrname);
        
        Axios.post('http://localhost:3001/daybookedsaved',{
            vtime:vtime,
            vday:vday,
            vdate:vdate,
            vroomno:vroomno,
            vslot:vslot,
            vduration:1,
            vusrname:usrname,
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
        });
        document.querySelector(".insrtstat").classList.add("insrtstat-tog");
        

    }
    
    //close status
    const closestat = () => {
        document.querySelector(".insrtstat").classList.remove("insrtstat-tog");
        window.location.reload();
    }


  return (
    <div className="calender">
        <Menusrvc></Menusrvc>

        <div className="calenderpart">
            <h2>Pick Your Date</h2>
            <Calendar 
                //onChange={onChange} value={value}  
                onChange={handleDateChange}
            />
            {/*<Calendar
                onChange={handleDateChange}
            />*/}

        </div>
        <div className="emptyslotshead">
                <h2>Choose From Free Slots</h2>
            </div>
        <div className="emptyslots">
            {employeeList.map((item, index) => {
                     return <div>
                        <div key={index} class="employeelist" data-aos="fade-left">
                            <p className="bookRoomNo">{item.roomno} </p>
                            {item.slot1 == '1'? <p className="bookedSlot">8.00 - 9:15 </p>: item.slot1 == '0.25'? <p className="half1FreeSlot">8.00 - 9:15</p> : item.slot1 == '0.75'? <p className="half2FreeSlot">8.00 - 9:15 </p> :<p className="freeSlot" onClick={() =>bookSlot("8.00-9:15", item.day, item.date, item.roomno,"slot1")}>8.00 - 9:15 </p>}
                            {item.slot2 == '1'? <p className="bookedSlot">9.15 - 10.30 </p>: item.slot2 == '0.25'? <p className="half1FreeSlot">9.15 - 10.30 </p> : item.slot2 == '0.75'? <p className="half2FreeSlot">9.15 - 10.30 </p> :<p className="freeSlot" onClick={() =>bookSlot("9.15-10.30", item.day, item.date, item.roomno,"slot2")}>9.15 - 10.30 </p>}
                            {item.slot3 == '1'? <p className="bookedSlot">10.30 - 11.45 </p>: item.slot3 == '0.25'? <p className="half1FreeSlot">10.30 - 11.45</p> : item.slot3 == '0.75'? <p className="half2FreeSlot">10.30 - 11.45</p> :<p className="freeSlot" onClick={() =>bookSlot("10.30-11.45", item.day, item.date, item.roomno,"slot3")}>10.30 - 11.45 </p>}
                            {item.slot4 == '1'? <p className="bookedSlot">11.45 - 1.00 </p>: item.slot4 == '0.25'? <p className="half1FreeSlot">11.45 - 1.00</p> : item.slot4 == '0.75'? <p className="half2FreeSlot">11.45 - 1.00</p> :<p className="freeSlot" onClick={() =>bookSlot("11.45-1.00", item.day, item.date, item.roomno,"slot4")}>11.45 - 1.00 </p>}
                            {item.slot5 == '1'? <p className="bookedSlot">1.00 - 2.30 </p>: item.slot5 == '0.25'? <p className="half1FreeSlot">>1.00 - 2.30 </p> : item.slot5 == '0.75'? <p className="half2FreeSlot">>1.00 - 2.30 </p> :<p className="freeSlot" onClick={() => bookSlot("1.00-2.30", item.day, item.date, item.roomno,"slot5")}>1.00 - 2.30 </p>}
                            {item.slot6 == '1'? <p className="bookedSlot">2.30 - 3.45 </p>: item.slot6 == '0.25'? <p className="half1FreeSlot">2.30 - 3.45 </p> : item.slot6 == '0.75'? <p className="half2FreeSlot">2.30 - 3.45 </p> :<p className="freeSlot" onClick={() =>bookSlot("2.30-3.45", item.day, item.date, item.roomno,"slot6")}>2.30 - 3.45 </p>}
                            {item.slot7 == '1'? <p className="bookedSlot">3.45 - 5.00 </p>: item.slot7 == '0.25'? <p className="half1FreeSlot">3.45 - 5.00 </p> : item.slot7 == '0.75'? <p className="half2FreeSlot">3.45 - 5.00 </p> :<p className="freeSlot" onClick={() =>bookSlot("3.45-5.00", item.day, item.date, item.roomno,"slot7")}>3.45 - 5.00</p>}
                            {/*<p>{item.slot1} </p>
                            <p>{item.slot2} </p>
                            <p>{item.slot3} </p>
                            <p>{item.slot4} </p>
                            <p>{item.slot5} </p>
                            <p>{item.slot6} </p>
                            <p>{item.slot7} </p>*/}
                        </div>
                    </div>
            })}
        </div>
        <div className="insrtstat">
            <p>Slot time booked</p>
            <button onClick={()=>closestat()}>done</button>
        </div>
        <div className="surebookque">
            <p>Sure want to book this slot?</p>
            <button className="yesbook">Yes</button>
            <button className="nobook">No</button>
        </div>
    </div>
  )
}

export default calender