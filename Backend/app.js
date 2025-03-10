const express = require('express');
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

app.use(cors());


//test
app.get('/',(req,res)=>{
    res.send("Hello P");
});

module.exports = app;
