const mongoose = require("mongoose");
const Product = require("../schemas/product");
const sellerService = require("./sellerService");
const error = require("../middlewares/errorConstructor");

const makeVariationsId = async (variations) => {
  for (let variation of variations) {
    variation.id = mongoose.Types.ObjectId();
  }
  return variations;
};

const addProduct = async (req) => {
  const userId = req.user.id;
  const { name, summary, description, cautions } = req.body;
  const { price, caredPrice } = req.body;
  const { buyDate, orderEndDate } = req.body;
  const { optionMeta, variations } = req.body;
  const { userCanBuy, deliveredAt, delivery, bundleAvailable } = req.body;

  const seller = await sellerService.getSellerByUserID(userId);
  if (!seller) {
    throw new error("Forbidden", 403);
  }

  const variationArray = await makeVariationsId(variations);
  const insertData = {
    sellerId: userId,
    seller,
    name,
    summary,
    description,
    buyProductAt: Date(buyDate),
    price,
    caredPrice,
    optionMeta,
    variations: variationArray,
    orderEndAt: Date(orderEndDate),
    deliveredAt: Date(deliveredAt),
    deliverRegion: userCanBuy,
    deliveryTypes: delivery,
    bundled: {
      fee: !!bundleAvailable ? bundleAvailable : null,
    },
  };

  try {
    const result = await Product.create(insertData);
    return result;
  } catch (err) {
    throw new error(err.message, err.statusCode);
  }
};

const getProductDetail = async (productId) => {
  try {
    const product = await Product.findOne({
      id: productId,
    });

    return product;
  } catch (err) {
    throw new error(err.message, err.statusCode);
  }
};

const deleteProdcutsByUserId = async (userId) => {
  const result = Product.updateMany(
    { seller: { id: userId } },
    {
      avaiable: false,
      deletedAt: Date.now(),
    }
  );
  return result.modifiedCount;
};

const deleteOne = async (req) => {
  const user = req.user;
  const productId = req.params.productId;

  const deleteProduct = await Product.findOne({ id: productId });
  if (!deleteProduct) {
    throw new error("Not_Found", 404);
  }
  if (deleteProduct.userId !== user.id) {
    throw new error("Invalid_User", 400);
  }

  const product = await Product.updateOne(
    { id: productId },
    {
      avaiable: false,
      deletedAt: Date.now(),
    }
  );

  return product;
};

module.exports = {
  addProduct,
  getProductDetail,
  deleteProdcutsByUserId,
  deleteOne,
};
