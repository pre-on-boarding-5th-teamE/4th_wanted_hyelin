// 마켓 상품 리스트?
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const marketSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // TODO : 카테고리 관련 정보
  items: [
    {
      type: Object,
      required: false,
    },
  ],
  // 썸네일 정보
  thumbnail: {
    type: Object,
    required: null,
    default: null,
  },
});

module.exports = new mongoose.model("Market", marketSchema);
