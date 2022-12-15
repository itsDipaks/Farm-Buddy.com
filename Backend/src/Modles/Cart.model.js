const mongoose=require("mongoose")


const CartSchema=new mongoose.Schema({



})


const CartModel=mongoose.model("CartData",CartSchema)

module.exports={CartModel}