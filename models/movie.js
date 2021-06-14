const mongoose = require("mongoose");

const mSchema = new mongoose.Schema({
  field1: { type: String, require: true },
  title: { type: String, require: true },
  gener: { type: String, require: true },
  rating: { type: String, require: true },
});
module.exports = mongoose.model("Movie", mSchema);
