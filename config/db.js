const mongoose = require('mongoose')


console.log("insinde");

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/galleria').on('open',()=>{
    console.log("Mongose connection succesfull");
}).on('error',()=>{
    console.log("errorr has occured");
})

module.exports = connection;