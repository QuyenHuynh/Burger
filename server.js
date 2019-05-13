//Dependencies
const express = require('express');
const exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

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
app.use(express.static("public"));

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });