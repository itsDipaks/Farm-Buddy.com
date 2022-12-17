const {Router}=require("express")
const { CartController } = require("../Controller/Cart.controller")
const { UserAuthenticate } = require("../middelwares/UserAuthenticate")


const CartRouter=Router()

CartRouter.post("/addtocart",UserAuthenticate,CartController.Addtocart)

CartRouter.delete("/delproduct/:prodid",UserAuthenticate)

CartRouter.patch("/edite/:prodid",UserAuthenticate)

CartRouter.get("/usercart",UserAuthenticate,CartController.GetUsersCart)

module.exports={CartRouter}

