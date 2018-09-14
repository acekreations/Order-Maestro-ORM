var orm = require("../config/orm.js");

var order = {
  all: function(cb) {
    orm.all("orders", function(res) {
      cb(res);
    });
  },
  allWhere: function(col, target, cb) {
    orm.allWhere("orders", col, target, function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("orders", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, col, val, cb) {
    orm.update("orders", id, col, val, function(res) {
      cb(res);
    });
  }
};

module.exports = order;
