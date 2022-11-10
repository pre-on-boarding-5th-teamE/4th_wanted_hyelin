const mongoose = require("mongoose");
const { Schema } = mongoose;

const countrySchema = new Schema({
  name: {
    en: {
      type: String,
      required: true,
    },
    ko: {
      type: String,
      required: true,
    },
  },
  summary: {
    type: String,
    required: true,
  },
  decimal: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: false,
    default: "",
  },
});
module.exports = mongoose.Model("Country", countrySchema);
