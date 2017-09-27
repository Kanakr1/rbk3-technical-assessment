const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const mongojs = require('mongojs'); 

const ObjectId = require('mongodb').ObjectID;

const db = mongojs('jobseeker',['users','jobs']);


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//so angualr2 cn use the same port 

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', (req,res,next) => {
    res.send("hello");
})

app.get('/api/users',(req,res,next) =>{
    db.users.find().sort({name:1}, (err, users) => {
        if(err){
            res.send(err)
        }
        res.json(users)
    })
})

app.get('/api/jobs',(req,res,next) =>{
    db.jobs.find().sort({title:1}, (err, jobs) => {
        if(err){
            res.send(err)
        }
        res.json(jobs)
    })
})


app.post('/api/users/:id', (req, res, next) => {
    db.users.insert(req.body, (err,user) => {
        if(err){
            res.send(err)
        }
        res.json(user)
    })
})

app.post('/api/jobs/:id', (req, res, next) => {
    db.jobs.insert(req.body, (err,job) => {
        if(err){
            res.send(err)
        }
        res.json(job)
    })
})

app.listen(port,() => {
     console.log('port'+port)      
           })