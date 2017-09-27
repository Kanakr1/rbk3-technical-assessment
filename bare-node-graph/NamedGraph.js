var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	this.nodes;
	this.name=name
	this.numberOfNodesTimeComplexity = "O(n^2)";
	this.getEdgesTimeComplexity = "O(n)";
	this.numberOfEdgesTimeComplexity="O(n^2)"



};
NamedGraph.name=this.name;



NamedGraph.prototype=Object.create(Graph.prototype);
NamedGraph.prototype.constructor = NamedGraph;



module.exports = NamedGraph;

