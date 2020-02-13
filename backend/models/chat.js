var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
  name: String,
  messages:[{
      username:String,
      message:String
  }]
});

module.exports = mongoose.model('Chat',chatSchema);
