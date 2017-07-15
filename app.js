var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Slot = require("./models/slot");
JSON = require('JSON');

// var Flatpickr = require("flatpickr");
// require("/node_modules/flatpickr/dist/flatpickr.min.css");
// require("/node_modules/flatpickr/dist/flatpickr.dark.min.css");
// Flatpickr('#flatpickr', {});




mongoose.connect("mongodb://localhost/pair_db");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// var global = require("global");
// var window = global.window;
// import root from 'window-or-global';

// flatpickr('#flatpickr', {enableTime: true});







// Slot.create({
//     name: "Doug",
//     startTime: "3pm",
//     endTime: "5pm",
//     description: "Work"
// });

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

// app.post("/slots", function(req, res){
//     Slot.all(function (err, slots) {
//     allSlots = slots;
//     console.log(allSlots);
//
//
// });
//
// });

//NEW - show form to create time slot
app.get("/slots/new", function (req, res){
    res.render("new");
});

//SHOW
app.get("/slots/:id", function(req, res){
    Slot.findById(req.params.id, function(err, foundSlot){
        if(err){
            res.redirect("/slots");
        } else {
            res.render("show", {slot: foundSlot});
        }
    });
});

//DESTROY
app.delete("/slots/:id", function(req, res){
    Slot.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            res.redirect("/slots/:id");
        } else {
            res.redirect("/slots");
        }
    });
});



//undefined result
// var allSlots;
// Slot.all(function (err, slots) {
//     allSlots = slots;
//
// });
//
// console.log(allSlots);




// logs slots in array
Slot.all(function (err, slots) {
    allSlots = slots;
    console.log(allSlots[0].name);


});

//logs found slot
Slot.findByName('fred', function(err, slots) {
    fredSlots = slots;
    console.log(fredSlots);
});

// Slot.findName(function (err, slots) {
//     fredSlots = slots;
//     console.log(allSlots[0].name);
//
//
// });

// Slot.findByName(function(Fred, err, slots) {
//     var fredSlots = slots;
//     console.log(fredSlots);
//
//
// });










// function getAllSlots(){
//     var query = Slot.find({}, function(err, slots) {
//         if (err) {
//             console.log(err);
//         } else {
//             slots
//         }
//     });
//         return query;
// }
//
// getAllSlots();



// function getAllSlots(){
//     var query = Slot.find({}).lean().exec(function (err, allSlots) {
//         allSlots
//     });
//     return query;
// };
//
//
// //
// var query = getAllSlots();
// // query.toObject();
// console.log(query);


// var all = Slot.find(function (err, allSlots) {
//     if (err) return console.error(err);
//     var all = allSlots;
//     all.toObject();
// });
//
// console.log(all);





// Slot.find({}, callback) {
//     if (err) {
//         callback(err, null);
//     } else {
//         callback(null, allSlots);
//     }
// });
// };
//
// var all = findAllSlots();
//
// console.log(all);












// Slot.find({}).lean().exec(function (err, docs) {
//     // docs are plain javascript objects instead of model instances
//     if(err){
//         console.log("OH NO, ERROR!");
//         console.log(err);
//     } else {
//         var allSlots = JSON.stringify(slots);
//
//     }
// });

// var findAll = function(){
//     Slot.find({}, function(err, slots){
//         if(err){
//             console.log("OH NO, ERROR!");
//             console.log(err);
//         } else {
//            var all = JSON.stringify(slots);
//
//         }
//          all;
//     });
// }
//
// findAll();
//
// console.log(all);


//works returns array
// var findAll = Slot.find({}, function(err, slots){
//
//     if(err){
//         console.log("OH NO, ERROR!");
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(slots));
//
//
//     }
// });


// console.log(findAll);



// works returns wrapper
// var findAll = Slot.find({}, function(err, slots){
//
//     if(err){
//         console.log("OH NO, ERROR!");
//         console.log(err);
//     } else {
//         var allSlots = JSON.stringify(slots);
//
//
//     }
// });


// console.log(findAll);

// returns objects only in console****
// var allSlots = function (){
//     var resultArray = [];
//     Slot.find({}, function(err, slots){
//         if(err){
//             console.log(err);
//         } else {
//             // console.log(slots);
//             resultArray.push(slots);
//         }
//
//     });
// };




//Returns Wrapper***
// var allSlots = Slot.find({}).lean().exec(function (err, slots) {
//     // var resultArray = [];
//     if(err){
//         console.log(err);
//     } else {
//         // console.log(slots);
//         // resultArray.push(JSON.stringify(slots));
//         JSON.stringify(slots);
//     }
//
// });
//
// console.log(allSlots);


// Slot.find({}).exec(function (error, slots){
//     allSlots = slots; // Sets article.owner to user's _id
//     allSlots.save();           // Persists _id to DB, pass in another callback if necessary
// });


















// var all;
//
// Slot.find({} , function(er , allSlots){
//     var all = allSlots;
//     // console.log(allSlots); // works fine
//     yieldAllSlots();
// });
//
// // console.log(name); // name is empty here, because the DB request is still in progress at this stage
// //
//  function yieldAllSlots() {
//     console.log(all);
// }


// var query = Slot.find({});
//
//
// var all = query.select();
// console.log(all);

// var allSlots = Slot.find({}, function (err, slots){});



// var allSlots;
// Slot.find({}, function(slots){
//     allSlots = slots;
// });
//
// console.log(allSlots);
//
//
// var allSlots = function (res) {
//     Slot.find({}, function(err, slots) {
//         if (err) res(err, null);
//         res(null, slots);
//     });
// }
//
// allSlots(function(err, res) {
//     if(res) {
//         var all = allSlots;
//     }
// });
//
// console.log(all);







app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});


//install nodemon -  npm -g nodemon
//install body-parser