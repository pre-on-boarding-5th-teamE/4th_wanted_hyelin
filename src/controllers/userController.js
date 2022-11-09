const userService = require("../services/userService");
const errorHandler = require("../middlewares/errorHandler");
const error = require("../middlewares/errorConstructor");

const signUp = async (req, res) => {
  const result = await userService.signUp(req.body);
  res.status(201).json({ message: result });
};

const signIn = async (req, res) => {
  const result = await userService.signIn(req.body);
  res.status(200).json(result);
};

module.exports = { signUp, signIn };
