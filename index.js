const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("database connected");
})

const app=express();
app.listen(300,()=>{
    console.log("server started");
})