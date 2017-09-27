var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	Graph.call(this, adjacencyListPath)
	  this.name = name ;	
	//then what ? :P
};

NamedGraph.prototype = Object.create(Graph.prototype);
NamedGraph.prototype.constructor = NamedGraph ;



module.exports = NamedGraph;

