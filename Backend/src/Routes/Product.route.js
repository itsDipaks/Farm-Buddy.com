const {Router}=require("express")
const { ProductController } = require("../Controller/Product.cntroller")



const GetProductRouter=Router()

GetProductRouter.get("/AllProducts",ProductController.GetAllAvilableProducts)
GetProductRouter.get("/mensProducts",ProductController.GetMensCareProduct)

module.exports={GetProductRouter}

