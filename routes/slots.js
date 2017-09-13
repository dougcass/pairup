'use strict';
var express = require("express");
var router = express.Router({mergeParams: true});
var Slot = require("../models/slot");
var User = require("../models/user");



//User Time Slots Home Page
router.get('/slots',isLoggedIn, function (req, res) {
    Slot.find({'owner.id': req.user._id}).exec()
        .then(function (personal) {
            var personal = personal;
            return Slot.find({'owner.id': {$ne: req.user._id}}).exec()
                .then(function (other) {
                    var other = other;
                    var matches = [];
                    for(let p of personal) {
                        for(let o of other) {
                            if(o.startTime < p.endTime && o.endTime > p.startTime ){
                                matches.push(o);
                            }
                        }

                    }
                    Promise.all(matches).then(function(matches){
                        console.log(matches);
                        res.render("slots", {personal: personal, other: other, matches: matches});
                    })

                });



        })


});

//CREATE - add new time slot to DB
router.post("/slots", isLoggedIn, function(req, res){
    var user = req.user;
    // var name = req.body.name;
    // var startTime = req.body.startTime;

    Slot.create(req.body.slot, function(err, slot){
        if(err) {
            console.log(err);
        } else {
            //add username and id to new slot
            slot.owner.id = req.user.id;
            slot.owner.username = req.user.username;
            slot.save();
            user.slots.push(slot);
            user.save();
            // console.log(newSlot);
            res.redirect("/slots");
        }
    });

});

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

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;
