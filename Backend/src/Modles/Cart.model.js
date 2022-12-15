const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user_id: {type:String, required: true},
  },
  {products_id: {type: [Object]}}
);

const CartModel = mongoose.model("CartData", CartSchema);

module.exports = {CartModel};
