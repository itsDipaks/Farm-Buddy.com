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
    age:{type:Number,required:true},
    status:{type:String,default:"active"},
    UserSignupDate:{type:String,required:true,default:GetCurrent1Date},
    UserSignupTime:{type:String,required:true ,default:GetCurrent1Time},
    profileimage:{type:String,default:"https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM=" },
})


const UserModel=mongoose.model("User",UserSchema)

module.exports={UserModel}