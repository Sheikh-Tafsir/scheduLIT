const express = require('express');
const router = express.Router();
const db = require('../db');

//sign up
router.post("/", (req,res)=>{
    console.log(req.body.username);
    console.log(req.body.password);
    const username= req.body.username;
    const iid= req.body.iid;
    const dept= req.body.dept;
    const password= req.body.password;

    var mod = 1e9 + 7;
    var base = 11;
    var cur = 1, hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = (hash + cur * password.charCodeAt(i));
        //console.log(hash);
        cur = (cur * base) % mod;
    }
    const hashh=hash
    
    tomail=username;
    db.query(
        "INSERT INTO users (username,iid,dept,password) VALUES (?,?,?,?)",
        [username,iid,dept,hashh],
        (err,result) =>{
            if(err){
                console.log(err);
                res.send({message:"0"});
            }
            else{
                //res.send("value inserted");
                res.send({message:"value inserted"});
                
                const sendMail = async (msg) => {
                    try{
                        await sgMail.send(msg);
                        console.log("Message sent succesfully!");
                    }
                    catch(error){
                        console.log(error);
                        if(error.response){
                            console.error(error.response.body);
                        }
                    }
                };
                sendMail({
                    to:username,
                    from:"teamschedulit@gmail.com",
                    subject: "ScheduLIT",
                    text:"Useremail: " + username + "    password: " + password,
                });
            }
        }
    );
    
});

module.exports = router;