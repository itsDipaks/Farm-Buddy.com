const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://farmeasydatabase:farmeasydatabase@cluster0.yltvd29.mongodb.net/?retryWrites=true&w=majority")

module.exports={connection}


// mongodb://127.0.0.1:27017/27017

// 