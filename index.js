// index.js
const readline = require('readline');
const Cart = require('./cart');
const { products } = require('./products');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cart = new Cart();

function showMenu() {
  console.log('\n=== Carrinho de Compras Shopee ===');
  console.log('1. Listar produtos disponíveis');
  console.log('2. Adicionar produto ao carrinho');
  console.log('3. Remover produto do carrinho');
  console.log('4. Alterar quantidade de um produto');
  console.log('5. Ver carrinho');
  console.log('6. Sair');
  rl.question('Escolha uma opção: ', handleMenu);
}

function handleMenu(option) {
  switch(option.trim()) {
    case '1':
      listProducts();
      break;
    case '2':
      addProductPrompt();
      break;
    case '3':
      removeProductPrompt();
      break;
    case '4':
      updateQuantityPrompt();
      break;
    case '5':
      viewCart();
      break;
    case '6':
      rl.close();
      break;
    default:
      console.log('Opção inválida.');
      showMenu();
  }
}

function listProducts() {
  console.log('\nProdutos disponíveis:');
  products.forEach(p => {
    console.log(`${p.id}. ${p.name} - R$${p.price.toFixed(2)}`);
  });
  showMenu();
}

function addProductPrompt() {
  rl.question('Digite o ID do produto para adicionar: ', id => {
    rl.question('Quantidade: ', qty => {
      const success = cart.addProduct(Number(id), Number(qty));
      if (success) {
        console.log('Produto adicionado ao carrinho!');
      } else {
        console.log('Produto não encontrado.');
      }
      showMenu();
    });
  });
}

function removeProductPrompt() {
  rl.question('Digite o ID do produto para remover: ', id => {
    const success = cart.removeProduct(Number(id));
    if (success) {
      console.log('Produto removido do carrinho!');
    } else {
      console.log('Produto não encontrado no carrinho.');
    }
    showMenu();
  });
}

function updateQuantityPrompt() {
  rl.question('Digite o ID do produto para alterar: ', id => {
    rl.question('Nova quantidade: ', qty => {
      const success = cart.updateQuantity(Number(id), Number(qty));
      if (success) {
        console.log('Quantidade atualizada!');
      } else {
        console.log('Produto não encontrado no carrinho.');
      }
      showMenu();
    });
  });
}

function viewCart() {
  const items = cart.listItems();
  if (items.length === 0) {
    console.log('\nCarrinho vazio.');
  } else {
    console.log('\nSeu carrinho:');
    items.forEach(i => {
      console.log(`${i.product.name} (x${i.quantity}) - R$${(i.product.price * i.quantity).toFixed(2)}`);
    });
    console.log(`Total de itens: ${cart.getTotalItems()}`);
    console.log(`Total a pagar: R$${cart.getTotal().toFixed(2)}`);
  }
  showMenu();
}

rl.on('close', () => {
  console.log('\nObrigado por usar o carrinho de compras Shopee!');
  process.exit(0);
});

showMenu();
