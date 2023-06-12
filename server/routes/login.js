const express = require('express');
const router = express.Router();
const db = require('../db');

//login
router.post("/", (req,res)=>{
    const username= req.body.username;
    const password= req.body.password;
    
    var mod = 1e9 + 7;
    var base = 11;
    var cur = 1, hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = (hash + cur * password.charCodeAt(i));
        //console.log(hash);
        cur = (cur * base) % mod;
    }
    const hashh=hash;

    logg=1;
    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username,hashh],
        (err,result) =>{
            if(err){
                console.log("why");
                console.log(err);
            }
            if(result.length>0){
                console.log("ok");
                console.log("ok");
                res.send(result[0].dept);
            }
            else{
                console.log("not ok");
                res.send({message:"0"});    
            }
        }
    );
});

module.exports = router;

//admin login
// app.post("/adminlog", (req,res)=>{
//     const adminname="shoto"
//     const adminpass="shoto12"
//     const username= req.body.username;
//     const password= req.body.password;
    
//     if(adminname == username && adminpass == password){
//         console.log("ok");
//         res.send({message:"admin"}); 
//     }
//     else{
//         console.log("not ok");
//         res.send({message:"0"});  
//     }
    
// });
