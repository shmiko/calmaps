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

var Calevent     = require('./server/models/calevent');

// Defining the Routes for our API
var routes = require('./server/routes/calevents');

app.use('/', routes);
// Start the Node Server
app.listen(port);
console.log('CalMagic happens on port ' + port);
