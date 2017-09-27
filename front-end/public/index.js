var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(3000);

angular.module("myApp", []);

function GetController($scope,$http) {

    $scope.click = function() {


        var response = $http.get('http://localhost:3000/api/users ');

        response.success(function(req,res) {

            console.log("success");

        });

        response.error(function(req,res) {
            console.log	('err');
        });

    };

}
