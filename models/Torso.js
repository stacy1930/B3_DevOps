// {
//     "type":"torse",
//     "name":"nomTorse",
//     "value":"100"
// }

const mongoose = require("mongoose");

const TorsoSchema = mongoose.Schema({
  type: String,
  name: String,
  value: Number
});

module.exports = mongoose.model("Torso", TorsoSchema);
