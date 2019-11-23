const mongoose = require('mongoose');

const ArmSchema = mongoose.Schema({
    type: {
        type: String,
        default: "arm"
    },
    name: String,
    value: Number
});

module.exports = mongoose.model('Arm', ArmSchema);
