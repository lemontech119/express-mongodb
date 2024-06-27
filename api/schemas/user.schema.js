const mongoose = require("mongoose");
const BaseSchema = require("./base.schema");

const userSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
  },
  platformId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.add(BaseSchema);

module.exports = mongoose.model("User", userSchema);
