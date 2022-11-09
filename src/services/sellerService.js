const User = require("../schemas/user");
const error = require("../middlewares/errorConstructor");

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

module.exports = { registerSeller };
