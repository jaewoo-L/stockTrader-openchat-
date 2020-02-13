var express = require('express');
var router = express.Router();
var Chat = require('../models/chat');

router.get('/load', function(req,res) {
  Chat.findOne({name:'open'},function(err, chats) {
    if(err) {
      return res.status(500).send({error: 'database failure'});
    } else {
      res.json(chats);
    }
  })
});
router.put('/save', function(req, res) {
  let name = req.body.name;
  let messages = req.body.messages;
  console.log(name);
  console.log(messages);
  Chat.findOneAndUpdate({name:name},{messages:messages},{new:true}, function(err,doc){
      res.json(doc);
  });
});

module.exports = router;
