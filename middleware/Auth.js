const jwt=require("jsonwebtoken");
const userModel = require("../Models/userModel");
const authMiddleware=async(req,res,next)=>{
    const headers=req.headers.authorization 
    if(!headers || !headers.startsWith('Bearer ')){
        res.status(403).json({});
    }
    try {
        const token=req.headers.authorization.split(' ')[1];
        const decoded=jwt.verify(token,process.env.JWTSECRET);
        req.user=await userModel.findById(decoded.userId);
        next();   
    } catch (error) {
        res.status(403).json({
            message:error.message
        })
    }
}
module.exports=authMiddleware;