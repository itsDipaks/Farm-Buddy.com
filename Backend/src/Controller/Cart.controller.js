const { CartModel } = require("../Modles/Cart.model");

const Addtocart = async (req, res) => {
    const {  product_id ,
        user_id } =
    req.body;
  if (
    product_id &&
    user_id 
  ) {
    try {
      const AddedData = new CartModel({
        product_id ,
        user_id 
      });
      await AddedData.save();

      res.status(200).send({msg: "Prduct Added to cart Sucessfully"});
    } catch (err) {
      res.send({
        msg: "Faild ! Something Wents Wrong Please Try again",
        err: err,
      });
    }
  } else {
    res.send({msg: "Filed Is Missing Please Provide Correct Feild"});
  }
};

const Deletecartitem = async (req, res) => {
  const {prodid} = req.params;
const {user_id}=req.body
  try {
   
  } catch (err) {


  }


};



const EditProduct = async (req, res) => {
 



};

const CartController = {Addtocart};

module.exports = {CartController};
