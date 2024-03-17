const mongoose=require('mongoose');
const collegeModel = require('./collegeModel');
const compalintsModel = require('./complaintsModel');

const userSchema=new mongoose.Schema({
      userName:{
        type:String,
        required:true,
        unique:true,
      },
      email:{
        type:String,
        required:true,
        unique:true
      },
      complaints:[{
        type:mongoose.Types.ObjectId,
        ref:"Complaints"
      }],
      college:{
        type:mongoose.Types.ObjectId,
        ref:"College"
      },
      role:{
        type:String,
        enum:["student","admin"],
        required:true,
      },
      password:{
        type:String,
        required:true,
        min:[8,"password must have atleast 8 characters"]
      }
})

const userModel=mongoose.model("User",userSchema);
module.exports=userModel;