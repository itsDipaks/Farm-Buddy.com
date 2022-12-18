const { CartModel } = require("../Modles/Cart.model");
const { ProductModel } = require("../Modles/Product.model");

const Addtocart = async (req, res) => {

  const { product_Id, quantity, productName,productImage, salePrice,listPrice,user_id, category,type,description} = req.body;
  try {
    let cart = await CartModel.findOne({ user_id });
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
        cart.products.push({ product_Id, quantity,productName,productImage, salePrice,listPrice, category,type,description});
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await CartModel.create({
        user_id,
        products: [{product_Id, quantity,productName,productImage, salePrice,listPrice, category,type,description }],
        cartTotal:salePrice*quantity
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({msg:"Something went wrong",err:err});
  }




// const Addtocart = async(req, res) => {
//   const { product_Id, quantity,user_id } = req.body;


// const cartpresent=CartModel.findOne({user_id})

// if(cartpresent){
// console.log("note exist")

// }else{

//   let mycart=CartModel({
//     product_Id,
//     quantity
//   })
//   await mycart.save()
// }

// };
};

const GetUsersCart=async(req,res)=>{
  const {user_id}=req.body;
try{
  const UserCart=await CartModel.findOne({user_id})
  if(UserCart){
    res.send(UserCart)
  }else{
    res.send({msg:"Cart Is Empty Please Add Product To cart"})
  }
}catch(err){
  res.send({msg:"Something Wents Wrong",err:err})
}
 
}

const Deletecartitem = async (req, res) => {
  
  const product_Id=req.params.product_Id
const user_id=req.body.user_id
  try {
    let cart = await CartModel.findOne({ user_id });
    if (cart) {
      let itemIndex = cart.products.findIndex(p => p.product_Id == product_Id);
console.log(itemIndex)
let arr=[...cart.products]

arr.splice(itemIndex,1)


      // let arr=cart.products.filter((el)=>el.!=itemIndex)

      console.log(arr)
    cart=await CartModel.findOneAndUpdate({user_id},{products:arr},{new:true})

    res.send({msg:"deleted",cart:cart})
      }
  
  } catch (err) {
    console.log(err);
    res.status(500).send({msg:"Something went wrong",err:err});
  }















  //   const {product_Id} = req.params;

//   const {user_id}=req.body
//   console.log(user_id)
//   try {
//     const ispresent=CartModel.findOne({user_id})
// console.log(ispresent)
//     if(ispresent){
//       let itemIndex = CartModel.products.findIndex(p => p.product_Id == product_Id);
// console.log(itemIndex)
// res.send("no")
//     }else{
//       res.send({msg:"User Not Authenticate"})
//     }

// res.send("deleted")

//   } catch (err) {
//     res.send(err)

//   }


};


const CartController = {Addtocart,GetUsersCart,Deletecartitem};

module.exports = {CartController};
