const express = require('express')
const router = express.Router();
const Component = require('../models/Component');
const types = require('../constants');

//GET
router.get('/:id', async (req, res) => {
    try{
        const arm = await Component.findOne({_id: req.params.id, type: types.ARM});
        res.json(arm);
    }
    catch (err){
        res.json({message: err});
    }
})

// POST
router.post('/', async (req, res) => {
    const arm = new Component({
        type: types.ARM,
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
router.put('/:id', async (req, res) => {
    try {
        const updateArm = await Component.updateOne(
            { _id: req.params.id, type: types.ARM },
            { $set: { 
                name: req.body.name,
                value: req.body.value
                } 
            }
        );
        if (updateArm["n"] < 1){ res.json({error: `arm ${req.params.id} not found`}); }
        if (updateArm["n"] > 1){ res.json({error: `too many legs found with the id ${req.params.id}`}); }
        
        let arm = await Component.find({ _id: req.params.id, type: types.ARM });
        res.json(arm);
    } catch (err) {
        res.json({ message: err });
    }
})

// DELETE
router.delete('/:id', async (req, res) =>{
    try{
        let removedArm = await Component.remove({_id: req.params.id, type: types.ARM});
        if (removedArm["n"] < 1){
            res.json({error: `arm ${req.params.id} not found`});
        }
        res.json({message: `arm ${req.params.id} deleted`});
    }catch (err) {
        res.json({message: err});
    }
})

module.exports = router;