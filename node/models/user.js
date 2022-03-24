const mongoose = require('mongoose');



//Tworzymy model użytkownia 
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  secondname:{
    type:String,
  },
  age: {
    type: Number,
    default: 0,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;