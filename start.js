// import mongoose module
var mongoose = require('mongoose');

// import configurations from environment variables
require('dotenv').config({path: 'variables.env'});

// connect to mongoose db database 
mongoose.connect(process.env.DATABASE);

// tell mongoose to use promise
mongoose.Promise = global.Promise;

// show connection error on Mongoose
mongoose.connection.on('error', function (){
	console.error('Error connecting to mongo DATABASE '+ err.message);
});

// import all our model modules
require('./models/Post');

/*================== Run Application ====================*/
	// set appliction path
	var app = require('./app');

	// set application port 
	var port = process.env.PORT || 3000;

	// start application server
	app.listen(port, function (){
		console.log('Node-Lesson');
		console.log("Localhost server has started....");
		console.log("Localhost is running on port: http://localhost:"+port);
		console.log("Press Ctrl+C to terminate server");
		console.log("----------(^±^)-----------------");
	});
/*================== End Application ====================*/