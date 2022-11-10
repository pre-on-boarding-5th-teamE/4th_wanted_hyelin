// 카테고리 스키마
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 20,
    },
    description: {
      type: description,
      required: false,
      maxLength: 100,
    },
    path: [
      {
        type: Object,
        required: false,
        default: null,
      },
    ],
    parent: {
      type: Object,
      required: false,
      default: null,
    },
    //TODO : 썸네일 추가
  },
  { timestamps: true }
);
module.exports = mongoose.Model("Category", CategorySchema);
