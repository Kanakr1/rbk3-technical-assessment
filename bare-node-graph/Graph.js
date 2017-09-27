// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (node, connectedNode) {
  // Structure the graph in JavaScript in a way that will be of service to you
  // this.nodes;

  // // String with your claim of the time complexity for `numberOfNodes`
  // this.numberOfNodesTimeComplexity = undefined;   

  // // String with your claim of the time complexity for `getEdges`
  // this.getEdgesTimeComplexity = undefined;   

  // // String with your claim of the time complexity for `numberOfEdges`
  // this.numberOfEdgesTimeComplexity = undefined;
	this.arr = [];
	this.node = node;
	this.connectedNode = connectedNode;
};

Graph.prototype.makeGraph= function (){
	this.arr.push(this.connectedNode)
	this.Graph[this.node] = this.arr;
}

// Returns the number of nodes in the graph. //6
Graph.prototype.numberOfNodes = function () {
	var this.arr= Object.keys()
	return this.arr.length;
};

// Returns an array of the edges for the passed in `node` 
Graph.prototype.getEdges = function (node) {
	var arrString = this.Graph[this.node].map(String)
	return arrString;
};

// Returns the number of edges for the graph.   //7
Graph.prototype.numberOfEdges = function () {
 	var count = 0;
 	for (var key in this.Graph){
 		count = count + this.Graph[key].length
 }
 return counter/2;
};

module.exports = Graph;





