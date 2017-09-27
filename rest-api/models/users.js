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
  var targetUser = 'invalid id';
  _.each (users, (ele, i) => {
    if (ele.id == id){ // check if the current user id is equal to the gevin id
      targetUser = ele;
      return;
    }
  });
  return targetUser;
};

exports.addOne = function (user) {
  newUser = {
    id: getNextId (),
    name: user.name,
    email: user.email
  };
  users.push(newUser);

  return newUser;
};

exports.updateOne = function (id, newProperties) {
  var status = 'invalid id'
  _.each (users, (ele, i)=>{
    if (ele.id == id)
    {
      users[i] = newProperties;
      status = 'User updated'
    }
  });
};

exports.deleteOne = function (id) {
  var deletedUser = 'invalid id';
  _.each (users, (ele, i)=>{
    if(ele.id === id)
      deletedUser = users.splice(i, 1);
  });
  return deletedUser;
};
