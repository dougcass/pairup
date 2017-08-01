var mongoose = require("mongoose");
// var User = require("./user");

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


//works
slotSchema.statics.findByName = function(name, cb) {
    return this.find({ userName: new RegExp(name, 'i')  }, cb);
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




// var slotSchema = new Schema({
//     startTime: Date,
//     endTime: Date,
//     owner: {
//         id: {
//             type: Schema.Types.ObjectId,
//             ref: 'user'
//         },
//         username: String
//     }
// });

module.exports = mongoose.model('Slot', slotSchema);