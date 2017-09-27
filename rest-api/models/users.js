var _ = require('underscore');
var express = requir('express')

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
  return users[id-1]
};

exports.addOne = function (user) {
  users[nextId] = user ;
};

exports.updateOne = function (id, newProperties) {
   users[id-1][newProperties]
   return users[id-1]
};

exports.deleteOne = function (id) {
  users.splice(users[id-1])
};
