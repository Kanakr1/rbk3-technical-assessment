// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
	// fs read file returns a string i will store it in a variable
	this.string = fs.readFileSync(adjacencyListPath);
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
// the number of nodes might be the biggest number stored + 1
// but the numbers could be not consecuutive 
// therefore the number of lines is the number of nodes
// splite the sting (" ") or (/n) 'as the hint says' and store in an array
//the length of the array is the number of lines therefore the number of nodes 
return this.string.splite(" ").length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	// again i will splite the sting by lines 
	lines = this.string.splite(" ");
	// loop to find the string that starts with the node number 
	for (var i = 0; i < lines.length; i++) {
		if(lines[i][0]===node){
			wantedLine = lines[i];
		}
	}
	// wanted line is a string we need to split 
	wantedArray = wantedLine.split("")
	// return the array without first element
	return wantedArray.splice(1);
};
// added this function to get nodes
Graph.prototype.getNodes = function (node) {
	// again i will splite the sting by lines 
	lines = this.string.splite(" ");
	var array = [];
	// loop and push the node number 
	for (var i = 0; i < lines.length; i++) {
		array.push(lines[i][0]);
	}
	return array;
};
// added this function to get number of edges for each node
Graph.prototype.getNumberEdges = function (node) {
	// again i will splite the sting by lines 
	lines = this.string.splite(" ");
	// loop to find the string that starts with the node number 
	for (var i = 0; i < lines.length; i++) {
		if(lines[i][0]===node){
			wantedLine = lines[i];
		}
	}
	// wanted line is a string we need to split 
	wantedArray = wantedLine.split("");
	// return the array without first element
	return wantedArray.splice(1).length;
};
// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	// i can use the previous function and send one node at a time to find 
	// the total number of edges 
	// but this will cause some edges to be added twice
	// the solution to this is very simple
	// subtract the number of nodes from the total number of edges 
	// if my explenation is not clear enough i added an example below explaining everyhting
	// ***********************************
	//1) total number of edges
	var counter = 0;
	var nodes = getNodes()
	for (var i = 0; i < nodes.length; i++) {
		counter += getNumberEdges(nodes[i]);
	}
	// now counter represents the total number with dublication 
	//2) get number of nodes
	numberOfNodes = numberOfNodes()
	// subtract 
	return counter - numberOfNodes;
};

module.exports = Graph;

// numberOfEdges solution explained 
// in this basic example 
// 0 2 4 5
// 1 2 3
// 2 0 1 5
// 3 1
// 4 0 5
// 5 0 2 4

// the actual number of edges without dublicating is 8
// the number of edges for each node calculated by the functions will be 
// 0: 3
// 1: 2 
// 2: 3
// 3: 1
// 4: 2
// 5: 3
// in total : 14
// number of nodes = 6
// total - number of nodes = 8 <==== the answer we want





