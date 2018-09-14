// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
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
    var query = "SELECT * FROM " + table + " WHERE " + col + " = '" + target + "';";
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

    connection.query(query, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
