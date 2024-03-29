// require express
var express = require("express");

//init express app
var app = express();

// requre locations from ./service/locations
var locations = require("./service/locations");

//make express serve static content from /static folder
app.use("/static", express.static("static"));

// create location service that handles
//http://localhost:3000/locations?num=N request and returns
//top N locations from locations array
app.get("/locations" , function(req, res) {
    res.set("Content-Type", "application/json");
    res.send(locations.getLocations(req.query.num));
});

// make express listen to port 3000
app.listen(3000, function() {
    console.log("listening on port 3000")
});
