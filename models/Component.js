const mongoose = require("mongoose");

const ComponentSchema = mongoose.Schema({
  type: String,
  name: String,
  value: Number
});

module.exports = mongoose.model("Component", ComponentSchema);
