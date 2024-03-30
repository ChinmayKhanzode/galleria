const express = require('express');
const userRouter = require('./routes/user.router');
const bodyParser = require("body-parser") 



const app = express();
app.use(express.json())

app.use('/',userRouter);

module.exports = app;