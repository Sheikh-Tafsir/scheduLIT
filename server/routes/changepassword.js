const express = require('express');
const router = express.Router();
const db = require('../db');

//change pass
router.post("/", (req,res)=>{
    console.log(req.body.username);
    const username = req.body.username;
    const password = req.body.password;

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
        //"SELECT password FROM users WHERE username = ?",
        "UPDATE users SET password = ? WHERE username = ?",
        [hashh,username],
        (err,result) =>{
            //console.log(result[0]);
            if(err){
                console.log("why");
                res.send({message:err});
            }
            else{
                res.send("password sent");

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