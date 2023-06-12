import React, {useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'


const Authorization = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    
    // let usrname=localStorage.getItem("usrname");
    // let loggedstat=localStorage.getItem("loggedstat");
    // let deptstat=localStorage.getItem("deptstat");
  

    const handleLogin = () => {
        // alert(username +" "+ password);
        
        if(username === "shoto" && password === "shoto12"){
            setLoginStatus("logging in");
            localStorage.setItem("usrname",username);
            localStorage.setItem("loggedstat",1);
            localStorage.setItem("deptstat","Admin");
            window.location.href = '/adminservice';
        }
        else{        
            Axios.post('http://localhost:3001/login',{
                username:username,
                password:password
            }).then((response) =>{
                if(response.data.message === "0"){
                    setLoginStatus("Wrong id or password");
                }
                else{
                    setLoginStatus("logging in");
                    localStorage.setItem("usrname",username);
                    localStorage.setItem("loggedstat",1);
                    localStorage.setItem("deptstat",response.data);
                    window.open("/", "_top");
                }
            });
        }

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
                <Link to="/forgetpass" className="frgtps">Forgot password?</Link>
                {/* <Link to="/admnlgn" className="log2admn">Login as admin</Link> */}
                <p>{loginStatus}</p>
                <h3  className="logfrmbut" onClick={()=>handleLogin()} >LogIn</h3><br/> 
                <Link to="/signup" id="log2reg">Don't Have an account? SignUp </Link><br/>
                
            </form>   
            
        </div>
        
    </div>
    
    
  )
}

export default Authorization