const express = require("express");
const router = express.Router();
const sellerContorller = require("../controllers/sellerController");
const errorHandler = require("../middlewares/errorHandler");

const { loginRequired } = require("../middlewares/auth");

router.post(
  "/register",
  loginRequired,
  errorHandler(sellerContorller.register)
);

module.exports = router;
