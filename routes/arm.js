const express = require('express')
const router = express.Router();
const Arm = require('../models//Arm');

//GET
router.get('/:id', async (req, res) => {
    try{
        const arm = await Arm.findById(req.params.id);
        res.json(arm);
    }
    catch (err){
        res.json({message: err});
    }
})

// LIST
router.get('/', async (req, res) => {
    try{
        const arms = await Arm.find();
        res.json(arms);
    }catch(err){
        res.json({message: err});
    }
})

// POST
router.post('/', async (req, res) => {
    const arm = new Arm({
        type: req.body.type,
        name: req.body.name,
        value: req.body.value
    });

    try{
        const savedArm = await arm.save();
        res.json(savedArm);
    }
    catch(err) {
        res.json({message: err});
    }
})

// UPDATE
router.patch('/:id', async (req, res) => {
    try {
        const updateArm = await Arm.updateOne(
            { _id: req.params.id },
            { $set: { 
                type: req.body.type,
                nem: req.body.name,
                value: req.body.value
                } 
            }
        );
        res.json(updateArm);
    } catch (err) {
        res.json({ message: err });
    }
})

// DELETE
router.delete('/:id', async (req, res) =>{
    try{
        const removedArm = await Arm.remove({_id: req.params.id});
        res.json(removedArm);
    }catch (err) {
        res.json({message: err});
    }
})

module.exports = router;