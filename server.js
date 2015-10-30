// Import the Modules installed to our server
var express = require('express'),
  bodyParser = require('body-parser');

// Start the Express web framework
var app        = express();

// configure app
app.use(bodyParser());

// where the application will run
var port     = process.env.PORT || 8080;


// Import Mongoose
var mongoose   = require('mongoose');

// connect to our database
// you can use your own MongoDB installation at: 
mongoose.connect('mongodb://127.0.0.1/calmapit');
//mongoose.connect('mongodb://username:password@kahana.mongohq.com:10073/node-api');

// Start the Node Server
app.listen(port);
console.log('CalMagic happens on port ' + port);

var Calevent     = require('./server/models/calevent');

// Defining the Routes for our API

// Start the Router
var router = express.Router();

// A simple middleware to use for all Routes and Requests
router.use(function(req, res, next) {
// Give some message on the console
console.log('An action was performed by the server.');
// Is very important using the next() function, without this the Route stops here.
next();
});




// register the route
app.use('/api', router);
