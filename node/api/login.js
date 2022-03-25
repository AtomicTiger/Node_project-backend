const mongoose = require("mongoose");
const { Router } = require('express');
const  User = require('../models/user');
const bcrypt = require("bcrypt");
const router = Router();

module.exports = (app) => {
  app.post('/login',async(req,res,next)=>{
    const user = await User.findOne({ 'username' : req.body.username });
    console.log(user);
    if(user){
       const password_valid = await bcrypt.compareSync(req.body.pass, user.password);
       if(password_valid){
        res.send('you are in');
       } else {
         res.status(400).json({ error : "Password Incorrect" });
       }
     
     } else {
       res.status(404).json({ error : "User does not exist" });
     }
  });
}