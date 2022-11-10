const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({}, { timestamps: true });
module.export = mongoose.model("Image", imageSchema);
