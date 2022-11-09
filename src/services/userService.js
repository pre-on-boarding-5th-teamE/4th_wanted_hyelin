require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../schemas/user");

const error = require("../middlewares/errorConstructor");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const result = await bcrypt.hash(password, salt);
  return result;
};

const getAccessToken = async (user) => {
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
    {
      algorithm: process.env.ALGORITHM,
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return token;
};

const getUserById = async (id) => {
  const user = await User.findOne({ id: id });
  return user;
};

const signUp = async (data) => {
  const { email, password } = data;
  const exists = await User.exists({ email });

  if (exists) {
    throw new error("Exists_User", 409);
  }
  const hashedPassword = await hashPassword(password);

  data.password = hashedPassword;
  const result = await User.create(data);

  return result;
};

const signIn = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) {
    throw new error("No_Exists_User", 404);
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new error("Incorrect_Password", 400);
  }
  const token = await getAccessToken(user);

  return { token };
};

module.exports = { signUp, signIn, getUserById };
