const express = require('express');
const productSchema = require('../models/product');
const { products } = require('../controllers/Product');

const router = express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post("/products", (req, res) => {
    const product = productSchema(req.body);
    product.save().then((data) => res.json(data)).catch((err) => res.json({ message: err }));
});
   
router.get("/products", products);

router.get("/products/:id",(req, res) => {
    const { id } = req.params;
    productSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});

router.put("/products/:id",(req, res) => {
    const { id } = req.params;
    const { name, description, model, season, price, sizes, image, brand, active } = req.body;
    productSchema
    .updateOne({_id: id}, {$set: {name, description, model, season, price, sizes, image, brand, active}})
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

router.delete("/products/:id",(req, res) => {
    const { id } = req.params;
    productSchema
    .remove({_id: id})
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});



module.exports = router;