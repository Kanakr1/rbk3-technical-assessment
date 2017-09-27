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
  for (var i = 0; i < user.length; i++) {
    if(users[i].id===id){
      return users[i];
    }
    return ('user undfined');
  }
};
exports.addOne = function (user) {
  users.push({name:user,id:getNextId()})
};

exports.updateOne = function (id, newProperties) {
  for (var i = 0; i < user.length; i++) {
    if(users[i].id===id){
      return users[i].email = newProperties;
    }
    return ('user undfined');
  }
};

exports.deleteOne = function (id) {
  for (var i = 0; i < user.length; i++) {
    if(users[i].id===id){
      users.splice(users.indexOf(users[i]),1);
    }
    return ('user undfined');
  }
};
