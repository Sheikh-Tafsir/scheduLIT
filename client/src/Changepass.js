import React, {useState} from 'react'
import Authorization from './Authorization';
import {Routes, Route, Link} from "react-router-dom";
import Axios from 'axios';

import {RiLockPasswordFill} from 'react-icons/ri'


const Changepass = () => {
    const [usernameforget, setUsernameforget] = useState("");
    const [passchange, setPasschange] = useState("");
    const [forgetStatus, setForgetStatus] = useState("");
    let usrname=localStorage.getItem("usrname");

    const forgetEmployee = () => {
        //alert(first3+last3);
        alert(passchange.length);
        if(passchange.length<8){
            setForgetStatus("password atleast 8 characters");
        }
        else{
            Axios.post('http://localhost:3001/changepass',{
                username:usrname,
                password:passchange,
            }).then((response) =>{
                //alert(response.data.message);
                //alert(response.data.message);
                if(response.data.message=="0")setForgetStatus("not found");
                else{
                    setForgetStatus("password changed");
                    window.location.href = "/dash";
                    /*setPasswordforget(response.data.message);
                    document.querySelector("#regMailName").value =usernameforget;
                    document.querySelector("#regMailPass").value =response.data.message ;
                    document.querySelector("#regMailSub").click();*/
                }
                //console.log("success");
            });
        }
        document.querySelector(".forgetfrm").reset();
        //alert("succ");
    };
  return (
    <div className="forgetpass">
        <div className="forgetpassword" >
            {/*<img src="https://blush-design.imgix.net/collections/croods/693c6d1d-030b-425f-a705-24a70586f166.png?w=800&auto=compress&cs=srgb" alt="abc"></img>*/}
            <form className="forgetfrm">
                <h2>Change Password</h2>
                <label htmlFor="name"><RiLockPasswordFill/> New password: </label><br/>
                <input type="email" id="name" name="name" placeholder="Insert new password" onChange={(event) => {setPasschange(event.target.value);} }/><br/>
                <p>{forgetStatus}</p>
                <h3 className="forgetfrmbut" onClick={forgetEmployee} type="submit">Submit</h3>
                <a href='/dash'>Go back to profile?</a>
            </form>

        </div>
    </div>
    )
}

export default Changepass