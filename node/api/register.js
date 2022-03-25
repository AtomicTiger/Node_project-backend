const mongoose = require('mongoose');
const express = require('express');
const app = express();
const  User = require('../models/user');
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');  

module.exports = (app) => {
  app.post("/register", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user.username != req.body.username) {
        res.status(400).json({username: "Ta nazwa jest już zajęty"});
      }
      else {
        const newUser = new User({ 
          name: req.body.name,
          surename: req.body.surename,
          username: req.body.username,
          age: req.body.age,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.pass, 10),
        });
        newUser.save();
        res.status(200).json({msg: newUser});
      }
  
    } 
    catch (err) {
      console.error(err);
    }
  });
}
