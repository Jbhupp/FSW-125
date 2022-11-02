const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');

// Pull in the routers
const todoListRouter = require('./routes/todoList');
const shoppingRouter = require('./routes/shopping');
const todoIntake = require('./routes/todoIntake');

//declare the port
const PORT = 3000;

//middleware: parse the body of the request
app.use(express.json());

//routes
app.use('/todoList', todoListRouter)

app.use('/shopping', shoppingRouter)

app.use('/todoIntake', todoIntake)

//server listener
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})