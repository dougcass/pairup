var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String


//      slots: {
// 	 	type: mongoose.Schema.Types.ObjectId,
// 	 	ref: 'slot'
// 	}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
// module.exports = User; ???