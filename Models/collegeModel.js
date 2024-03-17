const mongoose=require('mongoose');
const userModel=require('./userModel');
const compalintsModel = require('./complaintsModel');
const collegSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
       type:String,
       required:true,
       unique:true,
    },
    students:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }],
    admins:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }],
    complaints:[{
       type:mongoose.Types.ObjectId,
       ref:"Complaints"
    }]
})
const collegeModel=mongoose.model('College',collegSchema);
module.exports=collegeModel;