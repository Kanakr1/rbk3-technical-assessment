var Graph = require('./Graph.js');

class NamedGraph extends Graph {
	constructor(){
	this.name = name
		super()
	}

};

NamedGraph.prototype = Object.create(Graph)
NamedGraph.prototype.constructor = NamedGraph;
NamedGraph.prototype.numberOfNodes = function () {
return this.string.splite(" ").length;
};


NamedGraph.prototype.getEdges = function (node) {
	lines = this.string.splite(" ");
	for (var i = 0; i < lines.length; i++) {
		if(lines[i][0]===node){
			wantedLine = lines[i];
		}
	}
	wantedArray = wantedLine.split("")
	return wantedArray.splice(1);
};
NamedGraph.prototype.numberOfEdges = function () {
	var counter = 0;
	var nodes = getNodes()
	for (var i = 0; i < nodes.length; i++) {
		counter += this.getNumberEdges(nodes[i]);
	}
	numberOfNodes = this.numberOfNodes()
	return counter - numberOfNodes;
};


module.exports = NamedGraph;

