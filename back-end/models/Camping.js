const mongoose = require("mongoose");

const campingSchema = new mongoose.Schema({
  place: { type: String, uppercase: true, trim: true, required: true },
  camperName: { type: String, trim: true, required: true },
  camperPhone: { type: String, rquired: true },

  createdOn: { type: Date, default: Date.now },
  pic: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = Camping = mongoose.model("camping", campingSchema);
