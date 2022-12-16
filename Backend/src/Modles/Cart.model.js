const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId
    },
    products: [
      {
        product_Id: {type:String},
        quantity: {type:Number},
        name:  {type:String},
        price: {type:Number}
      }
    ],
    active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
);

const CartModel = mongoose.model("CartData", CartSchema);

module.exports = {CartModel};
