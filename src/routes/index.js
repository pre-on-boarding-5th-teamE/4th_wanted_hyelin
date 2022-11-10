const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const sellerRouter = require("./sellerRouter");

router.use("/user", userRouter);
router.use("/seller", sellerRouter);

module.exports = router;
