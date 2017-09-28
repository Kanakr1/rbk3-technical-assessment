// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');
// require("babel-register")


var sys=require("sys")

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

// var content1=fs.readFileSync("basic");
// var content2 =fs.readFileSync('doubleDigits')
// var content3 =fs.readFileSync('nonConsecutive')
// var content4 =fs.readFileSync('withNewline')

// sys.puts(JSON.parse(content));

var Graph = function (adjacencyListPath) {
  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = 'O(n)';
  // because its depend of the number of node

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = 'O(n)';
  // because he will search over this spicific node and take the next and previose ones 

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = '';

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	// in this question we well count the number of '\n'
	//that the fs.readfilesync will faced during the reading 
	// of those file
	// filePath = process.argv[2];
	// fileBuffer =  fs.readFileSync(filePath);
	// to_string = fileBuffer.toString();
	// split_lines = to_string.split("\n");
	// console.log(split_lines.length-1);

// also we can avoid the toString by using encoded option 
	 var Nodes = fs.readFileSync(process.argv[2], 'utf-8').split('\n').length-1
	 return Nodes;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	var newarr =[]
	 var buff = fs.readFileSync(__dirname + 'file-path').split(' ')
	 for (var i = 0; i < buff.length; i++) {
	 	if(buff[i]=== node){
	 		newarr.push(buff[i+1],buff[i-1])
	 	}
	 }
	 return newarr
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	// its in some how related to that array that we generate it
	// in previouse function 
	// and its related to the number of node 
	this.node-1
};

module.exports = Graph;







