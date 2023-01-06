const express = require('express');

const router = express.Router();



router.get("/products",(req, res) => {
    res.send("Product");
});

router.post("/products", (req, res) => {
 res.send("Product Created")
})
module.exports = router;