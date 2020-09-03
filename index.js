var express = require('express')

var app = express()

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8001, () => {
    console.log('listening')
})