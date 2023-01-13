const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, loadCart } = require('../controllers/Cart');

router.get('/cart', (req, res) => {
  loadCart();
  res.json(cart);
});

router.post('/cart', (req, res) => {
  addToCart(req.body);
  res.json(cart);
});

router.delete('/cart/:name', (req, res) => {
  removeFromCart({ name: req.params.name });
  res.json(cart);
});

module.exports = router;
