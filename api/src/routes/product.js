const express = require('express');
const productSchema = require('../models/product')

const router = express.Router();



router.get("/products",(req, res) => {
    res.send("Product");
});

router.post("/products", (req, res) => {
 const product = productSchema(req.body);
 product
 .save()
 .then((data) => res.json(data))
 .catch((err)=> res.json({message: err}));
});
module.exports = router;