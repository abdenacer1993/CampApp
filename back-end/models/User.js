const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, trim: true, required: true },
  dateNais: { type: String, required: true },
  email: { type: String, lowerCase: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  isBanned: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ["camper", "superAdmin"],
    default: "camper",
  },
  //createdOn: { type: Date, default: Date.now },
  //pic: String,
});

module.exports = User = mongoose.model("user", userSchema);
