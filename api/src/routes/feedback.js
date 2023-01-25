const express = require('express');
const feedbackSchema = require('../models/feedback');

const router = express.Router();



router.post("/feedback", async (req, res) => {
    const feedback = feedbackSchema(req.body);
        feedback
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
    
});

router.delete('/feedback/:id', (req, res) => {
    const { id } = req.params;
    feedbackSchema
    .remove({userId: id})
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
}
);

router.get("/feedback/:id", async (req, res) => {
    const { id } = req.params;
    // feedbackSchema.findById
    const feedback = await feedbackSchema
    .find({
        userId: id
    })
        res.status(200).json(feedback)

});

router.get("/feedback/", async (req, res) => {

    const feedback = await feedbackSchema.find({})
    res.status(200).json(feedback)
});



module.exports = router;