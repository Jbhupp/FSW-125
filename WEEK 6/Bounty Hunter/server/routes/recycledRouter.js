//setting up the router 
const express = require('express'); 
const recycledRouter = express.Router();

//require the uuid
const { v4: uuidv4 } = require('uuid');

//variable for the recycled item list
let recycledItems = [

    {item: "Paper", 
    description: "Used paper, yellow", 
    recyclable: "yes", pricePerUnit: "$0.50",
     _id: uuidv4()
     },

    {item: "Glass", 
    description: "Bottles", 
    recyclable: "yes", 
    pricePerUnit: "$1.00",
    _id: uuidv4() 

    },

    {item: "Cardboard", 
    description: "Boxes", 
    recyclable: "yes", 
    pricePerUnit: "$0.75",
    _id: uuidv4() 
    },

    {item: "Paper", 
    description: "Plastic bags", 
    recyclable: "yes", 
    pricePerUnit: "$0.25", 
    _id: uuidv4() 
    }
];

// Get All items
// Endpoint: GET - http://localhost:3000/recycledItems

recycledRouter.get('/', (req, res) => {
    res.send(recycledItems)
});

// Endpoint: GET - http://localhost:3000/recycledItems/itemId
recycledRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = recycledItems.find(item => item._id === itemId);
    res.send(oneItem)
});

// post request to update the product
// Endpoint: GET - http://localhost:3000/recycledItems/newItem
recycledRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    recycledItems.push(newItem);
    //console.log(recycledItems)
    res.send(`Successfully added ${newItem.item} to the database`);
});


//put request updating item
//Endpoint: PUT -http://localhost:3000/recycledItems/itemid

recycledRouter.put('/:itemId', (req, res) => {
    //console.log("updated item")
    // Grab the itemId from the URL
    const itemId = req.params.itemId;

    // Find the array index of the item with the matching _id
    const itemIndex = recycledItems.findIndex(recycledItems => recycledItems._id === itemId);

    // Push the updated item into items array where the _id matches
    Object.assign(recycledItems[itemIndex], req.body);
    res.status(200).send();
})

//update the product
// Endpoint: GET - http://localhost:3000/recycledItems
recycledRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully updated product.'
    })
})

//delete product
// Endpoint: GET - http://localhost:3000/recycledItems/itemId
recycledRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex(item => item._id === itemId);
    recycledItems.splice(itemIndex, 1);
    res.send('Item deleted successfully')
})


module.exports = recycledRouter;