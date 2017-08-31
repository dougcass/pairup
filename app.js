var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var User = require("./models/user");
var Slot = require("./models/slot");

//requiring routes
var slotsRoutes = require("./routes/slots");
var indexRoutes = require("./routes/index");






mongoose.connect("mongodb://localhost/pair_db");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));




// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Secret",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use(slotsRoutes);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

// app.get('/slots',isLoggedIn, function (req, res) {
//
//     Slot.personal(req.user._id).exec()
//         .then(function (personal) {
//             return Slot.find({'owner.id': {$ne: req.user._id}}).exec()
//                 .then(function (other) {
//                     return [personal, other];
//                     console.log(personal);
//                 });
//         })
//         .then(function (personal, other) {
//             var personal = personal;
//             var other = other;
//             res.render("slots", {personal: personal, other: other});
//             // res.render('./views/issues/index', {user: user, project: project, issues: issues});
//         })
//         .then(undefined, function (err) {
//             console.log(err);
//         })
//
// })










// Slot.create({
//     name: "Doug",
//     startTime: "3pm",
//     endTime: "5pm",
//     description: "Work"
// });










//undefined result
// var allSlots;
// Slot.all(function (err, slots) {
//     allSlots = slots;
//
// });
//
// console.log(allSlots);




// logs slots in array
// Slot.all(function (err, slots) {
//     allSlots = slots;
//     console.log(allSlots[0].name);
//
//
// });

//logs found slot
// Slot.findByName('fred', function(err, slots) {
//     fredSlots = slots;
//     fredSlots;
// });


// function allSlots(slots){
//     var fredSlots = slots;
// }
//
// var findAll = function(){
//     Slot.findByName('fred', function(err, slots) {
//         slots;
//
//         allSlots(slots);
//     });
// }
//
// console.log(fredSlots);










//
// console.log(all);


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


// works returns array
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