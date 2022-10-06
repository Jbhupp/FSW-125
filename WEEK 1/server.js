const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/', (req, res) => {
    res.send("Hello World! - Test!")
})

app.post('/', (req, res) => {
    res.send("Hello World! - Post to Test")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`)
})