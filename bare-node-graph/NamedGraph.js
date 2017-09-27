var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
  Graph.call(this);
  this.name = 'basic';
};

NamedGraph.prototype = Object.create(Graph.prototype);
NamedGraph.prototype.constuctor = NamedGraph;

module.exports = NamedGraph;
