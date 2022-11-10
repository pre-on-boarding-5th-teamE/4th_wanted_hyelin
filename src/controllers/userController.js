const userService = require("../services/userService");
const error = require("../middlewares/errorConstructor");

const signUp = async (req, res) => {
  const result = await userService.signUp(req.body);
  res.status(201).json({ message: result });
};

const signIn = async (req, res) => {
  const result = await userService.signIn(req.body);
  res.status(200).json(result);
};

const getLeaveInfo = async (req, res) => {
  const leaveReasons = userService.leaveInfo();
  res.status(200).json(leaveReasons);
};

const leave = async (req, res) => {
  const result = await userService.userDelete(req);
  res.status(200).json({ message: "OK" });
};
module.exports = { signUp, signIn, getLeaveInfo, leave };
