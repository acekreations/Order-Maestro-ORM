var express = require("express");

var router = express.Router();

var order = require("../models/orders.js");
var plate = require("../models/plates.js");

router.get("/", function(req, res){
  plate.all(function(plates){
    res.render("index", {plates: plates, active: { create: true}});
  });
});

router.get("/outstanding/:id", function(req, res){
  order.allWhere("user_id", req.params.id, function(orders){
    for (var i = 0; i < orders.length; i++) {
      orders[i].items = JSON.parse(orders[i].items);
    }

    res.render("outstanding", {orders: orders, active: { outstanding: true}});
  });
});

router.get("/completed/:id", function(req, res){
  order.allWhere("id", req.params.id, function(orders){
    for (var i = 0; i < orders.length; i++) {
      orders[i].dataValues.items = JSON.parse(orders[i].items);
    }

    res.render("outstanding", {orders: orders, active: { completed: true}});
  });
});

module.exports = router;
