var mongoose = require("mongoose");
var User = require("./user");

var slotSchema = new mongoose.Schema({
    owner: {
       id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    startTime: Date,
    endTime: Date,
    description: String


});


//Static Methods
// slotSchema.statics.all = function (cb) {
//     return this.model('Slot').find({}, cb);
// };

// slotSchema.statics.all = function (cb) {
//     return this.find({}, cb);
// };









module.exports = mongoose.model('Slot', slotSchema);