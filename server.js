//Dependencies
var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

//Create instance of express
var app = express();

//Set PORT #
var PORT = process.env.PORT || 8000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//parse information to json to be read by server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Serves static content from our public folder
app.use(express.static(__dirname + '/public'));

//Allows us to use _method in our index to send data to our api
app.use(methodOverride("_method"));

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });