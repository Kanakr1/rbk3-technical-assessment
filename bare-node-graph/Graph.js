// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');
//var http = require("http");
var express=require ('express');
var app=express();
app.listen(3000, function () {
  console.log('saddam  port 3000!')
});
// Just for testing 
// var content =fs.readFileSync('basic').toString();
// arr=content.split('\n');
// result=[];
// item=[];
// for(var i=0;i<arr.length;i++){
// 	item=arr[i].split(' ');
// 	result.push(item);

// }
  

// //arr.split('');
//  console.log(result)

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
	var content =fs.readFileSync('basic').toString();
    arr=content.split('\n');
    this.graph=[];
    item=[];
    for(var i=0;i<arr.length;i++){
	item=arr[i].split(' ');
	this.graph.push(item);

}

  this.nodes;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = 'O(1)';

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = 'O(1)';

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = 'O(n)^2';

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
  return this.graph.length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	var edges =this.graph[node];
	return edges.length-1;
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	var result=0;
	for(var i=0;i<this.graph.length;i++){
		result+=this.getEdges(i);
	}

};

module.exports = Graph;
