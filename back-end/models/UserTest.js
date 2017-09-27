require("babel-register")({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: false
});
var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('./User.js');

describe('User Model', function () {

  it('User should be a Mongoose model', function () {
    expect(new User()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(User.schema).to.exist;
  });


});
