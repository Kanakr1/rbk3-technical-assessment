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
  for (var i = 0; i < users.length; i++) {
    if(users[i].id === id){
      return users[i];
    }
  }
};

exports.addOne = function (user) {
  getNextId()
  users.push(user);
  return user;
};

exports.updateOne = function (id, newProperties) {
  for (var i = 0; i < users.length; i++) {
    if(users[i].id === id){
      var obj = user[i].id;
    }
  //   for(key in newProperties){
  //     for(k in obj){
  //         if(key === k){
  //           obj
  //         }
  // compare keys and update the value of this keys by taken the value 
  //of this keys from newProperties
    for(key in newProperties){
     if(key === "name"){
          obj.name === newProperties.name;
     }
   }
   for(key in newProperties){
     if(key === "email"){
      obj.email === newProperties.email;
      }
    }}
     return obj;
};

exports.deleteOne = function (id) {
  for (var i = 0; i < users.length; i++) {
    if(users[i].id === id){
      users.splice(i,1)
      return users[i];
    }
  }
};
