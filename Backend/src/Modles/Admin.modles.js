const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    firstname:String,
    lastname:String,
    role:{type:String,default:"admin"},
    avtar:{type:String,default:"https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="},
},{
    versionKey:false,
    timestamps:true
}
)

const AdminModel = mongoose.model("admin",adminSchema)

module.exports={AdminModel}