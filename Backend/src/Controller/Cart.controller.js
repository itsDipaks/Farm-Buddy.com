const { CartModel } = require("../Modles/Cart.model");

const Addtocart = async (req, res) => {

  const { product_Id, quantity, name, price } = req.body;
  const user_Id="639acae97436888e51183532"
  try {
    let cart = await CartModel.findOne({ user_Id });

    if (cart) {
      //cart exists for user
      let itemIndex = cart.products.findIndex(p => p.product_Id == product_Id);
console.log(itemIndex)
      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({ product_Id, quantity, name, price });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        products: [{ product_Id, quantity, name, price }]
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }

};




const Deletecartitem = async (req, res) => {
  const {prodid} = req.params;

  try {
    let itemIndex = cart.products.findIndex(p => p.product_Id == product_Id);



  } catch (err) {


  }


};



const EditProduct = async (req, res) => {
 



};

const CartController = {Addtocart};

module.exports = {CartController};
