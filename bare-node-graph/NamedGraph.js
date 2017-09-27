var Graph = require('./Graph.js');
var NamedGraph = function (adjacencyListPath, name,numberOfNodesTimeComplexity) {
	Graph.call(this,adjacencyListPath,name,numberOfNodesTimeComplexity)
  


}

NamedGraph.prototype = Object.create(Graph);
NamedGraph.prototype.constructor = NamedGraph;



module.exports = NamedGraph;


