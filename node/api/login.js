const { Sequelize, Model, DataTypes } = require('sequelize');
const { Router } = require('express');
const  User = require('../models/user');
const bcrypt = require("bcrypt");
const router = Router();


const login = router.post('/login',async(req,res,next)=>{
  const user = await User.findOne({ where : {Nick : req.body.login }});
  if(user){
     const password_valid = await bcrypt.compare(req.body.pass,user.Password);
     if(password_valid){
      res.send('you are in');
     } else {
       res.status(400).json({ error : "Password Incorrect" });
     }
   
   }else{
     res.status(404).json({ error : "User does not exist" });
   }
});

module.exports = login;