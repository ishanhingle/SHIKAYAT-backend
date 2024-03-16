const router=require('express').Router();
const {registerCollege,getColleges}=require('../Controllers/collegeController');
const authMiddleware = require('../middleware/Auth');
const isAdmin = require('../middleware/isAdmin');
router.post('/register',registerCollege);
router.get('/getColleges',authMiddleware,isAdmin,getColleges);
module.exports=router;