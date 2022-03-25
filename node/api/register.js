const mongoose = require('mongoose');
const express = require('express');
const app = express();
const  User = require('../models/user');
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');  

module.exports = (app) => {
  app.post("/register", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        res.status(400).json({email: "Ten email jest już zajęty"});
      }
      else {
        const newUser = new User({ 
          name: req.body.name,
          surename: req.body.surename,
          age: req.body.age,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.pass, 10)
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
