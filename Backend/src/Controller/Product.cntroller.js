const { ProductModel } = require("../Modles/Product.model")

const GetAllAvilableProducts=(req,res)=>{

}


const GetMensCareProduct=async(req,res)=>{

const {category}=req.query



const mensdata=await ProductModel.find({category})


res.send(mensdata)
}



const ProductController={GetAllAvilableProducts,GetMensCareProduct}

module.exports={ProductController}