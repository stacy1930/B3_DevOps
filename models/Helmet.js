// {
//     "type":"casque",
//     "name":"nomCasque",
//     "value":"100"
// }

const mongoose = require("mongoose");

const HelmetSchema = mongoose.Schema({
  type: String,
  name: String,
  value: Number
});

module.exports = mongoose.model("Helmet", HelmetSchema);
