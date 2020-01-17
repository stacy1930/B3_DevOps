const mongoose = require("mongoose");

const ComposantSchema = mongoose.Schema({
  type: String,
  name: String,
  value: Number
});

module.exports = mongoose.model("Composant", ComposantSchema);
