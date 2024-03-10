const mongoose=require('mongoose');

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
      college:{
        type:String,
        required:true,
      },
      role:{
        type:String,
        enum:["student","administrator"],
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