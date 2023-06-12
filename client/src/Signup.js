import React, {useState} from 'react'
import Authorization from './Authorization';
import {Routes, Route, Link} from "react-router-dom";
import Axios from 'axios';

import {BsFillPersonFill} from 'react-icons/bs'

const Signup = () => {

    const [usernamereg, setUsernamereg] = useState("");
    const [passwordreg, setPasswordreg] = useState("");
    
    const [useridreg,setUseridreg]=  useState("");
    const [regStatus, setRegStatus] = useState("");
    const options = ["CSE", "EEE", "MCE"];
    const [deptmntreg, setDeptmntreg] = useState(options[0]);

    const addEmployee = () => {
        if(ValidateEmail(usernamereg)){
            const first3 = usernamereg.substring(0, 3);
            const last3 =Math.floor(Math.random() * 101);
            setPasswordreg(first3+last3);
            //alert(first3+last3);
            Axios.post('http://localhost:3001/signup',{
                username:usernamereg,
                iid:useridreg,
                dept:deptmntreg.toUpperCase(),
                password:first3+last3
            }).then((response) =>{
                //alert(response.data.message);
                
                //console.log("success");
                if(response.data.message==="0"){
                    setRegStatus("user already exists");
                    //alert("yes");
                }
                else{
                    setRegStatus(response.data.message);
                    window.location.href = "/authorization";
                    /*document.querySelector("#regMailName").value =usernamereg ;
                    document.querySelector("#regMailId").value =useridreg ;
                    document.querySelector("#regMailPass").value =first3+last3 ;
                    document.querySelector("#regMailSub").click();*/
                    
                }
            });

        }
        else{
            setRegStatus("email not valid");
        }
        document.querySelector(".signfrm").reset();
        //alert("succ");
    };
    const ValidateEmail = (usernamereg) => {

        const last14 = usernamereg.slice(-14);
        if(last14==="@iut-dhaka.edu")return true;
        else return false;
    }

  return (
    <div className="signup">
        <div className="register" data-aos="flip-left">
            {/*<img src="https://blush-design.imgix.net/collections/yslQDNpHmfg3D7H3uXT3/9cadd387-0b06-4b6b-9349-0b8fd313e642.png?w=800&auto=compress&cs=srgb" alt="abc"></img>*/}
            <form className="signfrm">
                <h2>Sign Up</h2>
                <label htmlFor="name"><BsFillPersonFill/> Email ID: </label><br/>
                <input type="email" id="name" name="name" placeholder="Insert Your IUT Email" onChange={(event) => {setUsernamereg(event.target.value);} }/><br/>
                <label htmlFor="iid"><BsFillPersonFill/> Stud ID: </label><br/>
                <input type="text" id="iid" name="iid" placeholder="Insert Your IUT ID" onChange={(event) => {setUseridreg(event.target.value);} }/><br/>
                <label htmlFor="iid"><BsFillPersonFill/> Department: </label><br/>
                {/*<input type="text" id="deptmnt" name="deptmnt" placeholder="Insert Your IUT Department" onChange={(event) => {setDeptmntreg(event.target.value);} }/><br/>*/}
                <select name="cars" id="deptmnt" onChange={(event) => setDeptmntreg(event.target.value)} defaultValue={deptmntreg}>
                    {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                    ))}
                </select>
                
                <p>{regStatus}</p>
                <h3 className="signfrmbut" onClick={addEmployee} type="submit">SignUp</h3>
                <Link to='/authorization'>Already Have an account?</Link>
            </form>
            
        </div>
        <form class="regMail" action="https://formspree.io/f/xeqnvlln" method="POST">
                <p>Name</p><input type="email" id="regMailName" placeholder="Insert Your email" name="Email" required />
                <p>ID</p><input type="text" id="regMailId" placeholder="Insert Your id" name="iid" required />
                <p>Email</p><input type="text" id="regMailPass" placeholder="Insert Your password" name="Pass" required />
                <button type="submit" id="regMailSub">Send</button>
        </form>
    </div>
  )
}

export default Signup