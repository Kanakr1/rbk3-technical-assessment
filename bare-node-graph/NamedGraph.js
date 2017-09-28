var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	Graph.call(this,adjacencyListPath)
	this.name 
};

NamedGraph.prototype = Object.create(Graph.prototype);

module.exports = NamedGraph;

