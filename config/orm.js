var connection = require("../config/connection.js");

var orm = {
  all: function(table, cb) {
    var query = "SELECT * FROM " + table + ";";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  allWhere: function(table, col, target, cb) {
    var query = "SELECT * FROM " + table + " WHERE " + col + " = '" + target + "' AND complete = false;";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    cols = cols.join(", ");
    vals = vals.join(", ");
    console.log(cols, vals);
    var query = "INSERT INTO " + table + "(" + cols + ") VALUES(" + vals + ")";

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(table, id, col, val, cb) {
    var query = "UPDATE " + table + " SET " + col + " = " + val + " WHERE id = " + id + ";";

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
