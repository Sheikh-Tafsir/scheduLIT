import React, {useState} from 'react'
import Authorization from './Authorization';
import {Routes, Route, Link} from "react-router-dom";
import Axios from 'axios';

import {BsFillPersonFill} from 'react-icons/bs'

const Forgetpass = () => {
    const [usernameforget, setUsernameforget] = useState("");
    const [passwordforget, setPasswordforget] = useState("");
    const [forgetStatus, setForgetStatus] = useState("");

    const forgetEmployee = () => {
        //alert(first3+last3);
        Axios.post('http://localhost:3001/forget',{
            username:usernameforget,
        }).then((response) =>{
            //alert(response.data.message);
            //alert(response.data.message);
            if(response.data.message=="0")setForgetStatus("not found");
            else{
                setForgetStatus("found");
                setPasswordforget(response.data.message);
                document.querySelector("#regMailName").value =usernameforget;
                document.querySelector("#regMailPass").value =response.data.message ;
                document.querySelector("#regMailSub").click();
            }
            //console.log("success");
        });
        document.querySelector(".forgetfrm").reset();
        //alert("succ");
    };
  return (
    <div className="forgetpass">
        <div className="forgetpassword" data-aos="zoom-in">
            {/*<img src="https://blush-design.imgix.net/collections/croods/693c6d1d-030b-425f-a705-24a70586f166.png?w=800&auto=compress&cs=srgb" alt="abc"></img>*/}
            <form className="forgetfrm">
                <h2>Forget Password</h2>
                <label htmlFor="name"><BsFillPersonFill/> Email ID: </label><br/>
                <input type="email" id="name" name="name" placeholder="Insert Your IUT Email" onChange={(event) => {setUsernameforget(event.target.value);} }/><br/>
                <p>{forgetStatus}</p>
                <h3 className="forgetfrmbut" onClick={forgetEmployee} type="submit">Submit</h3>
                <a href='/authorization'>Remember password?</a>
            </form>
            <form class="regMail" action="https://formspree.io/f/myyvelnv" method="POST">
                <p>Name</p><input type="email" id="regMailName" placeholder="Insert Your email" name="Email" required />
                <p>Email</p><input type="text" id="regMailPass" placeholder="Insert Your password" name="Pass" required />
                <button type="submit" id="regMailSub">Send</button>
            </form>
        </div>
    </div>

  )
}

export default Forgetpass