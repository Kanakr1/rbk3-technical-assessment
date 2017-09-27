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
  this.numberOfNodesTimeComplexity = "O(n)";

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = "O(n)";

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = "O(n)";

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	//the number of the nudes is the summation of the number of nudes in each line of the graph withpout 
    //the repeated items so we have to add the nude just once 
	var objAll={}
	var allnodes=fs.readFileSync(this.nodes);
	allnodes = allnodes.split(' ');
	for(var i=0;i<allnodes.length;i++){
		objAll[allnodes[i]]=objAll[allnodes[i]] +1 || 0;
	}
	return Object.keys(objAll).length

};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	// the edges that related to the nude are: the nudes in the same line that begins with this nude>
	// we can get nudes by converting this line int array  and returning the array without the first element.

var result=[];
var obj={};
var allnodes=fs.readFileSync(this.nodes);
	allnodes = allnodes.split(',')
	for(var i=0;i<allnodes.length;i++){
		objAll[allnodes[i]]=objAll[allnodes[i]] +1 || 0;
	}

};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
};

module.exports = Graph;
