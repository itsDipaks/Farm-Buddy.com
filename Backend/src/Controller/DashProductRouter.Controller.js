const {ProductModel} = require("../Modles/Product.model");

const AddNewproduct = async (req, res) => {
    const {productName, salePrice, listPrice, category, type, description} =
    req.body;
  if (
    productName &&
    salePrice &&
    listPrice &&
    category &&
    type &&
    description
  ) {
    try {
      const AddedData = new ProductModel({
        productName,
        salePrice,
        listPrice,
        category,
        type,
        description,

      });
      await AddedData.save();
      res.status(200).send({msg: "Prduct Added Sucessfully"});
    } catch (err) {
      res.send({
        msg: "Faild ! Something Wents Wrong Please Try again",
        err: err,
      });
    }
  } else {
    res.send({msg: "Filed Is Missing Please Provide Correct Feild"});
  }
};

const DeleteProduct = async (req, res) => {
  const {prodid} = req.params;
  try {
    const Deleteddata = await ProductModel.findOneAndDelete({_id: prodid});
    if (Deleteddata) {
      res.status(200).send({msg: "Product Deleted Successfully"});
    } else {
      res.status(502).send({msg: "Something Wents Wrong Please Try Again"});
    }
  } catch (err) {
    res.status(502).send({msg: "Something Wents Wrong Please Try Again", err});
  }


};

const EditProduct = async (req, res) => {
  const {prodid} = req.params;
  const data = req.body;
  if (prodid && data) {
    try {
         await ProductModel.findByIdAndUpdate({_id: prodid},req.body);
        res.send({msg: "Product Update Successfull"});
    } catch (err) {
      res.send({msg: "Something Wents Wrong Please Try Again", err: err});
    }
  }
};

const DashProductController = {AddNewproduct, DeleteProduct, EditProduct};

module.exports = {DashProductController};
