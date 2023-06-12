const express = require('express');
const router = express.Router();
const db = require('../db');

//book slot time
router.post("/", (req,res)=>{
    const day =req.body.day; 
    const date=req.body.date;
    const roomno=req.body.roomno;
    const slot1=req.body.slot1;
    const slot2=req.body.slot2;
    const slot3=req.body.slot3;
    const slot4=req.body.slot4;
    const slot5=req.body.slot5;
    const slot6=req.body.slot6;
    const slot7=req.body.slot7;
    const dept=req.body.dept;
    const seatno=req.body.seatno;
    // console.log( roomno +" "+ date +" "+ day +" slot1:"+ slot1 +" slot2:"+ slot2 +" slot3:"+ slot3 +" slot4:"+ slot4 +" slot5:"+ slot5 +" slot6:"+ slot6 +" slot7:"+ slot7 +" "+ dept +" "+ seatno)

    const sqlStatement = `
        INSERT INTO roombook (roomno, date, day, slot1, slot2, slot3, slot4, slot5, slot6, slot7, dept, seatno)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
        roomno = VALUES(roomno),
        date = VALUES(date),
        day = VALUES(day),
        slot1 = VALUES(slot1),
        slot2 = VALUES(slot2),
        slot3 = VALUES(slot3),
        slot4 = VALUES(slot4),
        slot5 = VALUES(slot5),
        slot6 = VALUES(slot6),
        slot7 = VALUES(slot7),
        dept = VALUES(dept),
        seatno = VALUES(seatno)
    `;

    db.query(
        sqlStatement,
        [roomno, date, day, slot1, slot2, slot3, slot4, slot5, slot6, slot7, dept, seatno],
        (err,result) =>{
            if(err){
                console.log(err);
                res.status(500).json({ error: 'Database error' });
            }
            else{
                //console.log("inserted bookslot");
                res.send({message:"ok"});    
            }
        }
    );
});

module.exports = router;