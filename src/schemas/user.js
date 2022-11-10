const mongoose = require("mongoose");
const { Schema } = mongoose;
const addressSchema = require("./addressSchema");
const sellerSchema = require("./sellerSchema");
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
    mobile: { type: String, required: true },
    phone: { type: String, required: false, defualt: null },
    address: { type: addressSchema, required: false, default: null },
    vertified: { type: Boolean, required: true, default: true },
    role: { type: String, required: true, default: "user" },
    seller: {
      type: sellerSchema,
      required: false,
      default: null,
    },
    deletedAt: { type: Date, required: false, default: null },
    leave: {
      reason: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
