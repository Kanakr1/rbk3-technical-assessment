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
      return users[i]
    }
  }
};
//this user is an object so i will only push it
// no user creation here
exports.addOne = function (user) {
  users.push(user)
};
// i dont know how many inputs the user wants to update 
// i will store the properties  in an array
// also im not sure in which order will the user input data
//i wll search each argument for @ symbol
// if @ is found the argument is the email
exports.updateOne = function (id, newProperties) {
array = arguments
var id = array[0];
var x = array[1];
var y = array[2];
var email;
var name;
if(x.indexOf('@') > -1 && x.indexOf('.com')> -1){
// x is not the email then y is
email = y
name = x
}else{
// x is the email then y is name
email = x
name = y  
}
// find the user and change the properties 
for (var i = 0; i < users.length; i++) {
  if (users[i].id===id) {
    user[i].name = name;
    user[i].email = email;
    return user[i] 
  }  
}

};

exports.deleteOne = function (id) {
  for (var i = 0; i < users.length; i++) {
  if (users[i].id===id) {
    users.splice(i,1)
  }  
  }
};
