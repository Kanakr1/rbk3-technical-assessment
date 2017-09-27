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
  for (var i = 0; i < users.length; i++){
    if (users[i].id === id){
      return users[i]
    }
  }
};

exports.addOne = function (user) {
  var nu = {}
  nu.id = nextId++;
  nu.name = user.name
  nu.email = user.email
  users.push(nu)
  console.log(users)
};

exports.updateOne = function (id, newProperties) {
  console.log(newProperties)
  console.log('==----+++++++++')
  var changed = Object.keys(newProperties)
  console.log(changed)
   for (var i = 0; i < users.length; i++){
    if (users[i].id === id){
        for (var j=0; j < changed.length; j++){
          users[i][changed[j]] = newProperties[changed[j]]
          console.log(users)
        }
    }
    console.log(users)
    console.log(users[i])
    return users[i]
  }
};

exports.deleteOne = function (id) {
  console.log(id)
  for (var i = 0; i < users.length; i++){
    if (users[i].id === id){
      var x = users[i]
       users.splice(i,1)
       console.log(x)
    }
  }
  return x
};
