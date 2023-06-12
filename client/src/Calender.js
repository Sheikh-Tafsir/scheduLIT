import React, { useState } from 'react';
import "./style.css"
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import Axios from 'axios';
import Menusrvc from './Menusrvc';

const calender = () => {
    const [selectDate, setSelectDate] = useState();
    // State for date selected by user
    const [selectedDate, setSelectedDate] = useState();
    const [employeeList,setEmployeeList] = useState([]);
    let usrname=localStorage.getItem("usrname");
    let deptstat=localStorage.getItem("deptstat");


    // State for text above calander
    const [calendarText, setCalendarText] = useState(`No Date is selected`);
    const handleDateChange = (value) => {
        setSelectedDate(value); 
        setCalendarText(`The selected Date is ${value.toDateString()}`);
        
        const currentDate = new Date();
        const futureDate = new Date(); // Create a new Date object
        futureDate.setDate(currentDate.getDate() + 14);

        if (value >= currentDate && value <= futureDate) {
            //console.log('Selected date is within the range.');
            let valDate=value.toDateString();
            let valDay=valDate.substring(0, 3);
            let valDatee=valDate.substring(4, 15);
            //console.log(valDatee);
            setSelectDate(valDatee);
            bookSlotday(valDay,valDatee); 
        } 
        else {
            //console.log('Selected date is outside the range.');
            window.location.reload();
            document.querySelector(".emptyslotshead h2").innerHTML="Day already past or outside 14 days range";
            document.querySelector(".emptyslotshead").style.visibility="visible";
            document.querySelector(".emptyslotshead").style.transform="scale(1)";
        }
        
    };

    //select date to book
    const bookSlotday = (valDay,valDate) => {
        //alert(valDay);
        Axios.post('http://localhost:3001/bookday',{
            bookday:valDay,
            bookdatee:valDate,
            dept:deptstat,
        }).then((response) =>{
            setEmployeeList(response.data);
        });
    
        if(valDay=="Sat" || valDay=="Sun")document.querySelector(".emptyslotshead h2").innerHTML="No Class on Weekends";
        else document.querySelector(".emptyslotshead h2").innerHTML="Choose From Free Slots";
        document.querySelector(".emptyslotshead").style.visibility="visible";
        document.querySelector(".emptyslotshead").style.transform="scale(1)";
    };


    //book slot time
    const bookSlot = (time,day,seatno,roomno,slot1,slot2,slot3,slot4,slot5,slot6,slot7,slot,oldslot) => {
        document.querySelector(".surebookque").classList.add("surebookque-tog");
        document.querySelector(".yesbook").addEventListener("click", yesFunction);
        document.querySelector(".nobook").addEventListener("click", noFunction);

        //console.log( roomno +" date:"+ selectDate +" day:"+ day +" slot1:"+ slot1 +" slot2:"+ slot2 +" slot3:"+ slot3 +" slot4:"+ slot4 +" slot5:"+ slot5 +" slot6:"+ slot6 +" slot7:"+ slot7 +" dept:"+ deptstat +" "+ seatno)
        
        function yesFunction(){
            Axios.post('http://localhost:3001/bookslot',{
                day:day,
                date:selectDate,
                roomno:roomno,
                slot1:slot1,
                slot2:slot2,
                slot3:slot3,
                slot4:slot4,
                slot5:slot5,
                slot6:slot6,
                slot7:slot7,
                dept:deptstat,
                seatno:seatno,
            }).then((response) =>{
            });

            saveSlot(time,day,roomno,slot,oldslot);
            document.querySelector(".surebookque").classList.remove("surebookque-tog");
        }

        function noFunction(){
            //alert("no");
            document.querySelector(".surebookque").classList.remove("surebookque-tog");
        }

    
        
    }

    //save slot time and username in notific
    const saveSlot = (time,day,roomno,slot,oldslot) => {
        Axios.post('http://localhost:3001/bookingsaved',{
            time:time,
            day:day,
            date:selectDate,
            roomno:roomno,
            slot:slot,
            usrname:usrname,
            oldslot:oldslot,
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

    const generateTimeSlot = (time, onClickHandler) => {
        if (time === '1') {
          return <p className="bookedSlot">{onClickHandler}</p>;
        } 
        else if (time === '0.25') {
          return <p className="half1FreeSlot" onClick={onClickHandler}>{onClickHandler}</p>;
        } 
        else if (time === '0.75') {
          return <p className="half2FreeSlot" onClick={onClickHandler}>{onClickHandler}</p>;
        } 
        else {
          return <p className="freeSlot" onClick={onClickHandler}>{onClickHandler}</p>;
        }
      };

        
  return (
    <div className="calender">
        <Menusrvc></Menusrvc>
        <div className="calenderpart">
            <h2>Pick Your Date</h2>
            <Calendar 
                onChange={handleDateChange}
            />
        </div>
        <div className="emptyslotshead">
                <h2>Choose From Free Slots</h2>
            </div>
        <div className="emptyslots">
            {employeeList.map((item, index) => {
                     return <div>
                        <div key={index} class="employeelist" data-aos="fade-left">
                            <p className="bookRoomNo">{item.roomno} </p>
                            <p className="bookRoomNo">{item.seatno} Seats</p>
                            {item.slot1 == '1'? <p className="bookedSlot">8.00 - 9:15 </p>: item.slot1 == '0.25'? <p className="half1FreeSlot" onClick={() =>bookSlot("08.40-09:15", item.day, item.seatno, item.roomno, 1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot1", item.slot1)}>8.00 - 9:15</p> : item.slot1 == '0.75'? <p className="half2FreeSlot" onClick={() =>bookSlot("08.00-08:40", item.day, item.seatno, item.roomno, 1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot1",item.slot1)}>8.00 - 9:15 </p> :<p className="freeSlot" onClick={() =>bookSlot("8.00-9:15", item.day, item.seatno, item.roomno, 1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot1", item.slot1)}>8.00 - 9:15 </p>}
                            {item.slot2 == '1'? <p className="bookedSlot">9.15 - 10.30 </p>: item.slot2 == '0.25'? <p className="half1FreeSlot" onClick={() =>bookSlot("09.55-10:30", item.day, item.seatno, item.roomno, item.slot1, 1, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot2", item.slot2)}>9.15 - 10.30 </p> : item.slot2 == '0.75'? <p className="half2FreeSlot" onClick={() =>bookSlot("09:15:09:55", item.day, item.seatno, item.roomno, item.slot1, 1, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot2",item.slot2)}>9.15 - 10.30 </p> :<p className="freeSlot" onClick={() =>bookSlot("9.15-10.30", item.day, item.seatno, item.roomno, item.slot1, 1, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot2", item.slot2)}>9.15 - 10.30 </p>}
                            {item.slot3 == '1'? <p className="bookedSlot">10.30 - 11.45 </p>: item.slot3 == '0.25'? <p className="half1FreeSlot" onClick={() =>bookSlot("11.10-11:45", item.day, item.seatno, item.roomno, item.slot1, item.slot2, 1, item.slot4, item.slot5, item.slot6, item.slot7, "slot3", item.slot3)}>10.30 - 11.45</p> : item.slot3 == '0.75'? <p className="half2FreeSlot" onClick={() =>bookSlot("10:30-11:10", item.day, item.seatno, item.roomno, item.slot1, item.slot2, 1, item.slot4, item.slot5, item.slot6, item.slot7, "slot3",item.slot3)}>10.30 - 11.45</p> :<p className="freeSlot" onClick={() =>bookSlot("10.30-11.45", item.day, item.seatno, item.roomno, item.slot1, item.slot2, 1, item.slot4, item.slot5, item.slot6, item.slot7, "slot3", item.slot3)}>10.30 - 11.45 </p>}
                            {item.slot4 == '1'? <p className="bookedSlot">11.45 - 1.00 </p>: item.slot4 == '0.25'? <p className="half1FreeSlot" onClick={() =>bookSlot("12.30-01:00", item.day, item.seatno, item.roomno,  item.slot1,item.slot2, item.slot3, 1, item.slot5, item.slot6, item.slot7, "slot4", item.slot4)}>11.45 - 1.00</p> : item.slot4 == '0.75'? <p className="half2FreeSlot" onClick={() =>bookSlot("11:45-12:30", item.day, item.seatno, item.roomno, item.slot1,item.slot2, item.slot3, 1, item.slot5, item.slot6, item.slot7, "slot4",item.slot4)}>11.45 - 1.00</p> :<p className="freeSlot" onClick={() =>bookSlot("11.45-1.00", item.day, item.seatno, item.roomno, item.slot1,item.slot2, item.slot3, 1, item.slot5, item.slot6, item.slot7, "slot4", item.slot4)}>11.45 - 1.00 </p>}
                            {item.slot5 == '1'? <p className="bookedSlot">1.00 - 2.30 </p>: item.slot5 == '0.25'? <p className="half1FreeSlot" onClick={() =>bookSlot("01.00-02:30", item.day, item.seatno, item.roomno, item.slot1,item.slot2, item.slot3, item.slot4, 1, item.slot6, item.slot7, "slot5", item.slot5)}>1.00 - 2.30 </p> : item.slot5 == '0.75'? <p className="half2FreeSlot" onClick={() =>bookSlot("01.00-02:30", item.day, item.seatno, item.roomno, item.slot1,item.slot2, item.slot3, item.slot4, 1, item.slot6, item.slot7, "slot5",item.slot5)}>1.00 - 2.30 </p> :<p className="freeSlot" onClick={() => bookSlot("1.00-2.30", item.day, item.seatno, item.roomno, item.slot1,item.slot2, item.slot3, item.slot4, 1, item.slot6, item.slot7, "slot5", item.slot5)}>1.00 - 2.30 </p>}
                            {item.slot6 == '1'? <p className="bookedSlot">2.30 - 3.45 </p>: item.slot6 == '0.25'? <p className="half1FreeSlot" onClick={() =>bookSlot("03.10-03:45", item.day, item.seatno, item.roomno, item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, 1, item.slot7, "slot6", item.slot6)}>2.30 - 3.45 </p> : item.slot6 == '0.75'? <p className="half2FreeSlot" onClick={() =>bookSlot("02.30-03:10", item.day, item.seatno, item.roomno, item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, 1, item.slot7, "slot6",item.slot6)}>2.30 - 3.45 </p> :<p className="freeSlot" onClick={() =>bookSlot("2.30-3.45", item.day, item.seatno, item.roomno,item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, 1, item.slot7, "slot6", item.slot6)}>2.30 - 3.45 </p>}
                            {item.slot7 == '1'? <p className="bookedSlot">3.45 - 5.00 </p>: item.slot7 == '0.25'? <p className="half1FreeSlot" onClick={() =>bookSlot("04.30-05:00", item.day, item.seatno, item.roomno, item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, 1, "slot7", item.slot7)}>3.45 - 5.00 </p> : item.slot7 == '0.75'? <p className="half2FreeSlot" onClick={() =>bookSlot("03.45-04:30", item.day, item.seatno, item.roomno, item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, 1, "slot7",item.slot7)}>3.45 - 5.00 </p> :<p className="freeSlot" onClick={() =>bookSlot("3.45-5.00", item.day, item.seatno, item.roomno, item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, 1, "slot7", item.slot7)}>3.45 - 5.00</p>}
                        </div>
                    </div>
            })}
            {/* {employeeList.map((item, index) => (
                <div key={index} class="employeelist" data-aos="fade-left">
                    <p className="bookRoomNo">{item.roomno}</p>
                    <p className="bookRoomNo">{item.seatno} Seats</p>
                    {generateTimeSlot(item.slot1, () => bookSlot("8.00-9:15", item.day, item.seatno, item.roomno, 1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot1"))}
                    {generateTimeSlot(item.slot2, () => bookSlot("9.15-10.30", item.day, item.seatno, item.roomno, item.slot1, 1, item.slot3, item.slot4, item.slot5, item.slot6, item.slot7, "slot2"))}
                    {generateTimeSlot(item.slot3, () => bookSlot("10.30-11.45", item.day, item.seatno, item.roomno, item.slot1, item.slot2, 1, item.slot4, item.slot5, item.slot6, item.slot7, "slot3"))}
                    {generateTimeSlot(item.slot4, () => bookSlot("11.45-1.00", item.day, item.seatno, item.roomno, item.slot1,item.slot2, item.slot3, 1, item.slot5, item.slot6, item.slot7, "slot4"))}
                    {generateTimeSlot(item.slot5, () => bookSlot("1.00-2.30", item.day, item.seatno, item.roomno, item.slot1,item.slot2, item.slot3, item.slot4, 1, item.slot6, item.slot7, "slot5"))}
                    {generateTimeSlot(item.slot6, () => bookSlot("2.30-3.45", item.day, item.seatno, item.roomno, item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, 1, item.slot7, "slot6"))}
                    {generateTimeSlot(item.slot7, () => bookSlot("3.45-5.00", item.day, item.seatno, item.roomno, item.slot1, item.slot2, item.slot3, item.slot4, item.slot5, item.slot6, 1, "slot7"))}
                </div>
            ))} */}
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