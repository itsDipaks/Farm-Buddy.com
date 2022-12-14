const {Router}=require("express")
const { DashProductController } = require("../Controller/DashProductRouter.Controller")
const { Adminauthenticate } = require("../middelwares/AdminAutenticate")

const DashProductRouter=Router()


DashProductRouter.post("/addproduct",DashProductController.AddNewproduct)

DashProductRouter.delete("/delproduct/:prodid",DashProductController.DeleteProduct)

DashProductRouter.patch("/edite/:prodid",DashProductController.EditProduct)


module.exports={DashProductRouter}
