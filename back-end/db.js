var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobquery');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  conlsole.log(" we're connected!");
});
 module.exports db;