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
//works
// slotSchema.statics.all = function (cb) {
//     return this.model('Slot').find({}, cb);
// };

slotSchema.statics.all = function (cb) {
    return this.find({}, cb);
};


// search by username
slotSchema.statics.search = function search (name, cb) {
    return this.where('owner.username', new RegExp(name, 'i')).exec(cb);
};
//execute method
// Slot.search('foo', function (err, slot) {
//     if (err) {
//         console.log(error);
//     } else {
//         console.log(slot);
//     }
// })


slotSchema.statics.personal = function personal (currentUser, cb) {
    return this.where('owner.id', currentUser).exec(cb);
};









// new RegExp(name, 'i'
// slotSchema.statics.findName = function (name, cb) {
//     return this.model('Slot').findOne({'name': 'name'}, cb);
// };


// slotSchema.methods.findByName = function(name, cb) {
//     return this.model('Slot').find({ name: name }, cb);
// };

// slotSchema.statics.findByName = function (name, cb) {
//     return this.model('Slot').findOne({name : "name"}, cb);
// };






module.exports = mongoose.model('Slot', slotSchema);