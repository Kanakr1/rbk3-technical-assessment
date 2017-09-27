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
  this.path = adjacencyListPath;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = "I think it a O(n) because I looped through the page and splitted it";

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = "O(n^2) regards the edges array I only looped inside the file and the array that consisted of the file";

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = "I think it's gonna be a O(n^3)";

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	var x = fs.readFileSync(this.path, 'utf8').split('\n')
    
    return x.length
};
// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	var x = fs.readFileSync(this.path, 'utf8').split('\n')
	var edges = []
	for (var i = 0; i < x.length; i++){
		if (x[i][0] === node){
			for (var j=1; j < x[i].length; j++){
				edges.push(x[i][j])
			}
		}
	}
	edges = edges.join('').split(' ').join('').split('')

	return edges
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	var x = fs.readFileSync(this.path, 'utf8').split('\n')
	console.log(x)
	for (var i = 0; i < x.length; i++){
		var st = x[i][0]
		for (var j = 1; j < x[i].length; j++){
			if (st === x[i][j]){
				x[i].splice(j,1)
			}
			
		}
	}
	console.log(x)
var counter = 0
	for (var k = 0; k < x.length; k++){
		if (x[i].length > 1){
			counter++
		}
	}
	return counter
};

module.exports = Graph;
