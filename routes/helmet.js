const express = require("express");
const Composant = require("../models/Composant");
const types = require("../constants");

//IMPORT ROUTER
const router = express.Router();

// GET -- DETAIL OF HELMET (BY ID) SPECIFIC HELMET
router.get("/:id", async (req, res) => {
    try {
        const helmet = await Composant.findOne({_id: req.params.id, type: types.HELMET});
        res.json(helmet);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST -- SUBMIT A HELMET
router.post("/", async (req, res) => {
    const helmet = new Composant({
        type: types.HELMET,
        name: req.body.name,
        value: req.body.value
    });

    try {
        const saveHelmet = await helmet.save();
        res.json(saveHelmet);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        // !! WARNINGS !! The patch doesn't seems to work easily with mongoose, so we'll have to put everytime
        const updateHelmet = await Composant.updateOne(
            { _id: req.params.id, type: types.HELMET },
            {
                $set: {
                    name: req.body.name,
                    value: req.body.value
                }
            },
            { new: true }
        );
        if (updateHelmet["n"] < 1){ res.json({error: `helmet ${req.params.id} not found`}); }
        if (updateHelmet["n"] > 1){ res.json({error: `too many helmets found with the id ${req.params.id}`}); }
        
        const helmet = await Composant.findOne({_id: req.params.id, type: types.HELMET});
        res.json(helmet);
    } catch (err) {
        res.json({ message: err });
    }
})

// DELETE HELMET -- DELETE SPECIFIC HELMET
router.delete("/:id", async (req, res) => {
    try {
        let removedHelmet = await Composant.deleteOne({ _id: req.params.id, type: types.HELMET });
        if(removedHelmet["n"] < 1){
            res.json({error: `helmet ${req.params.id} not found`});
        }
        res.json({message: `helmet ${req.params.id} deleted`});
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
