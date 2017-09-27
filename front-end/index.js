var express = require('express');
var app =express();

app.listen(3000);
console.log('server connect on 3000')


app.use('/', express.static('public'))



