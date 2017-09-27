var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	call(this , adjacencyListPath)
	this.name = name;
};

NamedGraph.prototype = Object.create(Graph);
NamedGraph.prototype.constructor = NamedGraph;


module.exports = NamedGraph;

