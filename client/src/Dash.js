import React, {useState} from 'react'
import Axios from 'axios';
import Menusrvc from './Menusrvc';

const Dash = () => {
    const [username, setUsername] = useState("");
    const [userdata, setUserdata] = useState([]);
    let usrname=localStorage.getItem("usrname");

    window.addEventListener("load",function(){
      //alert(usrname);
      Axios.post('http://localhost:3001/dash',{
          usermail:usrname,
      }).then((response) =>{
          setUserdata(response.data);
          //alert(JSON.stringify(response.data));
      });
  });
  return (
    <div className="dash">
        <Menusrvc></Menusrvc>
        {/*<form  method="post">
            <h2 >Personal Info</h2>
            <label htmlFor="name"> Name: </label>
            <input type="email" id="name" name="name" placeholder="Insert Your IUT Email" onChange={(event) => {setUsername(event.target.value);}}/><br/>
            <label htmlFor="name"> User Mail: </label><br/>
            <label htmlFor="pass">Pass: </label><br/>
            <button type="submit">Saved</button>
            
        </form>*/}
        <h2>Personal Info</h2>
        <div className="dashfrm">
            
            <img src="https://i1.sndcdn.com/avatars-LH92hC7SFmybsuap-ChJvVg-t500x500.jpg"></img>
            <h3>Shoto Todoroki</h3>
            {userdata.map((item, index) => {
                return <div className="dashfrmstat">
                        <div key={index} >
                            
                            <h3>Email: </h3>
                            <p >{item.username} </p><br/>
                            <h3>ID: </h3>
                            <p >{item.iid} </p> <br/>
                            <h3>Department: </h3>
                            <p >CSE </p> <br/>
                            <h3>Password: </h3>
                            <p >{item.password} </p><br/>
                        </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Dash