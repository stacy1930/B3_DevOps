const express = require("express");
const Component = require("../models/Component");
const types = require("../constants");

//IMPORT ROUTER
const router = express.Router();

// GET -- LIST OF LEGS
router.get("/", async (req, res) => {
    try {
        const legs = await Component.find({type: types.LEG});
        res.json(legs);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST -- SUBMIT A LEG
router.post("/", async (req, res) => {
    const leg = new Component({
        type: types.LEG,
        name: req.body.name,
        value: req.body.value
    });

    try {
        const saveLeg = await leg.save();
        res.json(saveLeg);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updateLeg = await Component.updateOne(
            { _id: req.params.id, type: types.LEG },
            {
                $set: {
                    name: req.body.name,
                    value: req.body.value
                }
            }
        );
        if (updateLeg["n"] < 1){ res.json({error: `leg ${req.params.id} not found`}); }
        if (updateLeg["n"] > 1){ res.json({error: `too many legs found with the id ${req.params.id}`}); }
        
        let leg = await Component.find({ _id: req.params.id, type: types.LEG });
        res.json(leg);
    } catch (err) {
        res.json({ message: err });
    }
})

// DELETE LEG -- DELETE SPECIFIC LEG
router.delete("/:id", async (req, res) => {
    try {
        let removedLeg = await Component.remove({ _id: req.params.id, type: types.LEG });
        if(removedLeg["n"] < 1){
            res.json({error: `leg ${req.params.id} not found`});
        }
        res.json({message: `leg ${req.params.id} deleted`});
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
