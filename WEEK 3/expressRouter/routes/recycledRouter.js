//setting up the router 
const express = require('express'); 
const recycledRouter = express.Router();

//require the uuid
const { v4: uuidv4 } = require('uuid');

//variable for the recycled item list
let recycledItems = [

    {item: "Paper", description: "Used paper, yellow", recyclable: "yes", pricePerUnit: "$0.50", _id: uuidv4() },
    {item: "Glass", description: "Bottles", recyclable: "yes", pricePerUnit: "$1.00", _id: uuidv4() },
    {item: "Cardboard", description: "Boxes", recyclable: "yes", pricePerUnit: "$0.75", _id: uuidv4() },
    {item: "Paper", description: "Plastic bags", recyclable: "yes", pricePerUnit: "$0.25", _id: uuidv4() }

];

//get request for product
recycledRouter.get('/', (req, res) => {
    res.send(recycledItems)
});

// post request to update the product
recycledRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    recycledItems.push(newItem);

    console.log(recycledItems)
    res.send(`Successfully added ${newItem.item} to the database`);
});

//update the product

recycledRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully updated product.'
    })
})

//delete product 
recycledRouter.delete('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully deleted product.'
    })
})



module.exports = recycledRouter;
