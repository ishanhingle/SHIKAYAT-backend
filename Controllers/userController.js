const jwt=require('jsonwebtoken');
const userModel=require('../Models/userModel');
const catchAsync = require("../middleware/catchAsync");
const collegeModel = require('../Models/collegeModel');
const compalintsModel = require('../Models/complaintsModel');

//const signup user
module.exports.signup=catchAsync(async(req,res,next)=>{
     const college=await collegeModel.findOne({name:req.body.college});
     if(!college){
        return res.status(404).json({
            message:"college not found"
        });
     }
     const user=new userModel({...req.body,college:college._id});
      await user.save();
      console.log(user);
      const userId=user._id;
      if(user.role=='student') college.students.push(userId);
      else college.admins.push(userId);
      college.save();
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

//register a complaint
module.exports.registerComplaint=catchAsync(async(req,res,next)=>{
    const user=await userModel.findById(req.user._id);
    const college=await collegeModel.findById(req.user.college);
    console.log(college);
    const complaint=new compalintsModel({...req.body,user:user._id,college:college._id});
    college.complaints.push(complaint._id);
    user.complaints.push(complaint._id);
    await complaint.save();
    await user.save();
    await college.save();
    res.status(200).json({
        success:true,
        message:"complaints registerd successfully",
    })
})

//get all complaints made by a user
module.exports.getUserComplaints=catchAsync(async(req,res,next)=>{
    const user=await userModel.findById(req.user._id).populate('complaints');
    res.status(200).json({
        success:true,
        complaints:user.complaints,
    })
})

//get particular complaint
module.exports.getComplaint=catchAsync(async(req,res,next)=>{
    const {id}=req.params;
    const complaint=await compalintsModel.findById(id);
    res.status(200).json({
        success:true,
        complaint
    })
})


