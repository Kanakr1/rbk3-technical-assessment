var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(3000);



   
server=http.createServer(function(req,res){
      var response = $http.get('http://localhost:3000/api/users ');
      
        response.success(function(req,res) {
            .find({}).then(function(err,data){

            })

        });

        response.error(function(req,res) {
            console.log ('err');
        });

    };

      

server=http.createServer(function(req,res){
var response = $http.post('http://localhost:3000/api/users ');

        response.success(function(req,res) {
              .create().then(function(err,data){
                console.log("done")

            })

        });

        response.error(function(req,res) {
            console.log ('err');
        });

    
}


server=http.createServer(function(req,res){
var response = $http.get('http://localhost:3000/api/users ');

        response.success(function(req,res) {
            .find({user:user},{id:id}).then(function(err,data){
                console.log("mmmm")
            })
        });

        response.error(function(req,res) {
            console.log ('err');
        });


}
