const mongoose = require("mongoose");
const { Schema } = mongoose;

const SellerSchema = new Schema(
  {
    nick: {
      type: String,
      required: true,
      maxLength: 20,
    },
    mobile_sub: {
      type: String,
      required: true,
      maxLength: 15,
    },
    account: {
      bank: {
        type: String,
        required: true,
        maxlength: 20,
      },
      number: {
        type: String,
        required: true,
        maxLength: 20,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = SellerSchema;
