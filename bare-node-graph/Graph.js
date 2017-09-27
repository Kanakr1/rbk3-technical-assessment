// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).
  var obj = {};
var Graph = function (adjacencyListPath) {
  // Structure the graph in JavaScript in a way that will be of service to you

 var array = fs.readFileSync('adjacency_lists/basic','utf8').toString().split('\n');

 array.forEach(function(ele){
   arr = ele.split(" ");
 	obj[arr[0]] = arr.splice(1);
 })
 

 
// Object.keys(obj)
  this.nodes = Object.keys(obj);
  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = 'O(1)';

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = 'O(1)';

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = 'O(n)';

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	return this.nodes.length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
		return obj[node]
};
// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	var counter = 1 ;
	var counter2 = 0 ; 
	for(var key in obj){
    arr = obj[key];
		counter2 += arr.length - counter;
		counter++;
	}
  return counter2;
};

module.exports = Graph;
