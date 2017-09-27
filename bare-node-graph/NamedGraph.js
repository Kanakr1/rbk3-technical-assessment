var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	 Graph.call(this, name);
	 this.name =name;
};



module.exports = NamedGraph;

