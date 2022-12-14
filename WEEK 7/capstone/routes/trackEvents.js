const express = require("express");
const trackEvents = express.Router();
const { v4: uuidv4 } = require('uuid');

//declaring const for events
const events = [
    {
        event: "Vehicle Oil Change",
        description: "Oil change, tire rotation.",
        completed: true,
        date: 11042022,
        itemsNeeded: ["appointment"],
        _id: uuidv4()
    },
    {
        event: "Open House",
        description: "Annual work event",
        completed: true,
        date: 11052022,
        itemsNeeded: ["drinks, ", "cups, ", "sausage patties"],
        _id: uuidv4()
    },
    {
        event: "New Year's Party",
        description: "Annual New Years Eve Party.",
        completed: false,
        date: 12312022,
        itemsNeeded: ["chip dip", "chips", "beverages"],
        _id: uuidv4()
    },
    {
        event: "Mother Daughter Shopping Trip",
        description: "Annual shopping trip with mother and sisters",
        completed: false,
        date: 11192022,
        itemsNeeded: ["over night bag", "snacks"],
        _id: uuidv4()
    }
];

//Get & Post
// Endpoint: GET - http://localhost:3000/events
trackEvents.route("/")
    .get((req, res) => {
        res.status(200)
        res.send(events)
    })
    .post((req, res) => {
    const newEvent = req.body
    newEvent._id = uuidv4()
    events.push(newEvent)
    res.status(201).send(newEvent)
});

//Get One
// Endpoint: GET - http://localhost:3000/items/eventId
trackEvents.get("/:eventId", (req, res, next) => {
    const eventId = req.params.eventId
    const foundEvent = events.find(event => event._id === eventId)
    if(!foundEvent){
        const error = new Error(`The item with id ${eventId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundEvent)
})

//Delete
// Endpoint: GET - http://localhost:3000/items/eventId
trackEvents.delete("/:eventId", (req, res) => {
    const eventId = req.params.eventId
    const event = req.body
    event._id = uuidv4()
    const eventIndex = events.findIndex(event => event._id === eventId)
    events.splice(eventIndex, 1)
    res.status(201).send("Event was deleted!")
})

//Update - Put
// Endpoint: GET - http://localhost:3000/items/eventId
trackEvents.put("/:eventId", (req, res) => {
    const eventId = req.params.eventId
    const event = req.body
    event._id = uuidv4()
    const eventIndex = events.findIndex(event => event._id === eventId)
    const updatedEvent = Object.assign(events[eventIndex], req.body) 
    res.status(201).send(updatedEvent)
})

//export trackEvents
module.exports = trackEvents;