import React, {useState} from 'react';
import Axios from 'axios';
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'
/*import Homapage from './Homapage'
import Forgetpass from './Forgetpass';
import {Routes, Route, Link} from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import $, { event } from "jquery";*/

const Authorization = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    
    let usrname=localStorage.getItem("usrname");
    let loggedstat=localStorage.getItem("loggedstat");
    let deptstat=localStorage.getItem("deptstat");
    //localStorage.setItem("loggedstat",0);
  
    const displayInfo = () => {
        console.log(username + password);
        alert(username + password);
    }

    const getEmployee = () => {
        //alert("yess");
        localStorage.setItem("usrname",username);
        Axios.post('http://localhost:3001/log',{
            username:username,
            password:password
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
            //setLoginStatus((response.data));
            //alert(response.data.message);
            if(response.data.message === "0"){
                setLoginStatus("Wrong id or password");
            }
            //if(response.data.message!="wrong username/password"){
            else{
                setLoginStatus("logging in");
                localStorage.setItem("loggedstat",1);
                localStorage.setItem("deptstat",response.data);
                /*let loggedstat=localStorage.getItem("loggedstat");
                alert("1 " + loggedstat);
                alert("1user " + usrname);*/
                window.open("/", "_top");
            }
        });
        //alert("succc");
        document.querySelector(".logfrm").reset();
    };

    const getMail = () => {
        
    };

  return (
    <div className="authorization" >
        <div className="lgn" data-aos="flip-right">
            {/*<img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="abc"></img>*/}
            <form className="logfrm">
                <h2>Log In</h2>
                <label htmlFor="name"><BsFillPersonFill/> Email: </label><br/>
                <input type="email" id="name" name="name" placeholder="Insert Your Email" onChange={(event) => {setUsername(event.target.value);}}/><br/>
                <label htmlFor="pass"><RiLockPasswordFill/> Password: </label><br/>
                <input type="password" id="pass" name="pass" placeholder="Insert Your Password" onChange={(event) => {setPassword(event.target.value);}}/><br/>
                <a href="/forgetpass" className="frgtps">Forgot password?</a>
                <a href="/admnlgn" className="log2admn">Login as admin</a>
                <p>{loginStatus}</p>
                <h3  className="logfrmbut" onClick={getEmployee}>LogIn</h3><br/>
                <a href="/signup" id="log2reg">Don't Have an account? SignUp </a><br/>
                
            </form>   
            
        </div>
        
    </div>
    
    
  )
}

export default Authorization