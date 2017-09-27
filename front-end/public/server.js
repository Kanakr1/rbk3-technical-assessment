var express= require('express');
var request= require('request');

var app=express();

app.get('/api/users',function(req,res){
//it should return all users inside the <div id='li'>
	res.send()

})

app.post('/api/users',function(req,res){
//
	res.send();

})

app.get('/api/users/:'id,function(req,res){
//
	res.send();

})





var port=3000;
app.listen(port,function(){
	console.log('server listening on port:'+ port)
})

module.exports = app;