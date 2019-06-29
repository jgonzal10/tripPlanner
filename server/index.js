const express = require('express')
const app = express()
const routes = require('./routes')

app.use('/', routes)

const port = 3200;

app.listen(port, ()=> 
console.log(`App port is ${port}`))