const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');
//const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let logg=0;
let bookday="0"
let tomail="";
let attacmail="abcd";
//let userEm=null;

//app.use(bodyParser.urlencoded({extended: true}));

const db= mysql.createConnection({
    host:   'localhost',
    user: "taf",
    password: "taf30",
    database: "loginsystem"
    //insecureAuth : true
});

//sign up
app.post("/create", (req,res)=>{
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
                    from:"dev.teamroket@gmail.com",
                    subject: "ScheduLIT",
                    text:"Useremail: " + username + "    password: " + password,
                });
            }
        }
    );
    
});


//forget pass
app.post("/forget", (req,res)=>{
    console.log(req.body.username);
    const username = req.body.username;
    const password = "12345";

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
            /*else if(result[0]==undefined){
                res.send({message:"0"});
            }
            else{
                //res.send("value inserted");
                var pass = result[0].password;
                res.send({message: pass});
            }*/
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
                    from:"dev.teamroket@gmail.com",
                    subject: "ScheduLIT",
                    text:"Useremail: " + username + "    password: " + password,
                });
            }
        }
    );

});


//login
app.post("/log", (req,res)=>{
    //console.log(req.body.username);
    //console.log(req.body.password);
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
                //res.send({message:"ok"});
                //console.log(result[0].dept);
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

//admin login
app.post("/adminlog", (req,res)=>{
    const adminname="shoto"
    const adminpass="shoto12"
    const username= req.body.username;
    const password= req.body.password;
    
    if(adminname == username && adminpass == password){
        console.log("ok");
        res.send({message:"admin"}); 
    }
    else{
        console.log("not ok");
        res.send({message:"0"});  
    }
    
});

//select day
app.post("/bookday", (req,res)=>{
    const bookday=req.body.bookday;
    const bookdatee=req.body.bookdatee;
    const dept=req.body.deptstat;
    db.query(
        "SELECT * FROM roombook WHERE day = ? AND date = ? AND dept = ?",
        [bookday,bookdatee,dept],
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


//book slot time
app.post("/daybooked", (req,res)=>{
    const vtime=req.body.vtime;
    const vday =req.body.vday; 
    const vdate=req.body.vdate;
    const vroomno=req.body.vroomno;
    const vslot=req.body.vslot;
    const vduration=req.body.vduration;

    if(vslot=="slot1"){
        db.query(
            //"SELECT * FROM roombook WHERE roomno = ? AND day = ? AND date = ?",
            "UPDATE roombook SET slot1 = ? WHERE roomno = ? AND date = ? AND day = ?",
            [vduration,vroomno,vdate,vday],
            (err,result) =>{
                if(err){
                    console.log("whoo");
                    console.log(err);
                }
                else{
                    console.log("ok");
                    //let abc=result[0]
                    //console.log(result);
                    res.send({message:"ok"});    
                }
            }
        );
    }
    else if(vslot=="slot2"){
        db.query(
            //"SELECT * FROM roombook WHERE roomno = ? AND day = ? AND date = ?",
            "UPDATE roombook SET slot2 = ? WHERE roomno = ? AND date = ? AND day = ?",
            [vduration,vroomno,vdate,vday],
            (err,result) =>{
                if(err){
                    console.log("whoo");
                    console.log(err);
                }
                else{
                    console.log("ok");
                    //let abc=result[0]
                    //console.log(result);
                    res.send({message:"ok"});    
                }
            }
        );
    }
    else if(vslot=="slot3"){
        db.query(
            //"SELECT * FROM roombook WHERE roomno = ? AND day = ? AND date = ?",
            "UPDATE roombook SET slot3 = ? WHERE roomno = ? AND date = ? AND day = ?",
            [vduration,vroomno,vdate,vday],
            (err,result) =>{
                if(err){
                    console.log("whoo");
                    console.log(err);
                }
                else{
                    console.log("ok");
                    //let abc=result[0]
                    //console.log(result);
                    res.send({message:"ok"});    
                }
            }
        );
    }
    else if(vslot=="slot4"){
        db.query(
            //"SELECT * FROM roombook WHERE roomno = ? AND day = ? AND date = ?",
            "UPDATE roombook SET slot4 = ? WHERE roomno = ? AND date = ? AND day = ?",
            [vduration,vroomno,vdate,vday],
            (err,result) =>{
                if(err){
                    console.log("whoo");
                    console.log(err);
                }
                else{
                    console.log("ok");
                    //let abc=result[0]
                    //console.log(result);
                    res.send({message:"ok"});    
                }
            }
        );
    }
    else if(vslot=="slot5"){
        db.query(
            //"SELECT * FROM roombook WHERE roomno = ? AND day = ? AND date = ?",
            "UPDATE roombook SET slot5 = ? WHERE roomno = ? AND date = ? AND day = ?",
            [vduration,vroomno,vdate,vday],
            (err,result) =>{
                if(err){
                    console.log("whoo");
                    console.log(err);
                }
                else{
                    console.log("ok");
                    //let abc=result[0]
                    //console.log(result);
                    res.send({message:"ok"});    
                }
            }
        );
    }
    else if(vslot=="slot6"){
        db.query(
            //"SELECT * FROM roombook WHERE roomno = ? AND day = ? AND date = ?",
            "UPDATE roombook SET slot6 = ? WHERE roomno = ? AND date = ? AND day = ?",
            [vduration,vroomno,vdate,vday],
            (err,result) =>{
                if(err){
                    console.log("whoo");
                    console.log(err);
                }
                else{
                    console.log("ok");
                    //let abc=result[0]
                    //console.log(result);
                    res.send({message:"ok"});    
                }
            }
        );
    }
    else if(vslot=="slot7"){
        db.query(
            //"SELECT * FROM roombook WHERE roomno = ? AND day = ? AND date = ?",
            "UPDATE roombook SET slot7 = ? WHERE roomno = ? AND date = ? AND day = ?",
            [vduration,vroomno,vdate,vday],
            (err,result) =>{
                if(err){
                    console.log("whoo");
                    console.log(err);
                }
                else{
                    console.log("ok");
                    //let abc=result[0]
                    //console.log(result);
                    res.send({message:"ok"});    
                }
            }
        );
    }

});


//save booked day
app.post("/daybookedsaved", (req,res)=>{
    const vtime=req.body.vtime;
    const vday =req.body.vday; 
    const vdate=req.body.vdate;
    const vroomno=req.body.vroomno;
    const vslot=req.body.vslot;
    const vduration=req.body.vduration;
    const vusrname=req.body.vusrname;

    db.query(
        "INSERT INTO bookedroom (roomno,date,day,slotno,slot,email) VALUES (?,?,?,?,?,?)",
        [vroomno,vdate,vday,vslot,vduration,vusrname],
        (err,result) =>{
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                console.log("inserted");
                res.send({message:"value inserted"});
            }
        }
    );
});

//check booked slots
app.post("/checkbook", (req,res)=>{
    const usermail=req.body.usermail;
    db.query(
        "SELECT * FROM bookedroom WHERE email = ?",
        [usermail],
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

//delte booked slots from routine
app.post("/deletebookingrout", (req,res)=>{
    const vday =req.body.vday; 
    const vdate=req.body.vdate;
    const vroomno=req.body.vroomno;
    const vslot=req.body.vslot;
    console.log(vslot);
    if(vslot=="slot1"){
        console.log("taf1");
        db.query(
            "UPDATE roombook SET slot1 = '0' WHERE date=? AND roomno=?;",
            [vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log("why");
                    console.log(err);
                }
                else{
                    console.log("ok1");
                    //let abc=result[0]
                    console.log(result);
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot2"){
        db.query(
            "UPDATE roombook SET slot2 = '0' WHERE date=? AND roomno=?;",
            [vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log("why");
                    console.log(err);
                }
                else{
                    console.log("ok2");
                    //let abc=result[0]
                    console.log(result);
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot3"){
        db.query(
            "UPDATE roombook SET slot3 = '0' WHERE date=? AND roomno=?;",
            [vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log("why");
                    console.log(err);
                }
                else{
                    console.log("ok3");
                    //let abc=result[0]
                    console.log(result);
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot4"){
        db.query(
            "UPDATE roombook SET slot4 = '0' WHERE date=? AND roomno=?;",
            [vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log("why");
                    console.log(err);
                }
                else{
                    console.log("ok4");
                    //let abc=result[0]
                    console.log(result);
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot5"){
        db.query(
            "UPDATE roombook SET slot5 = '0' WHERE date=? AND roomno=?;",
            [vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log("why");
                    console.log(err);
                }
                else{
                    console.log("ok5");
                    //let abc=result[0]
                    console.log(result);
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot6"){
        db.query(
            "UPDATE roombook SET slot6 = '0' WHERE date=? AND roomno=?;",
            [vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log("why");
                    console.log(err);
                }
                else{
                    console.log("ok6");
                    //let abc=result[0]
                    console.log(result);
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot7"){
        db.query(
            "UPDATE roombook SET slot7 = '0' WHERE date=? AND roomno=?;",
            [vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log("why");
                    console.log(err);
                }
                else{
                    console.log("ok7");
                    //let abc=result[0]
                    console.log(result);
                    res.send(result);    
                }
            }
        );
    }
});

//delte booked slots from routine
app.post("/deletebookingchck", (req,res)=>{
    const vday =req.body.vday; 
    const vdate=req.body.vdate;
    const vroomno=req.body.vroomno;
    const vslotno=req.body.vslot;
    db.query(
        "DELETE FROM bookedroom WHERE date=? AND roomno=? AND slotno=?",
        [vdate,vroomno,vslotno],
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

//view dashboard
app.post("/dash", (req,res)=>{
    const usermail=req.body.usermail;
    db.query(
        "SELECT * FROM users WHERE username = ?",
        [usermail],
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


//admin checks users
app.post("/alluserview", (req,res)=>{
    const usermail=req.body.usermail;
    db.query(
        "SELECT * FROM users",
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

//delte user by admin
app.post("/deleteuser", (req,res)=>{
    const usermail=req.body.usermail;
    console.log(usermail);
    //console.log("ye");
    db.query(
        "DELETE FROM users WHERE username = ? ",
        [usermail],
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


app.post("/slotday", (req,res)=>{
    bookday= req.body.bookday;
    res.send({message:"ok"});
    console.log(bookday);
});

app.post("/logged", (req,res) => {
    const lgname= req.body.usename;
    console.log("logg" + logg);
    res.send({message:logg});
});
app.post("/loggout", (req,res) => {
    const lgname= req.body.usename;
    console.log("logg" + logg);
    logg=0;
    res.send({message:logg});
});

app.listen(3001,()=>{
    console.log("server is running ");
})