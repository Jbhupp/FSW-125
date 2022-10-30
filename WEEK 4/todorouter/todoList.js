const express = require('express'); 
const todoListRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let todoList = [
    { 
    item: "Wash Jeep",  
    priority: "yes", 
    finishTime: "Sunday",
    _id: uuidv4() 
    },
    { 
    item: "Tutor Session", 
    priority: "yes",
    finishTime: "Sunday Evening",  
    _id: uuidv4() 
    },
    { 
    item: "Grocery Trip", 
    priority: "yes", 
    finishTime: "Tuesday", 
     _id: uuidv4() 
    },
    { 
    item: "Start Laundry", 
    priority: "no",
    finishTime: "Monday", 
    _id: uuidv4() 
    },
    {
    item: "Clean House", 
    priority: "yes",
    finishTime: "Wednesday", 
    _id: uuidv4() 
    },
    {
    item: "Mow Yard", 
    priority: "no",
    finishTime: "Thursday",  
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

todoListRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    todoList.push(newItem);

    console.log(todoList)
    res.send(`Successfully added ${newItem.item} to the database`);
});

todoListRouter.patch('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully list product.'
    })
})

todoListRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex(item => itemId === itemId);
    todoList.splice(itemIndex, 1);

    res.send('Item successfully deleted.')
})

.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex(item => itemId === itemId);
    const updateItem = Object.assign(todoList[itemIndex], req.body);

    res.send(`To do item successfully updated!`, updateItem);
})

module.exports = todoListRouter;

