const mongoose = require("mongoose");

const { Schema } = mongoose;

const variantionSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
      maxLength: 20,
    },
    priority: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false }
);

const optionSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 10,
  },
  priority: {
    tyep: Number,
    required: false,
  },
  variantions: [
    {
      type: variantionSchema,
      required: false,
      default: null,
    },
  ],
});

const variantSchema = new Schema({
  available: {
    type: Boolean,
    default: true,
  },
  qnt: {
    type: Number,
    required: true,
    default: 0,
  },
  types: [
    {
      type: Object,
      required: false,
      default: null,
    },
  ],
});
const productDetailSchema = new Schema(
  {
    description: {
      type: String,
      required: false,
    },
    options: [
      {
        type: optionSchema,
        required: false,
        default: null,
      },
    ],
    variants: [
      {
        type: variantSchema,
        required: false,
      },
    ],
  },
  { id: false }
);

module.exports = productDetailSchema;
