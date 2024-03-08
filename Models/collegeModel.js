const mongoose=require('mongoose');
const userModel=require('./userModel');
const collegSchema=new mongoose.Schema({
    name:String,
    students:[{
        type:mongoose.Types.ObjectId,
        ref:userModel,
        require:true,
    }],
    admins:[{
        type:mongoose.Types.ObjectId,
        ref:userModel
    }],
    complaints:[{
        title:String,
        description:String,
        images:[{
            url:String,
            filename:String,
        }],
        department:{
            type:String,
            enum:['fees','scholarship','academics','sports','library','admissions','hostel','miscleanious']
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:userModel
        },
        isAcknowledged:{
            type:Boolean,
            default:false,
        },
        isResolved:{
            type:Boolean,
            default:false,
        },
        remarks:{
            type:String,
            default:false,
        }
    }]
})
export const collegeModel=mongoose.model('College',collegSchema);