var express = require("express");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

var app = express();

app.use(bodyParser.json());

const armorRoute = require("./routes/armor");
const armRoute = require("./routes/arm");
const helmetRoute = require("./routes/helmet");
const legRoute = require("./routes/leg");
const cloakRoute = require("./routes/cloak");
const torsoRoute = require("./routes/torso");

app.use("/armor", armorRoute);
app.use("/arm", armRoute);
app.use("/leg", legRoute);
app.use("/helmet", helmetRoute);
app.use("/cloak", cloakRoute);
app.use("/torso", torsoRoute);

mongoose.connect(DB_URL, { useNewUrlParser: true });

app.listen(PORT);
