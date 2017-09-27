var express = require('express');
var fs=require('fs');
var bodyParser = require('body-parser');
var JsonDB=require('node-json-db');
var app=express();


app.use(express.static(__dirname+"/"));
app.use(express.static(__dirname+"/html"));


app.use(bodyParser.urlencoded());


var db = JsonDB("users",true);

app.get('/',function (req,res) {
  fs.readFile('public/index.html',function (err,data) {
    res.writeHead(200,{'Concat-Type':'text/html'});
    res.write(data);
    res.end();
  })
})

app.get('/api/users',function (req,res) {
  var data=db.getdata('db.json');
    res.send(JSON.stringify(data));
    res.end();

})
