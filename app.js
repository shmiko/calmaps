var express = require('express'),
  bodyParser = require('body-parser')
  logger = require('morgan')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))


// Defining the Routes for our API
var routes = require('./server/routes/routes');

app.use('/', routes);

// app.param('collectionName', function(req, res, next, collectionName){
//   req.collection = db.collection(collectionName)
//   return next()
// })

// app.get('/', function(req, res, next) {
//   res.send('please select a collection, e.g., /collections/messages')
// })

// app.get('/collections/:collectionName', function(req, res, next) {
//   req.collection.find({} ,{limit: 10, sort: {'_id': -1}}).toArray(function(e, results){
//     if (e) return next(e)
//     res.send(results)
//   })
// })

// app.post('/collections/:collectionName', function(req, res, next) {
//   req.collection.insert(req.body, {}, function(e, results){
//     if (e) return next(e)
//     res.send(results)
//   })
// })

// app.get('/collections/:collectionName/:id', function(req, res, next) {
//   req.collection.findById(req.params.id, function(e, result){
//     if (e) return next(e)
//     res.send(result)
//   })
// })

// app.put('/collections/:collectionName/:id', function(req, res, next) {
//   req.collection.updateById(req.params.id, {$set: req.body}, {safe: true, multi: false}, function(e, result){
//     if (e) return next(e)
//     res.send((result === 1) ? {msg:'success'} : {msg: 'error'})
//   })
// })

// app.delete('/collections/:collectionName/:id', function(req, res, next) {
//   req.collection.removeById(req.params.id, function(e, result){
//     if (e) return next(e)
//     res.send((result === 1)?{msg: 'success'} : {msg: 'error'})
//   })
// })

app.listen(8080, function(){
  console.log('Express server listening on port 8080')
})
