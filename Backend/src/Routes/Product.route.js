const {Router}=require("express")
const { ProductController } = require("../Controller/Product.cntroller")



const GetProductRouter=Router()
GetProductRouter.get("/getproducts",ProductController.GetProducts)
GetProductRouter.get("/singleproduct/:product_Id",ProductController.GetSingleProduct)
module.exports={GetProductRouter}

