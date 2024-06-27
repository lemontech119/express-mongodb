const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// 공통 스키마 정의
const BaseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = BaseSchema;
