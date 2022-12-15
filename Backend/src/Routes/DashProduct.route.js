const {Router}=require("express")
const { DashProductController } = require("../Controller/DashProductRouter.Controller")
const { Adminauthenticate } = require("../middelwares/AdminAutenticate")

const DashProductRouter=Router()


DashProductRouter.post("/addproduct",Adminauthenticate,DashProductController.AddNewproduct)

DashProductRouter.delete("/delproduct/:prodid",Adminauthenticate,DashProductController.DeleteProduct)

DashProductRouter.patch("/edite/:prodid",Adminauthenticate,DashProductController.EditProduct)


module.exports={DashProductRouter}
