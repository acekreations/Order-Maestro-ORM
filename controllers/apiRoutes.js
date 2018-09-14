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


  //   {
  //   user_id: req.body.userId,
  //   items: req.body.items
  // }).then(function(data){
  //   res.json(data);
  // });
});

// router.post("/complete", function(req, res){
//   order.update(
//     {
//       completed: true
//     },
//     {
//       where: {
//         id: req.body.id
//       }
//     }
//   ).then(function(data){
//     res.json(data);
//   });
// });
//
// router.get("/outstanding/:id", function(req, res){
//   order.all({
//     where: {
//       user_id: req.params.id,
//       completed: false
//     },
//     order: [
//       ['id', 'ASC'],
//     ],
//   }).then(function(orders){
//     res.json(orders);
//   });
// });

module.exports = router;
