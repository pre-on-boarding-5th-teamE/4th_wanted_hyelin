const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const addressSchema = require("./addressSchema");
const userSchema = new Schema(
  {
    email: { type: String, required: true, maxLength: 100 },
    password: { type: String, required: true, maxLength: 200 },
    name: {
      first: { type: String, required: false, default: null },
      middle: { type: String, required: false, default: null },
      last: { type: String, required: false, default: null },
      full: { type: String, required: false },
    },
    // TODO: 썸네일 스키마 정의
    // thumbnail: {
    //
    // },
    mobile: { type: String, required: true },
    phone: { type: String, required: false, defualt: null },
    // country: {
    //   name: {
    //     en: { type: String, required: true },
    //     ko: { type: String, required: false },
    //   },
    //   alias: { type: String, required: false },
    //   code: { type: String, required: false },
    // },
    // laungue: { type: String, required: false, default: "korean" },
    // currency: { type: String, required: false },
    // timezone: { type: String, require: true, default: "GMT+9" },
    address: { type: addressSchema, required: false, default: null },
    vertified: { type: Boolean, required: true, default: true },
    role: { type: String, required: true, default: "user" },
    /* TODO: social login info 추가 */
    deletedAt: { type: Date, required: false, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
