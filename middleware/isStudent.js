
const isStudent=async(req,res,next)=>{

    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

    if (req.user.role !== 'student') {
        return res.status(403).json({ message: 'user is not a student' });
    }

    try{
         next();
    }catch(error){
        res.status(403).json({
            message:error.message
        })
    }
      
}
module.exports=isStudent