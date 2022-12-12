const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    firstname:String,
    lastname:String,
    role:{type:String,default:"admin"},
    avtar:{type:String},
},{
    versionKey:false,
    timestamps:true
}
)

const AdminModel = mongoose.model("admin",adminSchema)

module.exports={AdminModel}