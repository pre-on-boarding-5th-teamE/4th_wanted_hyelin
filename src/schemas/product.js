const mongoose = require("mongoose");
const { Schema } = mongoose;
const productDetailSchema = require("./productDetailSchema");

const ProductSchema = new Schema(
  {
    // TODO Collection 정보 추가
    // TODO Delivery 정보 추가
    seller: {
      user_id: {
        type: String,
        required: true,
      },
      nick: {
        type: String,
        required: true,
        maxLength: 20,
      },
      email: {
        type: String,
        required: true,
      },
      mobile: {
        type: String,
      },
      countryCode: {
        type: String,
      },
    },
    name: {
      type: String,
      required: true,
      maxLength: 80,
    },
    price: {
      original: {
        type: Number,
        required: true,
      },
    },
    summary: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    available: {
      // 판매가능 여부
      type: Boolean,
      required: true,
      default: true,
    },
    caution: [
      {
        text: {
          type: String,
          required: false,
        },
      },
    ],
    deadline: {
      type: Date,
      required: false,
      default: null,
    },
    rating: {
      sold: {
        type: Number,
        required: true,
        default: 0,
      },
      like: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    deletedAt: {
      // soft delete
      type: Date,
      required: false,
      default: null,
    },
    detail: {
      type: productDetailSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", ProductSchema);
