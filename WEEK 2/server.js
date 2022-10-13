//setting up the port
const express = require('express')
const app = express()
const PORT = 5000

//creating the variables for the API to pull data from
let user = [

    {user: "James", age: "74", state: "Ohio" },
    {user: "Samantha", age: "37", state: "Florida" },
    {user: "Harry", age: "52", state: "Texas"},
    {user: "Jill", age: "45", state: "Georgia"},

]

let food =[

    {food: "Pizza"},
    {food: "Pasta"},
    {food: "Steak"},
    {food: "French Fries"},

]
    
let drink = [

    {drink: "Pepsi"},
    {drink: "Water"},
    {drink: "Tea"},
    {drink: "Lemonade"},

]


let game = [

    {game: "Basketball"},
    {game: "Baseball"},
    {game: "Football"},
    {game: "Soccer"},

]

//creating the get request and user endpoints
//GET http://localhost:5000/user
app.get('/user', (req, res) => {
    res.send(user)
})

//GET http://localhost:5000/food
app.get('/food', (req, res) => {
    res.send(food)
})

//GET http://localhost:5000/drink
app.get('/drink', (req, res) => {
    res.send(drink)
})

//GET http://localhost:5000/game
app.get('/game', (req, res) => {
    res.send(game)
})

app.listen(PORT, () => {
    console.log(`Example app listening at ${PORT}`)
})