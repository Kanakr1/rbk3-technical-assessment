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
  if(id<nextId){
    return users[id-1];
  }
  else {
    result="not found"
    return result;
  }
};

exports.addOne = function (user) {
  id=getNextId();
  user.id=id;
  users.push(user);

};

exports.updateOne = function (id, newProperties) {
  user=users[id-1];
  user.name=newProperties.name;
  user.email=newPropertie.email
};

exports.deleteOne = function (id) {
  users.splice(id-1,1);
};
