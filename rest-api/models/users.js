var _ = require('underscore');

// The seeded state of our in-memory "database"
var users = [
  {
    id: 1,
    name: 'Taka',
    email: 'taka@taka.com'
  },
  {
    id: 2,
    name: 'Nayo',
    email: 'nayo@nayo.com'
  },
  {
    id: 3,
    name: 'Amrit',
    email: 'amrit@amrit.com'
  }
];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function () {
  return users;
};

exports.setAll = function (newUsers) {
    users = newUsers;
    nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function (id) {
  return JSON.stringify(users[id-1]);
};

exports.addOne = function (user) {
  var newUser = users.push({
    id: nextId,
    name: user
  })
  return newUser;
};

exports.updateOne = function (id, newProperties) {
    user[id-1]['email']= newProperties;
  return user[id-1];
  // I think this most be more specific, the arguments should contain the name of the property and its value.
};

exports.deleteOne = function (id) {
    users.splice( id-1 , 1 );
  return users;
};






