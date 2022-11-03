const express = require('express'); 
const itemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// Create an array of items
// In the future this will be a database
let items = [
    { 
        item: 'jeans',
        type: 'clothing', 
        _id: uuidv4() 
    },
    { 
        item: 'apple',
        type: 'fruit', 
        _id: uuidv4() 
    },
    { 
        item: 'grapes',
        type: 'fruit',
        _id: uuidv4() 
    },
    { 
        item: 'shirt',
        type: 'clothing',
        _id: uuidv4() 
    },
    {
        item: 'roses',
        type: 'flower',
        _id: uuidv4() 
    },
    {
        item: 'phone',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'socks',
        type: 'clothing',
        _id: uuidv4()
    },
    {
        item: 'mums',
        type: 'flower',
        _id: uuidv4()
    },
    {
        item: 'baby',
        type: 'toy',
       _id: uuidv4()
    },
    {
        item: 'iPad',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'banana',
        type: 'fruit',
        _id: uuidv4()
    },
    {
        item: 'sweater',
        type: 'clothing',
        _id: uuidv4()
    },
    {
        item: 'computer',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'tractors',
        type: 'toy',
        _id: uuidv4()
    },
    {
        item: 'watermelon',
        type: 'fruit',
        _id: uuidv4()
    },
    {
        item: 'tee shirt',
        type: 'clothing',
       _id: uuidv4()
    },
    {
        item: 'daisy',
        type: 'flower',
        _id: uuidv4()
    },
    {
        item: 'iPod',
        type: 'electronics',
        _id: uuidv4()
    },
    {
        item: 'power wheels',
        type: 'toy',
       _id: uuidv4()
    },
    {
        item: 'lily',
        type: 'flower',
        _id: uuidv4()
    },
    {
        item: 'oranges',
        type: 'fruit',
        _id: uuidv4()
    },
];

// Get All items
// Endpoint: GET - http://localhost:3000/items
itemsRouter.get('/', (req, res) => {
    res.send(items)
});

// Get ONE Item
// Endpoint: GET - http://localhost:3000/items/:itemId
itemsRouter.get('/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const singleItem = items.find(item => item._id === itemId);

  res.send(singleItem);
});

// Filtered item by type to the item array
// Endpoint: POST - http://localhost:3000/items
itemsRouter.get('/search/type', (req, res) => {
    const itemType = req.query.type;
    const filteredItems = items.filter(items => items.type === itemType);

    res.send(filteredItems);
});

// Filtered item by name to the item array
// Endpoint: POST - http://localhost:3000/items
itemsRouter.get('/search/name', (req, res) => {
    const itemName = req.query.item;
    const filteredName = items.filter(items => items.item === itemName);

    res.send(filteredName);
});

module.exports = itemsRouter;