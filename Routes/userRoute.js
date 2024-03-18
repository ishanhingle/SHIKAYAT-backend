const router=require('express').Router();
const {signup,signin, registerComplaint,getUserComplaints,getComplaint}=require('../Controllers/userController');
const authMiddleware = require('../middleware/Auth');
const isStudent = require('../middleware/isStudent');
router.post('/signup',signup);
router.post('/signin',signin);

router.post('/registerComplaint',authMiddleware,isStudent,registerComplaint);
router.get('/getAllComplaints',authMiddleware,isStudent,getUserComplaints);
router.get('/complaint/:id',authMiddleware,isStudent,getComplaint);

module.exports=router;