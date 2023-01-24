const express = require('express');
const productSchema = require('../models/product');
const { products } = require('../controllers/Product');
const cors = require('cors');

const router = express.Router();

router.post("/products", (req, res) => {
    const product = productSchema(req.body);
    product.save().then((data) => res.json(data)).catch((err) => res.json({ message: err }));
});
   
router.get("/products", 
(req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}, 
products);

router.get("/products/:id", (req, res) => {
    const { id } = req.params;
    productSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});

router.put("/products/:id",(req, res) => {
    const { id } = req.params;
    const { name, description, model, season, price, sizes, image, brand, active, category, stock } = req.body;
    productSchema
    .updateOne({_id: id}, {$set: {name, description, model, season, price, sizes, image, brand, active, category, stock}})
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});

router.put("/products/active/:id",(req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    productSchema
    .updateOne({_id: id}, {$set: { active }})
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});

// router.put("/products/updateStock/:id",(req, res) => {
//     const { id } = req.params;
//     let  { talleElejido, quantity, stock }  = req.body;
//     stock = stock[talleElejido]
//     productSchema
//     .updateOne({_id: id}, {$set:{ quantity }})
//     .then((data)=>res.json(data))
//     .catch((err)=> res.json({message: err}));
// });

router.delete("/products/:id",(req, res) => {
    const { id } = req.params;
    productSchema
    .remove({_id: id})
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});



module.exports = router;