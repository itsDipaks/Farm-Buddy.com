const {Router}=require("express")
const { ProductController } = require("../Controller/Product.cntroller")



const GetProductRouter=Router()
GetProductRouter.get("/getproducts",ProductController.GetProducts)
module.exports={GetProductRouter}

