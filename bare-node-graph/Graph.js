// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath,numberOfNodesTimeComplexity,getEdgesTimeComplexity,numberOfEdgesTimeComplexity) {
  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = "";

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = "";

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = "";
  this.adjacencyListPath =adjacencyListPath
};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	var count = 0;
	// this.nodes is an array of objects 
	// each object has a value of the node as key and the value is array of the edges
	// should return the length of the array 

	return count 
	this.numberOfNodesTimeComplexity = "O(n)"
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	var arr = [];
	// for (var key in this.nodes){
	// 	if (this.nodes[key] === node ){
	// 		arr.push(this.node[key-1])
	// 		arr.push(this.nodes[key+1])
	// 	}
	// }
    //**********************************
    // shoud search of the node as a key in object while find 
    // return the array of edges that have as a value 

	this.getEdgesTimeComplexity="O(n)"
	return arr ; 
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	var count = 0;
	// should go throw all nodes check if the node has edge 
    // count++ 
    // return count 
     return count ;
this.numberOfEdgesTimeComplexity= "O(n)"
};

module.exports = Graph;


// [{num ,[edges]}]
// [ {0,[1,2,3]},{3,[0,1]},{2,[0]}]
// 3<------> 0 <------>2
// |         |
// |         |
// 1<---------
