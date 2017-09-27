var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	Graph.call(this);
	this.name=name;
};

NamedGraph.prototype=new Graph;
NamedGraph.prototype=NamedGraph;

module.exports = NamedGraph;

