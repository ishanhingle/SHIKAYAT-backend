const router=require('express').Router();
const {signup,signin}=require('../Controllers/userController');

router.post('/signup',signup);
router.post('/signin',signin);

module.exports=router;