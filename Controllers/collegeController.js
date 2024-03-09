const catchAsync = require("../middleware/catchAsync");
const collegeModel=require('../Models/collegeModel');
// create college
module.exports.registerCollege=catchAsync(async(req,res,next)=>{
    const college=new collegeModel(req.body);
    await college.save();
    res.status(201).json({
    success:true,
    message:"College created successfully"
   })
})