require("babel-register")({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: false
});
var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('./Job.js');

describe('Job Model', function () {

  it('should be a Mongoose model', function () {
    expect(new Job()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Job.schema).to.exist;
  });


});
