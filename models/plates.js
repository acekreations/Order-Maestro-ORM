// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var plate = {
  all: function(cb) {
    orm.all("plates", function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = plate;
