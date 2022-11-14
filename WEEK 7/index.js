const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(express.json());
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

