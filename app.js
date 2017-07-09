var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Slot = require("./models/slot");

mongoose.connect("mongodb://localhost/pair_db");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

Slot.create({
    name: "Doug",
    startTime: "3pm",
    endTime: "5pm",
    description: "Work"
});

//Landing Page
app.get('/', function (req, res) {
    res.render("landing.ejs");
});


//User Time Slots Home Page
app.get('/slots', function (req, res) {
    Slot.find({}, function(err, slots){
        if(err){
            console.log("error");
        } else {
            res.render("slots", {slots: slots});
        }
    });

});



//CREATE - add new time slot to DB
app.post("/slots", function(req, res){
    // get data from form and add to slots array
    // var name = req.body.name;
    // var startTime = req.body.startTime;
    // var newSlot = {name: name, startTime: startTime};
    //Create new time slot and save to DB
    Slot.create(req.body.slot, function(err, newSlot){
        if(err) {
            console.log(err);
        } else {
            res.redirect("/slots");
        }
    });

});

//NEW - show form to create time slot
app.get("/slots/new", function (req, res){
    res.render("new");
});

//SHOW
app.get("/slots/:id", function(req, res){
    Slot.findById(req.params.id, function(err, foundSlot){
        if(err){
            res.redirect("/slots");
        }else {
            res.render("show", {slot: foundSlot})
        }
    });
});











app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});


//install nodemon -  npm -g nodemon
//install body-parser