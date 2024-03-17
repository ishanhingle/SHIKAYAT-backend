const router=require('express').Router();
const {registerCollege,getColleges, updateComplaint,getCollegeComplaints}=require('../Controllers/collegeController');
const authMiddleware = require('../middleware/Auth');
const isAdmin = require('../middleware/isAdmin');


router.post('/register',registerCollege);
router.get('/getColleges',getColleges);
router.patch('/updateComplaint',authMiddleware,isAdmin,updateComplaint);
router.get('/getAllComplaints',authMiddleware,isAdmin,getCollegeComplaints);
module.exports=router;