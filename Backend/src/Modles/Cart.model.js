const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId
    },
    products: [
      {
        product_Id: {type:String},
        quantity: {type:Number,default:1},
        productName: {type:String},
        productImage:{type:String},
        salePrice: {type:Number},
        listPrice: {type:Number},
        category: {type:String},
        type: {type:String},
        description: {type:String},
      }
    ],
    cartTotal:{type:Number,default:0},
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


// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var CartSchema = new Schema({
//   user_id: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     products_Id: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     quantity: {
//         type: Number,
//         default:1,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now()
//     }
// });
// const CartModel = mongoose.model("CartData", CartSchema);
// module.exports ={CartModel}