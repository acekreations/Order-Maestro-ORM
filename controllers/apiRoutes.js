var express = require("express");

var router = express.Router();

var order = require("../models/orders.js");

router.post("/place", function(req, res){
  var cols = ["user_id", "items"];
  var items = JSON.stringify(req.body.items);
  var vals = ["'" + req.body.userId + "'", items];
  order.create(cols, vals, function(data){
    res.json(data);
  });
});

router.post("/complete", function(req, res){
  order.update(req.body.id, "complete", true, function(data){
    res.json(data);
  });
});

module.exports = router;
