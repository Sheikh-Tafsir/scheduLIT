const express = require('express');
const router = express.Router();
const db = require('../db');

//book day
router.post("/", (req,res)=>{
    const bookday=req.body.bookday;
    const bookdate=req.body.bookdatee;
    const dept=req.body.dept;

    const sqlQuery=`SELECT *
    FROM loginsystem.roombook
    WHERE day = '${bookday}' AND date = '${bookdate}'
        AND roomno IN (
            SELECT roomno
            FROM loginsystem.roomroutine
            WHERE day = '${bookday}'
        )
    UNION ALL
    SELECT *
    FROM loginsystem.roomroutine
    WHERE day = '${bookday}'
        AND roomno NOT IN (
            SELECT roomno
            FROM loginsystem.roombook
            WHERE day = '${bookday}' AND date = '${bookdate}' AND dept = '${dept}'
        );
    `
    db.query(
        sqlQuery,
        (err,result) =>{
            if(err){
                console.log("database error for bookday");
                res.status(500).json({ error: 'Database error' });
            }
            else{
                console.log("rooms for that day found");
                //console.log(result);
                res.send(result);    
            }
        }
    );
});

module.exports = router;