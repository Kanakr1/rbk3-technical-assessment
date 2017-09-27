var express = require('express')
var app = express()
var router = express.Router();
var request = require('request');
var port = process.env.PORT || 1111


router.get('/', function(req, res, next) {
  request({
    uri: 'http://127.0.0.1:3000/users',
    qs: {
      api_key: '',
      query: ''
    }
  }).pipe(res);
});

module.exports = router;





app.get('/', function (req, res) {
  res.send('The main page:\n You can request:     "/users" to display the users       "/addUser" to add new user       "user:id " with the id to display single user  ');
});

app.get('/users', function (req, res) {
  res.send('All users');
});
app.get('/addUser', function (req, res) {
  res.send('Adding a user');
});
app.get('/user:id', function (req, res) {
  res.send('Display 1 user');
});



app.listen(port, function () {
  console.log('server is running on port '+ port)
});


