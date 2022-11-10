require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../schemas/user");
const productService = require("./productService");
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
  if (!result) {
    throw new error("Server Error", 500);
  }

  delete result.password;
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

const leaveInfo = () => {
  // hardCoding
  return [
    "자주 접속하지 않아서",
    "잦은 오류, 장애 발생",
    "과도한 쇼핑을 자제하기 위해",
  ];
};

const userDelete = async (req) => {
  const { reason, description } = req.body;
  const userId = req.user.id;

  const user = await getUserById(userId);
  if (!user) {
    throw new error("User_Already_Leave", 404);
  }
  if (user.deletedAt) {
    throw new error("User_Already_Leave", 404);
  }
  const result = await User.findByIdAndUpdate(userId, {
    deletedAt: Date.now(),
    leave: {
      reason,
      description: !!description ? description : null,
    },
  });
  // 유저등록 상품도 available false 처리
  const productDeleted = await productService.deleteProdcutByUserId(userId);
  if (productDeleted < 0) {
    throw error("product_Delete_Fail", 500);
  }
  return result;
};

module.exports = { signUp, signIn, getUserById, leaveInfo, userDelete };
