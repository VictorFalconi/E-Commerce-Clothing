const express = require('express');
const productSchema = require('../models/product')

const router = express.Router();

router.post("/products", (req, res) => {
    const product = productSchema(req.body);
    product.save().then((data) => res.json(data)).catch((err) => res.json({ message: err }));
});
   
router.get("/products",(req, res) => {
    productSchema
    .find()
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});

router.get("/products/:id",(req, res) => {
    const { id } = req.params;
    productSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});


module.exports = router;