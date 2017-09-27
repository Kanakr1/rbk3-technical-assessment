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
  //we search about the user by his id
  for(i=0; i<users.length; i++){
    if(users[i].id === id)
      return users[i]
  }
};

exports.addOne = function (user) {
  users.push(user)
};

exports.updateOne = function (id, newProperties) {
// we checke if the user id in the array and then we update the propertie on it
   for(i=0; i<users.length; i++){
    if(users[i].id === id)
      users[i]['newProp']=newProperties
  }

};

exports.deleteOne = function (id) {
  //we checke the user by id and delet it
  for(i=0; i<users.length; i++){
    if(users[i].id === id)
      users[i].slice(i,1)
  } 
};
