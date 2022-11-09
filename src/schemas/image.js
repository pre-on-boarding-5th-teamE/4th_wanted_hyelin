const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    name: { type: String, required: false },
    url: "...", // 사진이 있는 S3영역
  },
  { timestamps: true }
);
module.export = mongoose.model("Image", imageSchema);
