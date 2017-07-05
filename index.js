var express = require('express');
var app = express();

app.set("view engine", "ejs");

//Landing Page
app.get('/', function (req, res) {
    res.render("landing.ejs");
});

//User Home Page
app.get('/home', function (req, res) {
    res.render("home.ejs");
});

//Time_slots


//Create Slot Page
app.get('/new', function (req, res) {
    res.render("home.ejs");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});


//install nodemon -  npm -g nodemon
//install body-parser