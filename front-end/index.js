var express = require ('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');


app.use(express.static(__dirname + './public/index.html'));
app.use(bodyParser.JSON());

app.get('/',function(req,res){
	res.send()
});

app.post('/', function (req, res) {
  if(req.body)
 	res.send(body.stringifyJson())
	res.end()
});




var port = 3000
app.listen(port,function(){
	console.loge('please listen and dont crash')
})
