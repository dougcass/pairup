var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//Landing Page
app.get('/', function (req, res) {
    res.render("landing.ejs");
});


var slots = [
    {name: "Dug", startTime: "3pm"},
    {name: "Bill", startTime: "4pm"}
]
//User Time Slots Home Page
app.get('/slots', function (req, res) {
    res.render("slots.ejs", {slots:slots});
});

app.post("/slots", function(req, res){
    // get data from form and add to slots array
    var name = req.body.name;
    var startTime = req.body.startTime;
    var newSlot = {name: name, startTime: startTime};
    slots.push(newSlot);
    //redirect back to slots page
    res.redirect("/slots");
    console.log(slots);
});

//Create time slot page
app.get('/slots/new', function (req, res) {
    res.render("new.ejs");
});







app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});


//install nodemon -  npm -g nodemon
//install body-parser