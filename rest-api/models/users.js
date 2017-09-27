var _ = require('underscore');

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
// this helper function should get the user given its id
// my function loops through the array of users
// when i find the user with the given id
// i return the user (object)
exports.getOne = function (id) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id===id) {
      return user[i]
    }
  }
};
//this user is an object so i will only push it
// no user creation here
exports.addOne = function (user) {
  users.push(user)
};

exports.updateOne = function (id, newProperties) {

};

exports.deleteOne = function (id) {
  for (var i = 0; i < users.length; i++) {
  if (users[i].id===id) {
    
  }  
  }
};
