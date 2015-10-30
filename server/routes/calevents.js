
// Default message when access the API folder through the browser
router.get('/', function(req, res) {
// Give some Hello there message
res.json({ message: 'Hello SPA, the API is working!' });
});

// When accessing the events Routes
router.route('/calevents')

// create a event when the method passed is POST
.post(function(req, res) {

	// create a new instance of the Calevent model
	var calevent = new Calevent();

	// set the calevent properties (comes from the request)
	  calevent.calevent_name = req.body.calevent_name;
	  calevent.calevent_location = req.body.calevent_location;
	  calevent.calevent_start_date = req.body.calevent_start_date;
	  calevent.calevent_end_date = req.body.calevent_end_date;
	  calevent.calevent_category = req.body.calevent_category;
	  calevent.calevent_description = req.body.calevent_description;

	// save the data received
	  calevent.save(function(err) {
	    if (err)
	      res.send(err);

	// give some success message
	  res.json({ message: 'calevent successfully created!' });
	  });
})

// get all the calevents when a method passed is GET
.get(function(req, res) {
  Calevent.find(function(err, calevents) {
    if (err)
      res.send(err);

    res.json(calevents);
  });
});

// on accessing calevent Route by id
router.route('/calevents/:calevent_id')

// get the calevent by id
.get(function(req, res) {
  Calevent.findById(req.params.event_id, function(err, 
    calevent) {
    if (err)
      res.send(err);
      res.json(calevent);
    });
})

// update the calevent by id
.put(function(req, res) {
  Calevent.findById(req.params.event_id, function(err, calevent) {

    if (err)
      res.send(err);

// set the calevent properties (comes from the request)
  calevent.calevent_name = req.body.calevent_name;
  calevent.calevent_location = req.body.calevent_location;
  calevent.calevent_start_date = req.body.calevent_start_date;
  calevent.calevent_end_date = req.body.calevent_end_date;
  calevent.calevent_category = req.body.calevent_category;
  calevent.calevent_description = req.body.calevent_description;

// save the data received
  calevent.save(function(err) {
    if (err)
      res.send(err);
      // give some success message
      res.json({ message: 'calevent successfully updated!'});
  });

  });
})

// delete the calevent by id
.delete(function(req, res) {
  Calevent.remove({
    _id: req.params.calevent_id
  }, function(err, calevent) {
    if (err)
      res.send(err);

// give some success message
  res.json({ message: 'calevent successfully deleted!' });
  });
});