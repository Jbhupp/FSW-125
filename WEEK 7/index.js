const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//cross origin resource sharing
app.use(cors());

// Middleware : parse the body of the request
app.use(express.json());

//logging errors
app.use(morgan('dev'));

//Pulling in the routes
app.use("/events", require("./capstone/routes/trackEvents.js"));

//error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server listener
app.listen(3000, () => {
    console.log("The server is running on Port 3000.")
});

