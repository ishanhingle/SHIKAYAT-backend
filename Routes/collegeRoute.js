const router=require('express').Router();
const {registerCollege,getColleges}=require('../Controllers/collegeController');


router.post('/register',registerCollege);
router.get('/getColleges',getColleges);
module.exports=router;