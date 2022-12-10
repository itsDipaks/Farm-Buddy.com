const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://farmeasydatabase:farmeasydatabase@cluster0.yltvd29.mongodb.net/?retryWrites=true&w=majority")

module.exports={connection}