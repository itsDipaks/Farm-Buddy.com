const {Router}=require("express")
const { ProductModel } = require("../Modles/Product.model")

const ProductRouter=Router()


ProductRouter.post("/addproduct",async(req,res)=>{
    const {name}=req.body
    
    const addproduct=new ProductModel({
        name
    })

    await addproduct.save()
})


module.exports={ProductRouter}