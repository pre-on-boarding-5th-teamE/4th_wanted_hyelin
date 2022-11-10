const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const sellerRouter = require("./sellerRouter");
const productRouter = require("./productRouter");

router.use("/user", userRouter);
router.use("/seller", sellerRouter);
router.use("/product", productRouter);
module.exports = router;
