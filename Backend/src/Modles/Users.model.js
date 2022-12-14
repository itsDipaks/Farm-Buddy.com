const mongoose=require("mongoose")
const { GetCurrentDate, GetCurrentTime } = require("../../utils/DateStructure")


const GetCurrent1Date=GetCurrentDate()
const GetCurrent1Time=GetCurrentTime()

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:String,required:true},
    UserSignupDate:{type:String,required:true,default:{GetCurrent1Date}},
    UserSignupTime:{type:String,required:true ,default:{GetCurrent1Time}},
    profileimage:{type:String,required:true},
})


const UserModel=mongoose.model("User",UserSchema)

module.exports={UserModel}