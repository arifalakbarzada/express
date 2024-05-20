const express = require('express')
const app = express()
const port = 410;
const cards = [
  {id: 1, name: 'card1', description: 'card1 description', price: 100},
  {id: 2, name: 'card2', description: 'card2 description', price: 200},  
  {id: 3, name: 'card3', description: 'card3 description', price: 300},
  {id: 4, name: 'card4', description: 'card4 description', price: 400},
  {id: 5, name: 'card5', description: 'card5 description', price: 500},


]
app.listen(port, function () {
    console.log(`Example app listening on port ${port} !`);
  });

  app.get('/cards/:id', function (req, res) {
    res.send(JSON.stringify(cards.find((card) => card.id == req.params.id)));
  });