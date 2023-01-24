const express = require('express');
const buggySchema = require('../models/buggy');

const router = express.Router();

router.post("/buggy", async (req, res) => {
    const buggy = buggySchema(req.body);
        buggy
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
    
});

router.delete('/buggy/:id', (req, res) => {
    const { id } = req.params;
    buggySchema
    .remove({userId: id})
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});


  router.get("/buggy/:id", async (req, res) => {
    const { id } = req.params;
    // buggySchema.findById(id)

    const buggy = await buggySchema.find({userId: id})
        res.status(200).json(buggy)

});


router.get("/buggy/", async (req, res) => {

    const buggy = await buggySchema.find({})
    res.status(200).json(buggy)
});


module.exports = router;