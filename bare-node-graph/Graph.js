// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = undefined;

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = undefined;

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = undefined;

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {

var array = fs.readFileSync('adjacencyListPath/basic','adjacencyListPath/doubleDigits').toString().split("\n");
    console.log(array.length);
};
var edgesnum=0;
// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
var liner = new fs(adjacencyListPath);
var vertexes_number = parseInt(liner.next().toString('ascii'));
var edges_number = parseInt(liner.next().toString('ascii'));
var edges = [];
var next;
while (next = liner.next()) {
    edges.push(next.toString('ascii').split(' '));
}
edgesnum=edges.length;
return edges;
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	return edgesnum;
};

module.exports = Graph;
