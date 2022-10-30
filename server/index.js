const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');
//const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
require("dotenv").config();
//const sgMail = require("@sendgrid/mail");
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
    const password= req.body.password;
    tomail=username;
    db.query(
        "INSERT INTO users (username,iid,password) VALUES (?,?,?)",
        [username,iid,password],
        (err,result) =>{
            if(err){
                console.log(err);
                res.send({message:"0"});
            }
            else{
                //res.send("value inserted");
                res.send({message:"value inserted"});
            }
        }
    );
});
/*const sendMail = async (msg) => {
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
    to:tomail,
    from:"",
    subject: "ScheduLIT",
    text:attacmail,
});*/

//forget pass
app.post("/forget", (req,res)=>{
    console.log(req.body.username);
    const username= req.body.username;
    db.query(
        "SELECT password FROM users WHERE username = ?",
        [username],
        (err,result) =>{
            console.log(result[0]);
            if(err){
                console.log("why");
                res.send({message:err});
            }
            else if(result[0]==undefined){
                res.send({message:"0"});
            }
            else{
                //res.send("value inserted");
                var pass = result[0].password;
                res.send({message: pass});
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
    //userEm=username;
    logg=1;
    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username,password],
        (err,result) =>{
            if(err){
                console.log("why");
                console.log(err);
            }
            if(result.length>0){
                console.log("ok");
                res.send({message:"ok"});
            }
            else{
                console.log("not ok");
                res.send({message:"wrong username/password"});    
            }
        }
    );
});

//select day
app.post("/bookday", (req,res)=>{
    const bookday=req.body.bookday;
    const bookdatee=req.body.bookdatee;
    db.query(
        "SELECT * FROM roombook WHERE day = ? AND date = ?",
        [bookday,bookdatee],
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