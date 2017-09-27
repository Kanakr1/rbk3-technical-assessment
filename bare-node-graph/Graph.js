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
  this.numberOfNodesTimeComplexity = "O(n^2)";

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = "O(n)";

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = "O(n^2)";

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
	//the number of the nudes is the summation of the number of nudes in each line of the graph withpout 
    //the repeated items so we have to add the nude just once 
    var arr=[]
    var objAll={}
    fs.readFileSync(adjacencyListPath).toString().split("\n").forEach(function(line){
    	arr.push(line)
     });
    for(var i=0;i<arr.length;i++ ){
    	arr[i]=arr[i].split(' ');
    }
    for(var i = 0;i<arr.length;i++){
    	for(var j=0;j<arr[i].length;j++){
    		objAll[(arr[i])[j]] = objAll[(arr[i])[j]] + 1 || 0 
    	}
    }
	return Object.keys(objAll).length

};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
	// the edges that related to the nude are: the nudes in the same line that begins with this nude>
	// we can get nudes by converting this line int array  and returning the array without the first element.
    var arr=[]
    var objAll={}
    var result=[]
    fs.readFileSync(adjacencyListPath).toString().split("\n").forEach(function(line){
    	arr.push(line)
     });
    for(var i=0;i<arr.length;i++ ){
    	arr[i]=arr[i].split(' ');
    }
    for (var i=0; i<arr.length;i++ ){
    	if((arr[i])[0]===node){
    		result = arr[i].split('');

    	}
    }
    result.shift();
    return result;

};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
	// to count the number of edges we have to make an array of lines of the graph each line is array also 
	// after that we should cal      Not Completed
    var arr=[]
    var objAll={}
    var result=[]
    fs.readFileSync(adjacencyListPath).toString().split("\n").forEach(function(line){
    	arr.push(line)
     });
    for(var i=0;i<arr.length;i++ ){
    	arr[i]=arr[i].split(' ');
    }
      for (var i=0; i<arr.length;i++ ){
    	if((arr[i])[0]===node){
    		result = arr[i].split('');

    	}
    }
    for (var i=0;i<arr.length;i++)

};

module.exports = Graph;
