// 마켓 상품 리스트?
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const marketSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: Object,
      required: false,
    },
  ],
  items: [
    {
      type: Object,
      required: false,
    },
  ],
});

module.exports = new mongoose.model("Market", marketSchema);
