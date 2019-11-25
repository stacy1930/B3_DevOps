const express = require("express");
const Helmet = require("../models/Helmet.js");

//IMPORT ROUTER
const router = express.Router();

// GET -- DETAIL OF HELMET (BY ID) SPECIFIC HELMET
router.get("/:id", async (req, res) => {
  try {
    const helmet = await Helmet.findById(req.params.id);
    res.json(helmet);
  } catch (err) {
    res.json({ message: err });
  }
});

//LIST OF HELMETS
router.get("/", async (req, res) => {
  try {
    const helmets = await Helmet.find();
    res.json(helmets);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST  -- SUBMIT A HELMET
router.post("/", async (req, res) => {
  const helmet = new Helmet({
    type: req.body.type,
    name: req.body.name,
    value: req.body.value
  });

  try {
    const saveHelmet = await helmet.save();
    res.json(saveHelmet);
  } catch (err) {
    res.json({ message: err });
  }

  //   helmet
  //     .save()
  //     .then(data => {
  //       res.json(data);
  //     })
  //     .catch(err => {
  //       res.json({ message: err });
  //     });
});

// DELETE HELMET -- DELETE SPECIFIC HELMET
router.delete("/:id", async (req, res) => {
  try {
    const removeHelmet = await Helmet.remove({ _id: req.params.id });
    res.json(removeHelmet);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
