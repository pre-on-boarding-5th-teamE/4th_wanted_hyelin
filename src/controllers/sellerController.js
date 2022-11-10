const sellerService = require("../services/sellerService");
const productService = require("../services/productService");

const error = require("../middlewares/errorConstructor");

const register = async (req, res) => {
  const result = await sellerService.registerSeller(req);
  if (!result) {
    throw new error("register_fail", 500);
  }
  res.status(201).json(result);
};

const addProductBySeller = async (req, res) => {
  const result = await productService.addProduct(req);
  if (!result) {
    throw new error("add_Product_Fail", 500);
  }
  res.status(201).json(result);
};

const deleteProduct = async (req, res) => {
  const result = await productService.deleteOne(req);
  console.log(result);
  res.status(200).json("OK");
};
module.exports = { register, addProductBySeller, deleteProduct };
