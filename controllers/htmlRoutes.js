var express = require("express");

var router = express.Router();

var Order = require("../models/orders.js");
var Plate = require("../models/plates.js");

router.get("/", function(req, res){
  Plate.findAll({
    order: [
      ['name', 'ASC'],
    ],
  }).then(function(plates){
    res.render("index", {plates: plates, active: { create: true}});
  });
});

router.get("/outstanding/:id", function(req, res){
  Order.findAll({
    where: {
      user_id: req.params.id,
      completed: false
    },
    order: [
      ['id', 'ASC'],
    ],
  }).then(function(orders){
    console.log(JSON.parse(orders[0].dataValues.items));
    for (var i = 0; i < orders.length; i++) {
      orders[i].dataValues.items = JSON.parse(orders[i].dataValues.items);
    }

    res.render("outstanding", {orders: orders, active: { outstanding: true}});
  });
});

router.get("/completed/:id", function(req, res){
  Order.findAll({
    where: {
      user_id: req.params.id,
      completed: true
    },
    order: [
      ['id', 'DESC'],
    ],
  }).then(function(orders){
    console.log(JSON.parse(orders[0].dataValues.items));
    for (var i = 0; i < orders.length; i++) {
      orders[i].dataValues.items = JSON.parse(orders[i].dataValues.items);
    }

    res.render("completed", {orders: orders, active: { completed: true}});
  });
});

module.exports = router;
