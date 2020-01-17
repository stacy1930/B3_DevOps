const express = require("express");
const Composant = require("../models/Composant");
const types = require('../constants');

// Import ROUTER
const router = express.Router();

//GET SPECIFIC CLOAK

router.get("/:id", async (req, res) => {
  try {
    const cloak = await Composant.findOne({_id: req.params.id, type: types.CLOAK});
    res.json(cloak);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST -- SUBMIT A CLOAK
router.post("/", async (req, res) => {
  const cloak = new Composant({
    type: types.CLOAK,
    name: req.body.name,
    value: req.body.value
  });

  try {
    const saveCloak = await cloak.save();
    res.json(saveCloak);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updateCloak = await Composant.updateOne(
            { _id: req.params.id, type: types.CLOAK },
            { $set: { 
                name: req.body.name,
                value: req.body.value
                } 
            }
        );
        if (updateCloak["n"] < 1){ res.json({error: `cloak ${req.params.id} not found`}); }
        if (updateCloak["n"] > 1){ res.json({error: `too many cloaks found with the id ${req.params.id}`}); }
        
        let cloak = await Composant.find({ _id: req.params.id, type: types.CLOAK });
        res.json(cloak);
    } catch (err) {
        res.json({ message: err });
    }
})

// DELETE -- DELETE SPECIFIC CLOAK

router.delete("/:id", async (req, res) => {
  try {
    let removedCloak = await Composant.remove({ _id: req.params.id, type: types.CLOAK });
    if (removedCloak["n"] < 1){
      res.json({error: `cloak ${req.params.id} not found`});
    }
    res.json({message: `cloak ${req.params.id} deleted`});
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
