const catchAsync = require("../middleware/catchAsync");
const collegeModel=require('../Models/collegeModel');
const compalintsModel = require("../Models/complaintsModel");
// create college
module.exports.registerCollege=catchAsync(async(req,res,next)=>{
    const college=new collegeModel(req.body);
    await college.save();
    res.status(201).json({
    success:true,
    message:"College created successfully"
   })
})
// get all colleges
module.exports.getColleges=catchAsync(async(req,res,next)=>{
    let colleges=await collegeModel.find({});
    colleges=colleges.map(college=>({id:college._id,name:college.name}));
    res.status(200).json(
        colleges
    )
})

//update complaint
module.exports.updateComplaint=catchAsync(async(req,res,next)=>{
    const id=req.body._id;
    const complaint=await compalintsModel.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({
        success:true,
        message:"complaint updated successfully",
        complaint,
    })
})

//get all complaints
module.exports.getCollegeComplaints=catchAsync(async(req,res,next)=>{
    const college=await collegeModel.findById(req.user.college).populate('complaints');
    res.status(200).json({
        success:true,
        complaints:college.complaints,
    })
})