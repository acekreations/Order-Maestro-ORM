//Express
var express = require("express");
var app = express();

//Set port
var PORT = process.env.PORT || 8000;

//Set static file path for server
app.use(express.static("public"));

//Setup body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setup handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set up routes
var apiRoutes = require("./controllers/apiRoutes.js");
app.use("/api", apiRoutes);

var htmlRoutes = require("./controllers/htmlRoutes.js");
app.use("/", htmlRoutes);


app.listen(PORT, function(){
  console.log("listening on port " + PORT);
});
