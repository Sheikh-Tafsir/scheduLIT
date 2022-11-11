import React, {useState} from 'react';
import Axios from 'axios';
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'

const Adminlogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const getEmployee = () => {
        //alert("yess");
        localStorage.setItem(username,password);
        Axios.post('http://localhost:3001/adminlog',{
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
                window.open("/userview", "_top");
            }
        });
        //alert("succc");
        document.querySelector(".logfrm").reset();
    };

  return (
    <div className="authorization" >
        <div className="lgn" data-aos="flip-right">
            <form className="logfrm">
                <h2>Admin Log In</h2>
                <label htmlFor="name"><BsFillPersonFill/> Email: </label><br/>
                <input type="email" id="name" name="name" placeholder="Insert Your Email" onChange={(event) => {setUsername(event.target.value);}}/><br/>
                <label htmlFor="pass"><RiLockPasswordFill/> Password: </label><br/>
                <input type="password" id="pass" name="pass" placeholder="Insert Your Password" onChange={(event) => {setPassword(event.target.value);}}/><br/>
                <p>{loginStatus}</p>
                <h3  className="logfrmbut" onClick={getEmployee}>LogIn</h3><br/>
                <a href="/authorization" id="log2reg">LogIn as User? </a>
                
                
            </form>   
        </div>
          
    </div>
  )
}

export default Adminlogin