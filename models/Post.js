// import mogoose
var mongoose = require('mongoose');
// import promise
mongoose.Promise = global.Promise;
// import slugs
var slugs = require('slugs');


// create a posts Schema
var PostSchema = new mongoose.Schema({
	by: {
		type: String,
		trim: true,
		required: "this users is not found"
	},
	slugs: String,
	post: {
		type: String,
		trim: true,
		required: "can not post empty card"
	}
});

module.exports = mongoose.model('Posts', PostSchema);