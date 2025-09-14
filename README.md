# 🛒💻 Carrinho de Compras no Terminal (Node.js)  

## 📌 Descrição  
Este projeto foi desenvolvido como parte de um **desafio da [Digital Innovation One](https://dio.me/)**.  
A proposta é criar um **sistema de carrinho de compras inspirado na Shopee**, rodando diretamente no **terminal com Node.js**.  

O usuário pode **adicionar, remover e modificar produtos** no carrinho, e o sistema cuida de tudo: quantidade de itens, totais automáticos 💰 e a simulação de uma experiência de compra — só que sem interface gráfica!  

---

## ✨ Funcionalidades
- ➕ Adicionar produtos ao carrinho  
- ➖ Remover produtos  
- 🔄 Alterar quantidade de itens  
- 🧮 Cálculo automático de subtotal, total e quantidade de produtos  
- 📜 Listagem dos produtos do carrinho  

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**  
- **readline** (para interação via terminal)  
- **JavaScript (ES6+)**  

---

## 📂 Estrutura do Projeto
```
📦 shopping-cart-simulator
 ┣ 📜 index.js       # Ponto de entrada do programa
 ┣ 📜 cart.js        # Lógica do carrinho de compras
 ┣ 📜 product.js     # Classe/objeto para representar produtos
 ┣ 📜 utils.js       # Funções auxiliares
 ┗ 📜 README.md      # Documentação do projeto
```

---

## ▶️ Como Executar
1. Clone este repositório:  
   ```bash
   git clone https://github.com/seu-usuario/shopping-cart-simulator.git
   ```
2. Acesse a pasta:  
   ```bash
   cd shopping-cart-simulator
   ```
3. Instale as dependências (se houver):  
   ```bash
   npm install
   ```
4. Execute o sistema:  
   ```bash
   node index.js
   ```

---

## 🎯 Aprendizados
- Manipulação de entradas do usuário via console.  
- Criação de lógica para **gerenciamento de estado** (carrinho de compras).  
- Estruturação de dados em **JavaScript**.  
- Organização de código em módulos.  

---

## 🚀 Possíveis Melhorias
- Adicionar persistência de dados (JSON ou banco de dados).  
- Criar sistema de categorias e catálogo de produtos.  
- Implementar cupons de desconto.  
- Simular checkout com cálculo de frete.  

---

## 👩‍💻 Autor
Projeto desenvolvido como parte do desafio da **Digital Innovation One**.  
