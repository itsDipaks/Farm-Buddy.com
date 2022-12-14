const {ProductModel} = require("../Modles/Product.model");

const GetProducts = async (req, res) => {
  const FilterbyType = req.query.type;
  const filterbyCategory = req.query.category;

  const sortbyprice=req.query.price
  const sortbyname=req.query.name

//   const paginate=req.query.pageno
  try {
    let products;
    if (FilterbyType) {
        if(sortbyprice){
            if(sortbyprice=="asc"){
                products = await ProductModel.find({type: FilterbyType}).sort({salePrice:1})
            }else{
                products = await ProductModel.find({type: FilterbyType}).sort({salePrice:-1})
            }
        }else if(sortbyname){
            if(sortbyprice=="asc"){
                products = await ProductModel.find({type: FilterbyType}).sort({productName:1})
            }else{
                products = await ProductModel.find({type: FilterbyType}).sort({productName:-1})
            }  
        }else{
            products = await ProductModel.find({type: FilterbyType})
        }

    } else if (filterbyCategory) {

        if(sortbyprice){
            if(sortbyprice=="asc"){
                products = await ProductModel.find({category: filterbyCategory}).sort({salePrice:1})
            }else{
                products = await ProductModel.find({category: filterbyCategory}).sort({salePrice:-1})
            }
        }else if(sortbyname){
            if(sortbyprice=="asc"){
                products = await ProductModel.find({category: filterbyCategory}).sort({productName:1})
            }else{
                products = await ProductModel.find({category: filterbyCategory}).sort({productName:-1})
            }  
        }else{
            products = await ProductModel.find({category: filterbyCategory})
        }
    } else {
      products = await ProductModel.find();
    }
    res.status(200).send(products);
  } catch (err) {
    res.status(502).send({msg: "Something Wents Wrong Please Try Again"});
  }
};

const ProductController = {GetProducts};

module.exports = {ProductController};
