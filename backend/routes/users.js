var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/user');

router.post('/login', function(req, res) {
  User.findOne({username:req.body.username}, function(err, findUser) {
    if(findUser == null) {
      var newUser = new User({
        username: req.body.username,
        funds: 10000,
        portfolio: [],
        stocks: [
          {id:1, name:'BMW', price: 110},
          {id:2, name:'Apple', price: 210},
          {id:3, name:'NAVER', price: 170},
          {id:4, name:'Google', price: 300},
          {id:5, name:'Samsung', price: 200},
          {id:6, name:'SK', price: 150},
          {id:7, name:'LG', price: 100},
          {id:8, name:'Posco', price: 90},
          {id:9, name:'KIA', price: 100},
          {id:10, name:'Daum', price: 120},
          {id:11, name:'KT&G', price: 150},
          {id:12, name:'KT', price: 100}
        ]
      });
      User.create(newUser, function(err, newUser) {
        console.log('newUser 데이터가 생성되었습니다.');
        res.json(newUser);
      });
    } else {
      res.json(newUser);
    }
  });
});
router.get('/stocksLoad/:username', function(req, res) {
  User.findOne({username:req.params.username}, function(err, findStocks) {
    console.log(findStocks);
    res.json(findStocks);
  });
});

router.post('/buy/:username', function(req, res) {
  User.findOne({username:req.params.username}, function(err, findUser) {
    const record = findUser.portfolio.find(element => element.id == req.body.stockId);
    if(record) {
      record.quantity += req.body.quantity;
    } else {
      findUser.portfolio.push({
        id: req.body.stockId,
        quantity: req.body.quantity
      });
    }
    findUser.funds -= req.body.stockPrice * req.body.quantity;
    findUser.save();
    res.json(findUser.funds);
    console.log(findUser);
  });
});

router.post('/sell/:username', function(req, res) {
  User.findOne({username:req.params.username}, function(err, findUser) {
    const record = findUser.portfolio.find(element => element.id == req.body.stockId);
    if(record.quantity > req.body.quantity) {
      record.quantity -= req.body.quantity;
    } else {
      findUser.portfolio.splice(findUser.portfolio.indexOf(record),1);
    }
    findUser.funds += req.body.stockPrice * req.body.quantity;
    findUser.save();
    res.json(findUser.funds);
    console.log(findUser);
  });
});

router.get('/endDay/:username', function(req, res) {
  User.findOne({username:req.params.username}, function(err, findUser) {
    findUser.stocks.forEach((stock, i) => {
      stock.price = Math.round( stock.price * (1 + Math.random()-0.5));
    });
    findUser.save();
    console.log(findUser);
    res.json(findUser);
  });
});

module.exports = router;
