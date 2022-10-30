const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');
// const morgan = require('morgan');
const todoListRouter = require('./routes/todoList');
const shoppingRouter = require('./routes/shopping');
const todoIntake = require('./routes/todoIntake');

const PORT = 5000;

app.use(express.json());

// app.use(morgan('dev'));

app.use('/todoList', todoListRouter)

app.use('/shopping', shoppingRouter)

app.use('/todoIntake', todoIntake)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})

/*const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');

// Pull in the routers
const todoListRouter = require('./routes/todoList');
const shoppingRouter = require('./routes/shopping');
const todoIntake = require('./routes/todoIntake');

//declare the port
const PORT = 5000;

// Middleware : parse the body of the request
app.use(express.json());

app.use('/todoList', todoListRouter)

app.use('/shopping', shoppingRouter)

app.use('/todoIntake', todoIntake)

// Server listener
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})

*/