const express = require('express')
const app = express()
const port = 4010;
const cards = [
  {id: 1, name: 'card1', description: 'card1 description', price: 100},
  {id: 2, name: 'card2', description: 'card2 description', price: 200},  
  {id: 3, name: 'card3', description: 'card3 description', price: 300},
  {id: 4, name: 'card4', description: 'card4 description', price: 400},
  {id: 5, name: 'card5', description: 'card5 description', price: 500},


]
const products = [
  {id: 1, name: 'product1', description: 'product1 description', price: 100},
  {id: 2, name: 'product2', description: 'product2 description', price: 200},
  {id: 3, name: 'product3', description: 'product3 description', price: 300},
  {id: 4, name: 'product4', description: 'product4 description', price: 400},
  {id: 5, name: 'product5', description: 'product5 description', price: 500},
  {id: 6, name: 'product6', description: 'product6 description', price: 600},
  {id: 7, name: 'product7', description: 'product7 description', price: 700},
  {id: 8, name: 'product8', description: 'product8 description', price: 800},
  {id: 9, name: 'product9', description: 'product9 description', price: 900},
  {id: 10, name: 'product10', description: 'product10 description', price: 1000},

]
app.listen(port, function () {
    console.log(`Example app listening on port ${port} !`);
  });

  app.get('/cards/:id', function (req, res) {
    res.send(JSON.stringify(cards.find((card) => card.id == req.params.id)));
    
  });
  app.get('/products/:id', function (req, res) {
      res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));
  });
