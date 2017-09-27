// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes = adjacencyListPath;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = 'constant';

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = 'Quadratic';

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = 'Linear';

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
  var newData = 0;
  fs.readFileSync (this.nodes, 'utf8', (err, data) => {
    newData = data.split('\n').length;
  });
  return newData;
}

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
  var result = [];
  fs.readFileSync (this.nodes, 'utf8', (err, data) => {
    result = data.split('\n');
  });
  for ( var key in result ){
    var current = result[key].split('');
    for ( var i = 0; i < current.length; i++ ){
      if (current[0] == node){
        return current.join('');
      }
    }
  }
  return [];
};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
  var result = [], current = 0;
  fs.readFileSync (this.nodes, 'utf8', (err, data) => {
    result = data.split('\n');
  });
  for ( var key in result ){
     current += result[key].split('').length - 1; // take number of the numbers inside each element and ignore the node itself.
    }
    return current;
  }


module.exports = Graph;
