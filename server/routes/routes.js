// Import the Modules
var express = require('express');
// Using mongoskin instead of mongoos as i do not want a schema forced
var mongoskin = require('mongoskin');
var router = express.Router();
//var db = mongoskin.db('mongodb://@localhost:27017/calmapit', {safe:true});
//var db = mongoskin.db('mongodb://@ec2-52-64-219-249.ap-southeast-2.compute.amazonaws.com:27017/calmapit', {safe:true});

var db = mongoskin.db('mongodb://@52.64.219.249:27017/calmapit', {safe:true});
// Use the below code to use mongoose instead
// Import Mongoose
//var mongoose   = require('mongoose');
// connect to our database
// you can use your own MongoDB installation at: 
//mongoose.connect('mongodb://127.0.0.1/calmapit');
//connect to remote
//mongoose.connect('mongodb://username:password@kahana.mongohq.com:10073/node-api');
//router.get('/', index.html);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Defining the Routes for our API
router.param('collectionName', function(req, res, next, collectionName){
  req.collection = db.collection(collectionName);
  return next();
});

router.get('/?', function(req, res, next) {
  res.send('please select a collection, e.g., /collections/messages');
})

router.get('/collections/:collectionName', function(req, res, next) {
  req.collection.find({} ,{limit: 10, sort: {'_id': -1}}).toArray(function(e, results){
    if (e) return next(e)
    res.send(results);
  })
})

router.post('/collections/:collectionName', function(req, res, next) {
  req.collection.insert(req.body, {}, function(e, results){
    if (e) return next(e)
    res.send(results);
  })
})

router.get('/collections/:collectionName/:id', function(req, res, next) {
  req.collection.findById(req.params.id, function(e, result){
    if (e) return next(e)
    res.send(result);
  })
})

router.put('/collections/:collectionName/:id', function(req, res, next) {
  req.collection.updateById(req.params.id, {$set: req.body}, {safe: true, multi: false}, function(e, result){
    if (e) return next(e)
    res.send((result === 1) ? {msg:'success'} : {msg: 'error'});
  })
})

router.delete('/collections/:collectionName/:id', function(req, res, next) {
  req.collection.removeById(req.params.id, function(e, result){
    if (e) return next(e)
    res.send((result === 1)?{msg: 'success'} : {msg: 'error'});
  })
})


module.exports = router;
