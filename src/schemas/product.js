const mongoose = require("mongoose");

const { Schema } = mongoose;
const ProductSchema = new Schema(
  {
    deletedAt: {
      // soft delete
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
