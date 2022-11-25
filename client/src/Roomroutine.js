import React, { useState } from 'react'
import Axios from 'axios';
import {FaTrashAlt} from 'react-icons/fa'
import Adminmenusrvc from './Adminmenusrvc';

const Roomroutine = () => {
    const [roomroutine1,setRoomroutine1] = useState([]);
    const [roomroutine2,setRoomroutine2] = useState([]);
    const [roomroutine3,setRoomroutine3] = useState([]);
    const [roomroutine4,setRoomroutine4] = useState([]);
    const [roomroutine5,setRoomroutine5] = useState([]);

    const options = ["301", "302", "303", "304", "105", "106"];
    const [chooseroom,setChooseroom] = useState(options[0]);

    window.addEventListener("load",()=>loadroomroutine("301"));
    const loadroomroutine = (roomno) =>{
        //alert(roomno);
        Axios.post('http://localhost:3001/viewroomroutine',{
            val:1,
            roomno:roomno,
            day:'Mon',
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
            setRoomroutine1(response.data);
        });

        Axios.post('http://localhost:3001/viewroomroutine',{
            val:1,
            roomno:roomno,
            day:'Tue',
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
            setRoomroutine2(response.data);
        });

        Axios.post('http://localhost:3001/viewroomroutine',{
            val:1,
            roomno:roomno,
            day:'Wed',
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
            setRoomroutine3(response.data);
        });

        Axios.post('http://localhost:3001/viewroomroutine',{
            val:1,
            roomno:roomno,
            day:'Thu',
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
            setRoomroutine4(response.data);
        });

        Axios.post('http://localhost:3001/viewroomroutine',{
            val:1,
            roomno:roomno,
            day:'Fri',
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
            setRoomroutine5(response.data);
        });
    };

    const updateRoutine = () => {
        let routine_roomno="";
        let routine_day="";
        let routine_slot1="";
        let routine_slot2="";
        let routine_slot3="";
        let routine_slot4="";
        let routine_slot5="";
        let routine_slot6="";
        let routine_slot7="";
        //alert(JSON.stringify(roomroutine1));
         //monday
        roomroutine1.map((item, index) => {
            routine_roomno=item.roomno;
            routine_day=item.day;
            routine_slot1=item.slot1;
            routine_slot2=item.slot2;
            routine_slot3=item.slot3;
            routine_slot4=item.slot4;
            routine_slot5=item.slot5;
            routine_slot6=item.slot6;
            routine_slot7=item.slot7;
        })
        //alert("a");
        Axios.post('http://localhost:3001/updateroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/updateroombookroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/deletebookroom',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
        }).then((response) =>{
        });


        //tuesday
        roomroutine2.map((item, index) => {
            routine_roomno=item.roomno;
            routine_day=item.day;
            routine_slot1=item.slot1;
            routine_slot2=item.slot2;
            routine_slot3=item.slot3;
            routine_slot4=item.slot4;
            routine_slot5=item.slot5;
            routine_slot6=item.slot6;
            routine_slot7=item.slot7;
        })
        //alert("a");
        Axios.post('http://localhost:3001/updateroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/updateroombookroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/deletebookroom',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
        }).then((response) =>{
        });


        //wednesday
        roomroutine3.map((item, index) => {
            routine_roomno=item.roomno;
            routine_day=item.day;
            routine_slot1=item.slot1;
            routine_slot2=item.slot2;
            routine_slot3=item.slot3;
            routine_slot4=item.slot4;
            routine_slot5=item.slot5;
            routine_slot6=item.slot6;
            routine_slot7=item.slot7;
        })
        //alert("a");
        Axios.post('http://localhost:3001/updateroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/updateroombookroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/deletebookroom',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
        }).then((response) =>{
        });


        //thursday
        roomroutine4.map((item, index) => {
            routine_roomno=item.roomno;
            routine_day=item.day;
            routine_slot1=item.slot1;
            routine_slot2=item.slot2;
            routine_slot3=item.slot3;
            routine_slot4=item.slot4;
            routine_slot5=item.slot5;
            routine_slot6=item.slot6;
            routine_slot7=item.slot7;
        })
        Axios.post('http://localhost:3001/updateroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/updateroombookroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/deletebookroom',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
        }).then((response) =>{
        });


        //friday
        roomroutine5.map((item, index) => {
            routine_roomno=item.roomno;
            routine_day=item.day;
            routine_slot1=item.slot1;
            routine_slot2=item.slot2;
            routine_slot3=item.slot3;
            routine_slot4=item.slot4;
            routine_slot5=item.slot5;
            routine_slot6=item.slot6;
            routine_slot7=item.slot7;
        })
        //alert("a");
        Axios.post('http://localhost:3001/updateroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });

        Axios.post('http://localhost:3001/updateroombookroutine',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
            routine_slot1:routine_slot1,
            routine_slot2:routine_slot2,
            routine_slot3:routine_slot3,
            routine_slot4:routine_slot4,
            routine_slot5:routine_slot5,
            routine_slot6:routine_slot6,
            routine_slot7:routine_slot7,
        }).then((response) =>{
        });
        
        Axios.post('http://localhost:3001/deletebookroom',{
            routine_roomno:routine_roomno,
            routine_day:routine_day,
        }).then((response) =>{
        });


        document.querySelector(".insrtstat").classList.add("insrtstat-tog");
    };

    //close status
    const closestat = () => {
        document.querySelector(".insrtstat").classList.remove("insrtstat-tog");
    }


  return (
    <div className="roomroutine">
        <Adminmenusrvc></Adminmenusrvc>
        <h2>Roomroutine</h2>
        <label htmlFor="chooseroom">Choose room: </label>
        <select name="chooseroom" class="chooseroom" onChange={(event) => /*setChooseroom(event.target.value)*/ {/*setChooseroom(event.target.value),*/loadroomroutine(event.target.value)}} defaultValue={chooseroom}>
                    {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                    ))}
        </select>
        <div className="roomroutinepnt roomroutinepnthd">
            <p>Sl.</p>
            <p>Day</p> 
            <p>Roomno</p> 
            <input type="text" value="slot1" name="slot1"/>
            <input type="text" value="slot2" name="slot2"/>
            <input type="text" value="slot3" name="slot3"/>
            <input type="text" value="slot4" name="slot4"/>
            <input type="text" value="slot5" name="slot5"/>
            <input type="text" value="slot6" name="slot6"/>
            <input type="text" value="slot7" name="slot7"/>    
        </div>

            {roomroutine1.map((item, index) => {
                return <div>
                    <div key={index} className="roomroutinepnt" >
                        <p>1.</p>
                        <p>{item.day} </p> 
                        <p>{item.roomno} </p> 
                        <input type="text" value={item.slot1} name="slot1" onChange={(event) => {setRoomroutine1([{'index':1,'roomno':301,'day':item.day,'slot1':event.target.value,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot2} name="slot2" onChange={(event) => {setRoomroutine1([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':event.target.value,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot3} name="slot3" onChange={(event) => {setRoomroutine1([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':event.target.value,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot4} name="slot4" onChange={(event) => {setRoomroutine1([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':event.target.value,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot5} name="slot5" onChange={(event) => {setRoomroutine1([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':event.target.value,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot6} name="slot6" onChange={(event) => {setRoomroutine1([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':event.target.value,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot7} name="slot7" onChange={(event) => {setRoomroutine1([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':event.target.value}]);}}/>    
                    </div>
                </div>
            })}


            {roomroutine2.map((item, index) => {
                return <div>
                    <div key={index} className="roomroutinepnt">
                        <p>2.</p>
                        <p>{item.day} </p> 
                        <p>{item.roomno} </p> 
                        <input type="text" value={item.slot1} name="slot1" onChange={(event) => {setRoomroutine2([{'index':1,'roomno':301,'day':item.day,'slot1':event.target.value,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot2} name="slot2" onChange={(event) => {setRoomroutine2([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':event.target.value,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot3} name="slot3" onChange={(event) => {setRoomroutine2([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':event.target.value,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot4} name="slot4" onChange={(event) => {setRoomroutine2([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':event.target.value,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot5} name="slot5" onChange={(event) => {setRoomroutine2([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':event.target.value,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot6} name="slot6" onChange={(event) => {setRoomroutine2([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':event.target.value,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot7} name="slot7" onChange={(event) => {setRoomroutine2([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':event.target.value}]);}}/>    
                    </div>
                </div>
            })}

            {roomroutine3.map((item, index) => {
                return <div>
                    <div key={index} className="roomroutinepnt">
                        <p>3.</p>
                        <p>{item.day} </p> 
                        <p>{item.roomno} </p> 
                        <input type="text" value={item.slot1} name="slot1" onChange={(event) => {setRoomroutine3([{'index':1,'roomno':301,'day':item.day,'slot1':event.target.value,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot2} name="slot2" onChange={(event) => {setRoomroutine3([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':event.target.value,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot3} name="slot3" onChange={(event) => {setRoomroutine3([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':event.target.value,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot4} name="slot4" onChange={(event) => {setRoomroutine3([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':event.target.value,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot5} name="slot5" onChange={(event) => {setRoomroutine3([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':event.target.value,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot6} name="slot6" onChange={(event) => {setRoomroutine3([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':event.target.value,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot7} name="slot7" onChange={(event) => {setRoomroutine3([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':event.target.value}]);}}/>    
                    </div>
                </div>
            })}


            {roomroutine4.map((item, index) => {
                return <div>
                    <div key={index} className="roomroutinepnt">
                        <p>4.</p>
                        <p>{item.day} </p> 
                        <p>{item.roomno} </p> 
                        <input type="text" value={item.slot1} name="slot1" onChange={(event) => {setRoomroutine4([{'index':1,'roomno':301,'day':item.day,'slot1':event.target.value,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot2} name="slot2" onChange={(event) => {setRoomroutine4([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':event.target.value,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot3} name="slot3" onChange={(event) => {setRoomroutine4([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':event.target.value,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot4} name="slot4" onChange={(event) => {setRoomroutine4([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':event.target.value,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot5} name="slot5" onChange={(event) => {setRoomroutine4([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':event.target.value,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot6} name="slot6" onChange={(event) => {setRoomroutine4([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':event.target.value,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot7} name="slot7" onChange={(event) => {setRoomroutine4([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':event.target.value}]);}}/>    
                    </div>
                </div>
            })}


            {roomroutine5.map((item, index) => {
                return <div>
                    <div key={index} className="roomroutinepnt">
                        <p>5.</p>
                        <p>{item.day} </p> 
                        <p>{item.roomno} </p> 
                        <input type="text" value={item.slot1} name="slot1" onChange={(event) => {setRoomroutine5([{'index':1,'roomno':301,'day':item.day,'slot1':event.target.value,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot2} name="slot2" onChange={(event) => {setRoomroutine5([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':event.target.value,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot3} name="slot3" onChange={(event) => {setRoomroutine5([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':event.target.value,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot4} name="slot4" onChange={(event) => {setRoomroutine5([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':event.target.value,'slot5':item.slot5,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot5} name="slot5" onChange={(event) => {setRoomroutine5([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':event.target.value,'slot6':item.slot6,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot6} name="slot6" onChange={(event) => {setRoomroutine5([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':event.target.value,'slot7':item.slot7}]);}}/>
                        <input type="text" value={item.slot7} name="slot7" onChange={(event) => {setRoomroutine5([{'index':1,'roomno':301,'day':item.day,'slot1':item.slot1,'slot2':item.slot2,'slot3':item.slot3,'slot4':item.slot4,'slot5':item.slot5,'slot6':item.slot6,'slot7':event.target.value}]);}}/>    
                    </div>
                </div>
            })}
            <button onClick={() => updateRoutine()}>Save</button>

            <div className="insrtstat deletestat">
                <p>Routine Modified</p>
                <button onClick={()=>closestat()}>done</button>
            </div>
    </div>
  )
}

export default Roomroutine