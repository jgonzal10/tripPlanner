const express = require('express')
const app = express()
const path = require('path');
const routes = require('./routes')

var cors = require("cors");
app.use(cors())
app.use('/api', routes)
app.use(express.static(path.join(__dirname, '../client/trip-planner/build')));

const port = 3001;

app.listen(port, ()=> 
console.log(`App port is ${port}`))