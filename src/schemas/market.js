// 마켓 상품 리스트?
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const marketSchema = new Schema();

module.exports = new mongoose.model("Market", marketSchema);
