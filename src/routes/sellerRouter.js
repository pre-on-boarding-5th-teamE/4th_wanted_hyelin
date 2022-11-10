const express = require("express");
const router = express.Router();
const sellerContorller = require("../controllers/sellerController");
const errorHandler = require("../middlewares/errorHandler");

const { loginRequired, sellerRequired } = require("../middlewares/auth");

router.post(
  "/register",
  loginRequired,
  errorHandler(sellerContorller.register)
);

router.post(
  "/product",
  loginRequired,
  sellerRequired,
  errorHandler(sellerContorller.addProductBySeller)
);

router.delete(
  "/product/:productId",
  loginRequired,
  sellerRequired,
  errorHandler(sellerContorller.deleteProduct)
);

module.exports = router;
