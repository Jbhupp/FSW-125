//setting up the port
const express = require('express');
const app = express();
const {v4: uuidv4} = ('uuid');

//setting up the const for the require method
const recycledRouter= require('./routes/recycledRouter')
const itemIntake = require('./routes/itemIntake')
const PORT = 5000

//application level middleware
app.use(express.json());

//using app.use to get to the endpoints
app.use('/recycledItems', recycledRouter);

app.use('/itemIntake', itemIntake);

//app listener
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})