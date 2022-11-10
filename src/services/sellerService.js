const User = require("../schemas/user");
const error = require("../middlewares/errorConstructor");

const getSellerByUserID = async (userId) => {
  const user = await User.findOne({ id: userId });
  return user.seller;
};

const registerSeller = async (req) => {
  const id = req.user.id;
  const { nick, account, mobile2 } = req.body;
  const accountInfo = account.split(" ", 2);
  const bankname = accountInfo[0];
  const accountNumber = accountInfo[1];

  const result = await User.findByIdAndUpdate(id, {
    seller: {
      nick: nick,
      account: {
        bank: bankname,
        number: accountNumber,
      },
      mobile_sub: mobile2,
    },
  });
  return result;
};

const addProduct = async (data) => {
  //form data 추출하기
  //product model 로 create 하기
};
module.exports = { registerSeller, getSellerByUserID };
