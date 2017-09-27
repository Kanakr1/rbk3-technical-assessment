// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {

	// fs.readFile('/adjacency_list/basic');
		// , (err, data) => {
		//   if (err) {
		//   	throw err;
		//   }
		//   else{
		//   	res.write(data);
		//   	res.end();
		//   }

  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = "O(1), constant";

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = "O(log(n))" 
  // "O(log(n))" : because we go to a specific node and search over it to find the edges;

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = "O(n)";

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	// after reading the file basic
	//and get the graph list from the file using Graph function
	return this.nodes.length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
//we have to find the edges that have intersection with the given node
//so we take last & the first elements in the raw of this node 
// take the first and the last elements are vertical on this node 
//push them on array and return them

	// var n=this.nodes;

	// for(var i=0; i<n.length; i++){
	// 	if()
	// }
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	//make a counter
	var counter=0;
	//we have to search over all the node lines to take the last element and first element 
	//when we find an element we increment the counter
	//return the counter
	return counter;
};

module.exports = Graph;
