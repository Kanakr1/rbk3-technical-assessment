var express = require('express');
var fs=require('fs');
var bodyParser = require('body-parser')
var app=express();

app.use(express.static(__dirname+"/"));
app.use(express.static(__dirname+"/html"));


app.use(bodyParser.urlencoded());

app.get('/',function (req,res) {
  fs.readFile('public/index.html',function (err,data) {
    res.writeHead(200,{'Concat-Type':'text/html'});
    res.write(data);
    res.end();
  })
})

app.get('/api/users',function (req,res) {

    res.send(JSON.stringify(req.body));
    res.end();

})


app.listen(3000);
