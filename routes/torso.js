const express = require("express");
const Torso = require("../models/Torso");

// Import ROUTER
const router = express.Router();

//GET SPECIFIC TORSO

router.get("/:id", async (req, res) => {
  try {
    const torso = await Torso.findById(req.params.id);
    res.json(torso);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET - LIST OF TORSOS

router.get("/", async (req, res) => {
  try {
    const torso = await Torso.find();
    res.json(torso);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST -- SUBMIT A TORSO
router.post("/", async (req, res) => {
  const torso = new Torso({
    type: req.body.type,
    name: req.body.name,
    value: req.body.value
  });

  try {
    const saveTorso = await torso.save();
    res.json(saveTorso);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE -- DELETE SPECIFIC TORSO

router.delete("/:id", async (req, res) => {
  try {
    const removeTorso = await Torso.remove({ _id: req.params.id });
    res.json(removeTorso);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
