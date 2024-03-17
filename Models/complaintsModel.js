const mongoose=require('mongoose');
const collegeModel = require('./collegeModel');
const userModel = require('./userModel');

const complaintSchema=new mongoose.Schema({
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
            ref:"User"
        },
        college:{
            type:mongoose.Types.ObjectId,
            ref:"College"
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
    }
)
const compalintsModel=mongoose.model('Complaints',complaintSchema);
module.exports=compalintsModel;