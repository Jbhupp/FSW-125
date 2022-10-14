
//setting up the router
const express = require('express');
const itemIntake = express.Router();

//require the uuid 
const { v4: uuidv4 } = require('uuid');

//export the itemIntake 
module.exports = itemIntake;