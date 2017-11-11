// import modules
var express = require('express'); // express application
var bodyParser = require('body-parser'); // express body parser helper
var handlebars = require('express-handlebars'); // express view templating engine
var route = require('./routes/index'); // all routes file path here
var mongoose = require('mongoose'); // import database
var flash = require('connect-flash'); // flash module
var session = require('express-session');

// set express app
var app = express();

// handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main', helpers: {section: function(name, options){
	if(!this._sections) this._sections = {};
		this._sections[name] = options.fn(this);
		return null;
	}
}}));

// set the view engine
app.set('view engine', 'handlebars');

// use session
app.use(session({
  secret: 'lizards',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// use the connect flash
app.use(flash());

// set a public static path
app.use('/public', express.static('public'));


// applications set flashes
app.use(function (req, res, next){
	res.locals.flashes = req.flash();
	next();
});

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use pages controller bind with routes.
app.use('/', route);


// export application
module.exports = app;
