var orm = require("../config/orm.js");

var plate = {
  all: function(cb) {
    orm.all("plates", function(res) {
      cb(res);
    });
  }
};

module.exports = plate;
