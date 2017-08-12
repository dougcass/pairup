var express = require("express");
var router = express.Router();
var Slot = require("../models/slot");




//User Time Slots Home Page
router.get('/slots', function (req, res) {
    Slot.find({}, function(err, slots){
        if(err){
            console.log("error");
        } else {
            res.render("slots", {slots: slots});
        }
    });

});


//CREATE - add new time slot to DB
router.post("/slots", function(req, res){
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
router.get("/slots/new", function (req, res){
    res.render("new");
});

//SHOW
router.get("/slots/:id", function(req, res){
    Slot.findById(req.params.id, function(err, foundSlot){
        if(err){
            res.redirect("/slots");
        } else {
            res.render("show", {slot: foundSlot});
        }
    });
});

//DESTROY
router.delete("/slots/:id", function(req, res){
    Slot.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            res.redirect("/slots/:id");
        } else {
            res.redirect("/slots");
        }
    });
});


//Query-promise format: creates findAll array in function but global empty
// var query = Slot.find({});
//
// var promise = query.exec();
//
// var findAll = [];
//
// var allSlots = promise.then(function (doc) {
//     var all = doc;
//     return all;
//     }).then(function(all){
//     return findAll.push(all);
//
//     });
//
// console.log(findAll);









//Works returns object using static method
// Slot.findByName("Doug", function(err, slot) {
//     if (err) {
//         console.log(err);
//     } else {
//         // userSlot.push(slot);
//         console.log(slot);
//     }
//     // do something with user
// });


//Works- assigns slots to allSlots variable in function scope
// function retrieveAll(callback) {
//     Slot.find({}, function(err, slots) {
//         if (err) {
//             callback(err, null);
//         } else {
//             callback(null, slots);
//         }
//     });
// }
//
//
// retrieveAll(function(err, slots) {
//     if (err) {
//         console.log(err);
//     } else {
//         // userSlot.push(slot);
//         // console.log(slots);
//         var allSlots = slots;
//         console.log(allSlots);
//     }
//
// });












// logs slots in array
// Slot.all(function (err, slots) {
//     var allSlots = slots;
//     console.log(allSlots[0].name);
//
//
// });






//logs found slot
// Slot.findByName('fred', function(err, slots) {
//     fredSlots = slots;
//     fredSlots;
// });

// logs found user
// Slot.findOne({name: 'Doug'})
//     .then(function(user){
//         console.log(user);
//     });

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}





module.exports = router;
