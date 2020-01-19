const express = require("express");
const Component = require("../models/Component");
const Armor = require("../models/Armor");
const types = require('../constants');

// Import ROUTER
const router = express.Router();

//GET LIST OF ARMORS
router.get("/", async (req, res) => {
    try {
        const armors = await Armor.find({});
        res.json(armors);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST -- SUBMIT AN ARMOR
router.post("/", async (req, res) => {
    let [helmet, torso, cloak, arm, leg] = [null, null, null, null, null]

    let composition = []

    // fetch helmet if set
    if(req.body.helmet){
        try{
            helmet = await Component.findOne({ _id: req.body.helmet, type: types.HELMET });
            composition.push(helmet.id);
        }
        catch(err){
            res.json({error : "helmet not found", message: err});
        }
    }

    // fetch torso if set
    if(req.body.torso){
        try{
            torso = await Component.findOne({ _id: req.body.torso, type: types.TORSO });
            composition.push(torso.id);
        }
        catch(err){
            res.json({error : "torso not found", message: err});
        }
    }

    // fetch cloak if set
    if(req.body.cloak){
        try{
            cloak = await Component.findOne({ _id: req.body.cloak, type: types.CLOAK });
            composition.push(cloak.id);
        }
        catch(err){
            res.json({error : "cloak not found", message: err});
        }
    }

    // fetch arm if set
    if(req.body.arm){
        try{
            arm = await Component.findOne({ _id: req.body.arm, type: types.ARM });
            composition.push(arm.id);
        }
        catch(err){
            res.json({error : "arm not found", message: err});
        }
    }

    // fetch leg if set
    if(req.body.leg){
        try{
            leg = await Component.findOne({ _id: req.body.leg, type: types.LEG });
            composition.push(leg.id);
        }
        catch(err){
            res.json({error : "leg not found", message: err});
        }
    }

    const armor = new Armor({
        name: req.body.name,
        composition: composition
    });

    try {
        const saveArmor = await armor.save();
        res.json(saveArmor);
    } catch (err) {
        res.json({ message: err });
    }
});

// PUT -- UPDATE AN ARMOR
router.put('/:id', async (req, res) => {
    let [helmet, torso, cloak, arm, leg] = [null, null, null, null, null]

    let composition = []

    // fetch helmet if set
    if(req.body.helmet){
        try{
            helmet = await Component.findOne({ _id: req.body.helmet, type: types.HELMET });
            composition.push(helmet.id);
        }
        catch(err){
            res.json({error : "helmet not found", message: err});
        }
    }

    // fetch torso if set
    if(req.body.torso){
        try{
            torso = await Component.findOne({ _id: req.body.torso, type: types.TORSO });
            composition.push(torso.id);
        }
        catch(err){
            res.json({error : "torso not found", message: err});
        }
    }

    // fetch cloak if set
    if(req.body.cloak){
        try{
            cloak = await Component.findOne({ _id: req.body.cloak, type: types.CLOAK });
            composition.push(cloak.id);
        }
        catch(err){
            res.json({error : "cloak not found", message: err});
        }
    }

    // fetch arm if set
    if(req.body.arm){
        try{
            arm = await Component.findOne({ _id: req.body.arm, type: types.ARM });
            composition.push(arm.id);
        }
        catch(err){
            res.json({error : "arm not found", message: err});
        }
    }

    // fetch leg if set
    if(req.body.leg){
        try{
            leg = await Component.findOne({ _id: req.body.leg, type: types.LEG });
            composition.push(leg.id);
        }
        catch(err){
            res.json({error : "leg not found", message: err});
        }
    }

    try {
        const updateArmor = await Armor.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    composition: composition
                }
            }
        );
        if (updateArmor["n"] < 1) { res.json({ error: `armor ${req.params.id} not found` }); }
        if (updateArmor["n"] > 1) { res.json({ error: `too many armors found with the id ${req.params.id}` }); }

        let armor = await Armor.findById(req.params.id);
        res.json(armor);
    } catch (err) {
        res.json({ message: err });
    }
})

// DELETE -- DELETE SPECIFIC ARMOR

router.delete("/:id", async (req, res) => {
    try {
        let removedArmor = await Armor.deleteOne({ _id: req.params.id });
        if (removedArmor["n"] < 1) {
            res.json({ error: `armor ${req.params.id} not found` });
        }
        res.json({ message: `armor ${req.params.id} deleted` });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
