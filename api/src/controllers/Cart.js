const fs = require('fs');

let cart = [];

function addToCart(item) {
  cart.push(item);
  saveCart();
}

function removeFromCart(item) {
  let index = cart.findIndex((i) => i.name === item.name);
  if (index > -1) {
    cart.splice(index, 1);
  }
  saveCart();
}

function saveCart() {
  fs.writeFileSync('./cart.json', JSON.stringify(cart));
}

function loadCart() {
  if (fs.existsSync('./cart.json')) {
    cart = JSON.parse(fs.readFileSync('./cart.json'));
  }
}

module.exports = {
  addToCart,
  removeFromCart,
  loadCart
};
