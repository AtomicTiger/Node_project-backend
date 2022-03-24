// require tu
const path = require("path");
const express = require('express');
const app = express();
const { Sequelize, Model, DataTypes } = require('sequelize');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

//tu api 
const Register = require('./node/api/register');
const Login = require('./node/api/login')

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname)));
app.set('view engine', 'ejs');

// Odpala serwer Node (Wchodzisz przez localhost:3001)
app.listen(3001, async () => {
    console.log("Server is running on localhost3001");
});

mongoose.connect('',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

app.post("/register", Register)

app.post("/login", Login)
