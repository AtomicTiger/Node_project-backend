// require tu
const path = require("path");
const express = require('express');
const app = express();
const { Sequelize, Model, DataTypes } = require('sequelize');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname)));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

//tu api 
require('./node/api/register')(app);
require('./node/api/login')(app);

dotenv.config();

// Odpala serwer Node (Wchodzisz przez localhost:3001)
app.listen(3001, async () => {
    console.log("Server is running on localhost3001");
});

mongoose.connect('mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/3DTE',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

