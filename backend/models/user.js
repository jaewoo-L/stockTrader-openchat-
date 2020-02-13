var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  funds:Number,
  portfolio: [{
    id:String,
    quantity:Number,
    price:Number,
    name:String
  }],
  stocks: [{
    id:String,
    name:String,
    price: Number
  }]
});

module.exports = mongoose.model('User',userSchema);
