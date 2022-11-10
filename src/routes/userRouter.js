const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { loginRequired } = require("../middlewares/auth");
const errorHandler = require("../middlewares/errorHandler");

router.post("/signup", errorHandler(userController.signUp));
router.post("/signin", errorHandler(userController.signIn));
router.get("/leave", loginRequired, errorHandler(userController.signIn));
router.patch("/leave", loginRequired, errorHandler(userController.leave));
module.exports = router;
