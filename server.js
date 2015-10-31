(function () {
    'use strict';
    var express = require('express');
    var app = express();

    var app_config = require('./server/config/config_app.js');
    var routes_config = require('./server/config/config_routes.js');
    // config files
    var db_config = require('./server/config/db');
    // connect to our database
    mongoose.connect(db_config.url);
    // Check if MongoDB is running
    mongoose.connection.on('error', function() {
      console.error('MongoDB Connection Error. Make sureMongoDB is running.');
    });
    app.use('/', app_config);
    app.use('/', routes_config);
    app.use('/', db_config);
    // START THE SERVER
    console.log('STARTING THE API SERVER');
    console.log('-------------------------');
    app.listen(8080);
    console.log('Started the API server');
    process.on('uncaughtException', function (error) {
        console.log(error.stack);
        console.log(error);
    });

})();