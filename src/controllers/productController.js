const productService = require("../services/productService");
const error = require("../middlewares/errorConstructor");

const getProductDetail = async (req, res) => {
  const productId = req.params.productId;
  const result = await productService.getProductDetail(productId);

  if (!result) {
    throw new error("Not_Found", 404);
  }
  res.status(200).json(result);
};

module.exports = { getProductDetail };
