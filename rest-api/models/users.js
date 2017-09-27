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
  return users[id-1];
};

exports.addOne = function (user) {
  users.push(user);
  users[users.length-1].id = getNextId();
  return users[users.length-1];
};

exports.updateOne = function (id, newProperties) {
  for(var key in newProperties) {
    users[id][key] = newProperties[key];
  }
};

exports.deleteOne = function (id) {
  users.splice(id-1,1);
  for(var i=id-1; i<users.length; i++) {
    users[i].id = users[i].id -1;
  }
};
