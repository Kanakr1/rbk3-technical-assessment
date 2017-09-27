var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	Graph.call(this);
	super(this);

	this.name = name;

};
NamedGraph.prototype = Object.create(Graph.prototype)
NamedGraph.prototype.constructor = NamedGraph;


module.exports = NamedGraph;

