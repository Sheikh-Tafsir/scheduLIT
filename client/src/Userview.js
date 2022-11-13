import React, {useState} from 'react'
import Axios from 'axios';
import {FaTrashAlt} from 'react-icons/fa'
import Adminmenusrvc from './Adminmenusrvc';

const Userview = () => {
    const [userdata, setUserdata] = useState([]);
    
   

    window.addEventListener("load",function(){
        //alert(usrname);
        Axios.post('http://localhost:3001/alluserview',{
            usermail:"1",
        }).then((response) =>{
            setUserdata(response.data);
            //alert(JSON.stringify(response.data));
        });
    });
    
    const deleteuser = (username) => {
        //alert(username);
        Axios.post('http://localhost:3001/deleteuser',{
            usermail:username,
        }).then((response) =>{
            
            //alert(JSON.stringify(response.data));
        });
        window.location.reload(false);
        //setDeletestat("deleted");   
    };
  return (
    <div className="uservw">
        <Adminmenusrvc></Adminmenusrvc>
        <h2>All User Data</h2>
        <div className="alluserdt" >
            <div className="viewalluserdt" id="viewalluserdt">
                <p className="viewalluserdtpnt1">User email</p>
                <p className="viewalluserdtpnt2">ID</p>
                <p className="viewalluserdtpnt3">Dept</p>
                <p className="viewalluserdtpnt4">Delete</p>
            </div>
            {userdata.map((item, index) => {
                return <div>
                        <div key={index} className="viewalluserdt">
                            <p className="viewalluserdtpnt1">{item.username} </p>
                            <p className="viewalluserdtpnt2">{item.iid} </p>
                            <p className="viewalluserdtpnt3">{item.dept} </p> 
                            <p className="viewalluserdtpnt4" onClick={()=>deleteuser(item.username)}> <FaTrashAlt className="checkbookpnt7_icon"></FaTrashAlt> </p>
                        </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Userview