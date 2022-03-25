const mongoose = require('mongoose');
const Schema = mongoose.Schema



//Tworzymy model użytkownia 
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surename:{
    type: String,
    required:true
  },
  username:{
    type: String,
    required: true,
    unique:true
  },
  age: {
    type: Number,
    required:true
  },
  email:{
    type: String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required:true
  }
});

module.exports = User = mongoose.model("User", UserSchema);