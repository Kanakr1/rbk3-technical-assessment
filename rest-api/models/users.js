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
  console.log('get one : ', id)
  for (var user = 0 ; user < users.length ; user++) {
    if (users[user].id === id) {
      return users[user];
    }
  }
  return 'not found';
};

exports.addOne = function (user) {
  users.id = getNextId();
  users.push(user);
  return nextId - 1;
};

exports.updateOne = function (id, newProperties) {
  var user = exports.getOne(id);
  console.log('user inside update one: ' , user)
  for (var k in newProperties) {
    user[k] = newProperties[k];
  }
  return user;
};

exports.deleteOne = function (id) {
  for (var user = 0 ; user < users.length ; user++) {
    if (users[user].id === id) {
      return users.splice(user, 1); 
    }
  }
  return null;
};













