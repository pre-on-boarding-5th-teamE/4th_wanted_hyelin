const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const errorHandler = require("../middlewares/errorHandler");

router.get("/:productId", errorHandler(productController.getProductDetail));
module.exports = router;
