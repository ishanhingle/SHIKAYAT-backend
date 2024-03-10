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
// get all colleges
module.exports.getColleges=catchAsync(async(req,res,next)=>{
    let colleges=await collegeModel.find({});
    colleges=colleges.map(college=>({id:college._id,name:college.name}));
    res.status(200).json(
        colleges
    )
})