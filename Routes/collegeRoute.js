const router=require('express').Router();
const {registerCollege,getColleges, updateComplaint,getCollegeComplaints,getComplaint}=require('../Controllers/collegeController');
const authMiddleware = require('../middleware/Auth');
const isAdmin = require('../middleware/isAdmin');


router.post('/register',registerCollege);
router.get('/getColleges',getColleges);
router.patch('/updateComplaint',authMiddleware,isAdmin,updateComplaint);
router.get('/getAllComplaints',authMiddleware,isAdmin,getCollegeComplaints);
router.get('/complaint/:id',authMiddleware,isAdmin,getComplaint);
module.exports=router;