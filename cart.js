666// cart.js
const { getProductById } = require('./products');

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return false;
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    return true;
  }

  removeProduct(productId) {
    const index = this.items.findIndex(i => i.product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(i => i.product.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
      return true;
    } else if (item && quantity === 0) {
      this.removeProduct(productId);
      return true;
    }
    return false;
  }

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  getTotalItems() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  listItems() {
    return this.items;
  }
}

module.exports = Cart;
