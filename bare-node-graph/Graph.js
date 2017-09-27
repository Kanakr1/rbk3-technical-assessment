// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
   // read the file 
	fs.readFileSync( adjacencyListPath)
	// push what inside it to nodes as array of arrays 

  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes=[];

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = 'O(1)';;

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = 'O(n)';;

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = 'O(n);'

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	return this.nodes.length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	for(var i=0;i<this.nodes.length;i++){
		if(this.nodes[i][0]=== node){
			return [nodes[i][1],nodes[i][2]];
		}
	}
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	return this.nodes.length-1;
};


module.exports = Graph;
