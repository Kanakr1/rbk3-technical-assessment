var express=require('express');
var app=express();
var path=require('path');
var bodyparser=require("body-parser");
app.use(bodyparser.json())
// var User=require('back-end/controllers/userController');
var mongoose=require('mongoose');
// var Job=require('back-end/controllers/jobController');
var mongod=mongoose.connect;
// var db=require("./models/User");
app.use(express.static(path.join(__dirname+'front-end/public')));
var port=process.env.Port||3000;



app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/api/users',function(req,res){
	res.send(bodyparser.json(User.readAllUsers(function(data){
		data=db.findAll(db.name)
	})))
});

app.get('/api/users/id',function(req,res){
	res.send(bodyparser.json(User.getUserByName(req.body.id,function(data){
		var Id=req.body.id;
		if(Id===User.db.id){
			return data;
		}
		res.send('Id is not in the database');

	})))
});

app.post('/user',function(req,res){
	User.addUser(bodyparser.parse(req.body.name,req.body.email,
			function (name,email){
				db.save(req.body.name,req.body.email,function(err){
					if(err) console.error(err);
				})
			}
		))
})


app.listen(port);

console.log('listning on port: ',port)