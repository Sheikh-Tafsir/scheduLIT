import React, { useState } from 'react'
import Axios from 'axios';

const Bookslot = () => {
    const [employeeList,setEmployeeList] = useState([]);
    const bookSlot = () => {
        alert("hu");
        Axios.post('http://localhost:3001/bookslot',{
            bookdayy:"0",
        }).then((response) =>{
            setEmployeeList(response);
            alert(response);
        });
    };
  return (
    <div onLoad={() => bookSlot()}>
        <h1>hello</h1>
        <h1>{employeeList}</h1>
    </div>
  )
}

export default Bookslot