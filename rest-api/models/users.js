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
  for(var i=0;i<users.length; i++){
    if(users[i].id === id){
      return users[i];
    }
    return ('no matched');
  }
};

exports.addOne = function (user) {
  users.push({id: (users[users.length-1].id)+1, name: user.name, email: user.email? user.email : null});
  return users[users.length-1];
};
// *New users should be assigned __a numeric auto-incremented__ `id` when created
exports.updateOne = function (id, newProperties) {
  for(var i=0;i<users.length; i++){
    if(users[i].id === id){
      users[i].newProperties; ///
      return users[i];
    }
    return ('no matched');
  }
};

exports.deleteOne = function (id) {
  for(var i=0;i<users.length; i++){
    if(users[i].id === id){
      var x = users;
      x=users.slice(0,users[i]);
      x.push(users.slice(users[i+1]))
      users=x;
      return users;
    }
    return ('no matched');
  }
};
