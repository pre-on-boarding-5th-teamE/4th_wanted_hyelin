const sellerService = require("../services/sellerService");
const error = require("../middlewares/errorConstructor");

const register = async (req, res) => {
  const result = await sellerService.registerSeller(req);
  if (!result) {
    throw new error("register_fail", 500);
  }
  res.status(201).json(result);
};

module.exports = { register };
