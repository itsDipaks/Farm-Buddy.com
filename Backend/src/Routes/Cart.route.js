const {Router}=require("express")
const { CartController } = require("../Controller/Cart.controller")
const { UserAuthenticate } = require("../middelwares/UserAuthenticate")


const CartRouter=Router()

CartRouter.post("/addtocart",CartController.Addtocart)

CartRouter.delete("/delproduct/:prodid",UserAuthenticate)

CartRouter.patch("/edite/:prodid",UserAuthenticate)


module.exports={CartRouter}
