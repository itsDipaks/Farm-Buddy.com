const mongoose = require("mongoose");
const { GetCurrentDate, GetCurrentTime } = require("../../utils/DateStructure");

const GetCurrent1Date=GetCurrentDate()
const GetCurrent1Time=GetCurrentTime()
const ProductSchema = new mongoose.Schema({
  productName: {type: String, required: true},
  salePrice: {type: String, required: true},
  listPrice: {type: String, required: true},
  category: {type: String, required: true},
  type: {type: String, required: true},
  description: {type: String, required: true},
 ProductAddeedonDate:{type:String,default:GetCurrent1Date},
 ProductAddeedTime:{type:String,default:GetCurrent1Time}
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = {ProductModel};
