const express = require('express'); 
const shoppingRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let shopping = [
    { 
    item: "Paper Towels",  
    priority: "N/A", 
    _id: uuidv4() 
    },
    { 
    item: "Bread", 
    priority: "N/A", 
    _id: uuidv4() 
    },
    { 
    item: "Milk", 
    priority: "N/A",
     _id: uuidv4() 
    },
    { 
    item: "Pizza", 
    priority: "N/A",
    _id: uuidv4() 
    },
    {
    item: "Grapes", 
    priority: "N/A", 
    _id: uuidv4() 
    },
    {
    item: "Lettuce", 
    priority: "N/A",
    _id: uuidv4() 
    },
];

// Get All items
// Endpoint: GET - http://localhost3000/shopping
shoppingRouter.get('/', (req, res) => {
    res.send(shopping)
});

// Endpoint: GET - http://localhost3000/shopping/itemId
shoppingRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = shopping.find(item => item_id === itemId)
    res.send(shopping)
});

// Endpoint: GET - http://localhost3000/shopping/newItem
shoppingRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    shopping.push(newItem);

    console.log(shopping)
    res.send(`Successfully added ${newItem.item} to the database`);
});

//updating the item list
shoppingRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully updated product.'
    })
})

//deleting item from list
shoppingRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = shopping.findIndex(item => item._id === itemId);
    shopping.splice(itemIndex, 1);

    res.send('Item successfully deleted.')
})

//updating item list
.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = shopping.findIndex(item => item._id === itemId);
    const updateItem = Object.assign(shopping[itemIndex], req.body);

    res.send(`To do item successfully updated!`);
})

module.exports = shoppingRouter;