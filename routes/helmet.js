const express = require("express");
const Helmet = require("../models/Helmet.js");

//IMPORT ROUTER
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/", (req, res) => {
  const helmet = new Helmet({
    type: req.body.type,
    name: req.body.name,
    value: req.body.value
  });

  helmet
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});
module.exports = router;
