'use strict';
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// module.exports = function(app) {
//     app.use(compression());
//     app.use(morgan('dev'));
//     app.use(bodyParser());
//     app.use(multer());
//     app.use(cookieParser('Twyst_2014_Sessions'));

//     app.use(methodOverride());

//     app.use(express.static(__dirname + '/index.html'));

//     // app.use(favicon(__dirname + '/../../Twyst-Web-Apps/common/images/favicon/twyst.ico'));
//     app.all("/api/*", function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept");
//         res.header("Access-Control-Allow-Methods", "GET, PUT, POST, HEAD, DELETE, OPTIONS");
//         return next();
//     });

//     app.use(errorhandler({
//         dumpExceptions: true,
//         showStack: true
//     }));

// };