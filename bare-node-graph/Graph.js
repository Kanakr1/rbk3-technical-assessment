// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
  // Structure the graph in JavaScript in a way that will be of service to you


  // store data in var f
  var f = fs.readFileSync(adjacencyListPath, 'utf8');

  // store f of type: Object as a string str
  var str = '';
  for(var k in f) {
    if(f[k]!==' '){
      str+= f[k];
    }
  }
  
  // split str on '\n' to get nodes
  var arr = str.split('\n');

  // get rid of empty nodes
  for(var i=0; i<arr.length; i++) {
    if(arr[i]==='') {
      arr.splice(i,1);
    }
  }

  this.nodes = arr;
  
  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = 'O[1]';

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = 'O[n^2]';

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = 'O[n]';
};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
  return this.nodes.length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
  var arr = [];
  for(var i=0; i<this.nodes.length; i++) {
    if(this.nodes[i][0]===node) {
      for(var j=1; j<this.nodes[i].length; j++) {
        arr.push(this.nodes[i][j]);
      }
    }
  }
  return arr;
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {

  // each graph has at least two edges
  var edges = 2;
  for(var i=0; i<this.nodes.length; i++) {
    if(this.nodes[i].length<=2) {
      edges++;
    }
  }
  return edges;
};

module.exports = Graph;
