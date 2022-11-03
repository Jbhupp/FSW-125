const express = require('express');
const app = express();
const { v4: uuidv4 } = ('uuid');

// Pull in the router exported from items.js
const itemsRouter = require('./routes/items');

// Declare the port
const PORT = 3000;

// Middleware : parse the body of the request
app.use(express.json());

// Routes
app.use('/items', itemsRouter)

// Server listener
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})