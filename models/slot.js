var mongoose = require("mongoose");

var slotSchema = new mongoose.Schema({
    name: String,
    startTime: Date,
    endTime: Date,
    description: String
});




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

module.exports = mongoose.model('slot', slotSchema);