const mongoose = require('mongoose');
const { Router } = require('express');
const  User = require('../models/user');
const bcrypt = require("bcrypt");

const router = Router();

const register = router.post("/register", async (req,res) =>{
    const salt = await bcrypt.genSalt(10);
    if(req.body.Password == req.body.Password_2){  
      db.mycol.insert({ 
          Name: req.body.login, 
          Surename: req.body.secname,
          Age:req.body.age,
          Password: await bcrypt.hash(req.body.pass, salt),
          Email : req.body.email,
      });
      console.log("User's auto-generated ID:", user);
      res.json({ emial: req.body.email });
    }
    else{
      console.log("pass is not the same")
    }
});

module.exports = register
