const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();

const collegeRouter=require('./Routes/collegeRoute');
mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("database connected");
})

const app=express();
app.listen(3000,()=>{
    console.log("server started");
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/college',collegeRouter);

app.use((error,req,res,next)=>{
    console.log("somthing went wrong");
    res.json(error.message);
})