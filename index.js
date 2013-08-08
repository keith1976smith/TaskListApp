var express = require('express'),
    home = require('./routes/home.js'),
    create = require('./routes/create.js');

var app = express();

app.configure(function(){
    app.set('title', 'Task Manager 2000 Pro++');
    app.set('view engine', 'jade');
});

app.get('/', home.index);
app.get('/create', create.index);

app.listen(process.env.PORT, process.env.IP);