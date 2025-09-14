// products.js
// Lista de produtos disponíveis para compra

const products = [
  { id: 1, name: 'Camiseta', price: 39.9 },
  { id: 2, name: 'Tênis', price: 129.9 },
  { id: 3, name: 'Fone de Ouvido', price: 59.9 },
  { id: 4, name: 'Mochila', price: 89.9 },
  { id: 5, name: 'Relógio', price: 199.9 },
];

function getProductById(id) {
  return products.find(p => p.id === id);
}

module.exports = { products, getProductById };
