// Import the Mongoose module.
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Set the data types, properties and default values to our Schema.
var CaleventSchema   = new Schema({
    calevent_name:           { type: String, default: '' },
    calevent_location:        { type: String, default: '' },
    calevent_start_date:          { type: String, default: '' },
    calevent_end_date:    { type: String, default: '' },
    calevent_category:        { type: String, default: '' },
    calevent_description:       { type: String, default: '' },
    calevent_createdOn:      { type: Date,   default: Date.now}
});
module.exports = mongoose.model('Calevent', CaleventSchema);