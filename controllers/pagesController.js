// require mongoose 
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');

// export the home page controller
exports.homePage = function (req, res){
	res.render('welcome');
};

// now testing the store functionality
exports.createPost = function (req, res){
	res.render('create-post');
};

// now testing the store functionality
exports.savePost = async function (req, res, next){
	
	// do save and return back.
	var posts = new Post(req.body);

	// save posts
	await posts.save();

	// redirect home
	res.redirect('/');
};