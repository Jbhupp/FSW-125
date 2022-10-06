const express = require('express')
const app = express()
const port = 3000


let actors = {

};

let food ={

}

let beverages = {

}

let sports = {

}


app.get('/', (req, res) => {
    res.send("actors")
})

app.get('/', (req, res) => {
    res.send("food")
})

app.post('/', (req, res) => {
    res.send("beverages")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`)
})