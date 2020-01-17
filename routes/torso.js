const express = require("express");
const Composant = require("../models/Composant");
const types = require("../constants");

// Import ROUTER
const router = express.Router();

//GET SPECIFIC TORSO

router.get("/:id", async (req, res) => {
  try {
    const torso = await Composant.findOne({_id: req.params.id, type: types.TORSO});
    res.json(torso);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST -- SUBMIT A TORSO
router.post("/", async (req, res) => {
  const torso = new Composant({
    type: types.TORSO,
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

// PUT -- UPDATE A TORSO
router.put('/:id', async (req, res) => {
  try {
    const updateTorso = await Composant.updateOne(
      { _id: req.params.id, type: types.TORSO },
      { $set: { 
          name: req.body.name,
          value: req.body.value
        } 
      }
    );
    if (updateTorso["n"] < 1){ res.json({error: `torso ${req.params.id} not found`}); }
    if (updateTorso["n"] > 1){ res.json({error: `too many torsos found with the id ${req.params.id}`}); }
    
    let torso = await Composant.find({ _id: req.params.id, type: types.TORSO });
    res.json(torso);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE -- DELETE SPECIFIC TORSO

router.delete("/:id", async (req, res) => {
  try {
    let removedTorso = await Composant.remove({ _id: req.params.id, type: types.TORSO });
    if(removedTorso["n"] < 1){
      res.json({error: `torso ${req.params.id} not found`});
    }
    res.json({message: `torso ${req.params.id} deleted`});
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
