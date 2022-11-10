const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    sellerId: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: 80,
    },
    summary: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    // 카테고리 디테일 추가
    category: {
      type: Object,
      required: false,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    },
    caredPrice: {
      type: Number,
      required: false,
      default: null,
    },
    optionMeta: {
      type: String,
      required: false,
    },
    variations: [
      {
        type: Object,
        required: false,
      },
    ],
    buyProductAt: {
      type: Date,
      required: true,
    },
    orderEndAt: {
      type: Date,
      required: false,
      default: null,
    },
    deliveryTypes: [
      {
        type: Object,
        required: false,
      },
    ],
    deliverRegion: {
      type: Object,
      required: false,
      default: null,
    },
    deliveredAt: {
      type: Date,
      required: false,
    },
    bundled: {
      type: {
        fee: {
          type: Number,
          required: false,
        },
      },
      required: false,
      default: null,
    },
    availble: {
      type: Boolean,
      required: true,
      default: true,
    },
    deletedAt: {
      type: Date,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", ProductSchema);
