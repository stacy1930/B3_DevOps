const mongoose = require("mongoose");


const ArmorSchema = mongoose.Schema({
  name: String,
  composition: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Component'}]
});

module.exports = mongoose.model("Armor", ArmorSchema);
