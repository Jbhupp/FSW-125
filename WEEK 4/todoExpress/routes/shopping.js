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

shoppingRouter.get('/', (req, res) => {
    res.send(shopping)
});

shoppingRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = shopping.find(item => item_id === itemId)
    res.send(shopping)
});

shoppingRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    shopping.push(newItem);

    console.log(shopping)
    res.send(`Successfully added ${newItem.item} to the database`);
});

shoppingRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully updated product.'
    })
})

shoppingRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = shopping.findIndex(item => item._id === itemId);
    shopping.splice(itemIndex, 1);

    res.send('Item successfully deleted.')
})

.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = shopping.findIndex(item => item._id === itemId);
    const updateItem = Object.assign(shopping[itemIndex], req.body);

    res.send(`To do item successfully updated!`);
})

module.exports = shoppingRouter;