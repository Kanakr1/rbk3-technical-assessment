var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	this.name=name;
};

NamedGraph.prototype=new Graph

module.exports = NamedGraph;

