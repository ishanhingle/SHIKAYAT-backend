const router=require('express').Router();
const {signup,signin, registerComplaint}=require('../Controllers/userController');
const authMiddleware = require('../middleware/Auth');
const isStudent = require('../middleware/isStudent');
router.post('/signup',signup);
router.post('/signin',signin);
router.post('/registerComplaint',authMiddleware,isStudent,registerComplaint);

module.exports=router;