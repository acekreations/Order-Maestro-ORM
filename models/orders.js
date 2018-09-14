// Import the ORM to create functions that will interact with the database.
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
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("orders", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("orders", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(columnName, id, cb) {
    orm.delete("orders", columnName, id, function(){
      cb();
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = order;
