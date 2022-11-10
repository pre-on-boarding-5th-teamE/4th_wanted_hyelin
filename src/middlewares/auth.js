const jwt = require("jsonwebtoken");
const UserService = require("../services/userService");
const error = require("../middlewares/errorConstructor");

const loginRequired = async (req, res, next) => {
  try {
    let accessToken = req.headers.authorization;

    if (!accessToken) {
      throw new error("Need_Access_Token", 400);
    }
    const veryfiedToken = await jwt.verify(accessToken, process.env.JWT_SECRET);
    const user = await UserService.getUserById(veryfiedToken.id);

    if (!user) {
      throw new error("Invalid_User", 400);
    }

    if (user.deletedAt) {
      throw new error("Leaved_User", 404);
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (err) {
    throw new error(err.message, err.statusCode);
  }
};
module.exports = { loginRequired };
