// Import the Modules
var express = require('express'),
  bodyParser = require('body-parser')
  logger = require('morgan')
var path = require('path');

// configure app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

// where the application will run
var port     = process.env.PORT || 8080;

app.use(express.static(__dirname + '/app'));
// Defining the Routes file
var routes = require('./server/routes/routes');
// Use the routes file to get the routes
app.use('/', routes);

// Start the Node Server
app.listen(port, function(){
  console.log('Express server listening on port ',port);
})
