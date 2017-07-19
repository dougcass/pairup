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


// logs slots in array
Slot.all(function (err, slots) {
    allSlots = slots;
    console.log(allSlots[0].name);


});

//logs found slot
Slot.findByName('fred', function(err, slots) {
    fredSlots = slots;
    fredSlots;
});


module.exports = router;
