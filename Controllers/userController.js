const jwt=require('jsonwebtoken');
const userModel=require('../Models/userModel');
const catchAsync = require("../middleware/catchAsync");
const collegeModel = require('../Models/collegeModel');

//const signup user
module.exports.signup=catchAsync(async(req,res,next)=>{
      const user=new userModel(req.body);
      await user.save();
      console.log(user);
      const college=await collegeModel.findById(user.college);
      const userId=user._id;
      if(user.role=='student') college.students.push(userId);
      else college.admins.push(userId);
      const token=jwt.sign({userId},process.env.JWTSECRET);
      req.userId=userId;
      res.status(201).json({
        message:"User Created Successfully",
        token:token,
       })
})

module.exports.signin=catchAsync(async(req,res,next)=>{
    const {userName,password}=req.body;
    if(!userName || !password){
        return res.status(400).json({ message: `All the fields are required.` });
    }
    const user=await userModel.findOne({userName});
    if(!user || user.password!==password){
        return res.status(404).json({
            message:"invalid username or password"
          })
    }
    const userId=user._id;
    req.userId=userId;
    const token=jwt.sign({userId},process.env.JWTSECRET);
    res.status(200).json({
        success:true,
        message:"user Signed in successfully",
        token,
    })
}) 