const express = require('express'); 
const todoListRouter = express.Router();
const { v4: uuidv4 } = require('uuid');



//variable for the todoList
let todoList = [
    { 
    item: "Clean House",  
    priority: "yes", 
    finishTime: "Wednesday",
    _id: uuidv4() 
    },
    { 
    item: "Wash Car", 
    priority: "no",
    finishTime: "12 pm",  
    _id: uuidv4() 
    },
    { 
    item: "Grocery Shopping", 
    priority: "yes", 
    finishTime: "Sunday",
     _id: uuidv4() 
    },
    { 
    item: "Homework", 
    priority: "yes",
    finishTime: "Saturday", 
    _id: uuidv4() 
    },
    {
    item: "Mow yard", 
    priority: "no",
    finishTime: "Friday", 
    _id: uuidv4() 
    },
    {
    item: "Tutor Session", 
    priority: "yes",
    finishTime: "Sunday", 
    _id: uuidv4() 
    },
];

// todoListRouter
//     .get('/', (req, res, next) => {
//         console.log("pre next")
//         next();
//     })

//     .get('/', (req, res, next) => {
//         req.body = {somePropKry : 'value'}
//         console.log("this is next")
//         next()
//     })

//     .get('/', (req, res) => {
//         res.send(req.body)
//     });


//get request for product
todoListRouter.get('/', (req, res) => {
    res.send(todoList)
});

todoListRouter.get('/search/finishTime', (req, res) => {
    const finishTimeSearch = req.query.finishTime;
    const filteredfinishTime = todoList.filter(item => item.finishTime === finishTimeSearch );

    res.send(filteredfinishTime)
});

todoListRouter.get('/search/priority', (req, res) => {
    const prioritySearch = req.query.priority;
    const filteredpriority = todoList.filter(item => item.priority === prioritySearch );

    res.send(filteredpriority)
});

todoListRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = todoList.find(item => itemId === itemId)
    res.send(oneItem)
});

// post request to update the product
todoListRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    todoList.push(newItem);

    console.log(todoList)
    res.send(newItem);
});

todoListRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully list product.'
    })
})

//delete request deleting item
//Endpoint: PUT -http://localhost:5000/todoList/itemid
todoListRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex(item => itemId === itemId);
    todoList.splice(itemIndex, 1);

    res.send('Item successfully deleted.')
})


//put request updating item
//Endpoint: PUT -http://localhost:5000/todoList/itemid

.put('/:itemId', (req, res) => {

     // Grab the itemId from the URL
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex(item => itemId === itemId);

    // Find the array index of the item with the matching _id
    const updateItem = Object.assign(todoList[itemIndex], req.body);

    // Push the updated item into items array where the _id matches
    res.status(200).send(updateItem);
})

module.exports = todoListRouter;