const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');
app.use(cors());
app.use(express.json());
require("dotenv").config();
const db = require('./db');

let logg=0;
let bookday="0"
let tomail="";
let attacmail="abcd";


app.use("/login", require("./routes/login.js"));
app.use("/signup", require("./routes/signup.js"));
app.use("/forgetpassword", require("./routes/forgetpassword.js"));
app.use("/changepassword", require("./routes/changepassword.js"));
app.use("/bookday", require("./routes/bookday.js"));
app.use("/bookslot", require("./routes/bookslot.js"));
app.use("/bookingsaved", require("./routes/bookingsaved.js"));


//check booked slots
app.post("/checkbook", (req,res)=>{
    const usermail=req.body.usermail;
    db.query(
        "SELECT * FROM bookedroom WHERE email = ?",
        [usermail],
        (err,result) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log("ok");
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
    const voldslot=req.body.voldslot;
    if(vslot=="slot1"){
        db.query(
            "UPDATE roombook SET slot1 = ? WHERE date=? AND roomno=?;",
            [voldslot,vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log(err);
                }
                else{
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot2"){
        db.query(
            "UPDATE roombook SET slot2 = ? WHERE date=? AND roomno=?;",
            [voldslot,vdate,vroomno],
            (err,result) =>{
                if(err){
                    console.log(err);
                }
                else{
                    res.send(result);    
                }
            }
        );
    }
    else if(vslot=="slot3"){
        db.query(
            "UPDATE roombook SET slot3 = ? WHERE date=? AND roomno=?;",
            [voldslot,vdate,vroomno],
            (err,result) =>{
                if(err){
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
            "UPDATE roombook SET slot4 = ? WHERE date=? AND roomno=?;",
            [voldslot,vdate,vroomno],
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
            "UPDATE roombook SET slot5 = ? WHERE date=? AND roomno=?;",
            [voldslot,vdate,vroomno],
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
            "UPDATE roombook SET slot6 = ? WHERE date=? AND roomno=?;",
            [voldslot,vdate,vroomno],
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
            "UPDATE roombook SET slot7 = ? WHERE date=? AND roomno=?;",
            [voldslot,vdate,vroomno],
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
                console.log(err);
            }
            else{
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
                console.log(err);
            }
            else{
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
                console.log(err);
            }
            else{
                console.log(result);
                res.send(result);    
            }
        }
    );
});

//admin check all booked slots
app.post("/admincheckbookings", (req,res)=>{
    const usermail=req.body.usermail;
    db.query(
        "SELECT * FROM bookedroom",
        (err,result) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                res.send(result);    
            }
        }
    );
});


//admin view routine 
app.post("/viewroomroutine", (req,res)=>{
    const roomno=req.body.roomno;
    const day=req.body.day;
    //console.log(roomno);
    db.query(
        "SELECT * FROM roomroutine where roomno = ? and day= ? ",
        [roomno, day],
        (err,result) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                res.send(result);    
            }
        }
    );
});

//update routine
app.post("/updateroutine", (req,res)=>{
    //const roomroutin=req.body.roomroutin;
    //const roomroutin_slot1=req.body.roomroutin_slot1;
    const routine_roomno=req.body.routine_roomno;
    const routine_day=req.body.routine_day;
    const routine_slot1=req.body.routine_slot1;
    const routine_slot2=req.body.routine_slot2;
    const routine_slot3=req.body.routine_slot3;
    const routine_slot4=req.body.routine_slot4;
    const routine_slot5=req.body.routine_slot5;
    const routine_slot6=req.body.routine_slot6;
    const routine_slot7=req.body.routine_slot7;
    //console.log(routine_roomno +" "+ routine_day +" "+ routine_slot1 +" "+ routine_slot2 +" "+ routine_slot3 +" "+ routine_slot4 +" "+ routine_slot5 +" "+ routine_slot6 +" "+ routine_slot7);
    
    db.query(
        "UPDATE roomroutine SET slot1 = ?, slot2 = ?,slot3 = ?, slot4 = ?, slot5 = ?, slot6 = ?, slot7 = ? WHERE roomno= ? AND day= ? ",
        [routine_slot1, routine_slot2, routine_slot3, routine_slot4, routine_slot5, routine_slot6, routine_slot7, routine_roomno, routine_day],
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


//update room book routine
app.post("/updateroombookroutine", (req,res)=>{
    //const roomroutin=req.body.roomroutin;
    //const roomroutin_slot1=req.body.roomroutin_slot1;
    const routine_roomno=req.body.routine_roomno;
    const routine_day=req.body.routine_day;
    const routine_slot1=req.body.routine_slot1;
    const routine_slot2=req.body.routine_slot2;
    const routine_slot3=req.body.routine_slot3;
    const routine_slot4=req.body.routine_slot4;
    const routine_slot5=req.body.routine_slot5;
    const routine_slot6=req.body.routine_slot6;
    const routine_slot7=req.body.routine_slot7;
    //console.log(routine_roomno +" "+ routine_day +" "+ routine_slot1 +" "+ routine_slot2 +" "+ routine_slot3 +" "+ routine_slot4 +" "+ routine_slot5 +" "+ routine_slot6 +" "+ routine_slot7);
    
    db.query(
        "UPDATE roombook SET slot1 = ?, slot2 = ?,slot3 = ?, slot4 = ?, slot5 = ?, slot6 = ?, slot7 = ? WHERE roomno= ? AND day= ? ",
        [routine_slot1, routine_slot2, routine_slot3, routine_slot4, routine_slot5, routine_slot6, routine_slot7, routine_roomno, routine_day],
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

//update/deletd bookedroom routine
app.post("/deletebookroom", (req,res)=>{
    const routine_roomno=req.body.routine_roomno;
    const routine_day=req.body.routine_day;
    console.log("delete here");
    db.query(
        "DELETE FROM bookedroom WHERE roomno=? AND day=?",
        [routine_roomno, routine_day],
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