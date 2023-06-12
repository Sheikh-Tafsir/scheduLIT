const express = require('express');
const router = express.Router();
const db = require('../db');

//save booked day
router.post("/", (req,res)=>{
    const time=req.body.time;
    const day =req.body.day; 
    const date=req.body.date;
    const roomno=req.body.roomno;
    const slot=req.body.slot;
    const usrname=req.body.usrname;
    const oldslot=req.body.oldslot;

    db.query(
        "INSERT INTO bookedroom (roomno,date,day,slotno,email,time,oldslot) VALUES (?,?,?,?,?,?,?)",
        [roomno,date,day,slot,usrname,time,oldslot],
        (err,result) =>{
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                //console.log("inserted bookedroom");
                res.send({message:"value inserted"});
            }
        }
    );
});

//admin checks all booked slots
router.post("/checkbookings", (req,res)=>{
    const usermail=req.body.usermail;
    db.query(
        "SELECT * FROM bookedroom",
        (err,result) =>{
            if(err){
                console.log("why");
                console.log(err);
            }
            else{
                console.log("ok");
                //let abc=result[0]
                console.log(result);
                res.send(result);    
            }
        }
    );
});

module.exports = router;