const router=require('express').Router();
const {registerCollege}=require('../Controllers/collegeController');


router.post('/register',registerCollege);
module.exports=router;