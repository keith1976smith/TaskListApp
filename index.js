var express = require('express'),
    path = require('path'),
    tasks = require('./routes/tasks.js');

var app = express();

app.configure(function(){
    app.set('view engine', 'jade'); //Set view engine variable. By default this is Jade anyway.
    app.set('views', path.join(__dirname, 'views')); //Sets the location variable for serving views (*.jade files).
    app.set('layout', 'master');
    app.use(express.bodyParser( { keepExtensions: true, uploadDir: path.join(__dirname, '/pictures') } )); //Middleware to parse user input submitted in the body section of a POST request (e.g. var x = req.body.[fieldName])
    app.use(express.methodOverride()); //Allows the DELETE verb to be sent from an input form.
    app.use(express.static(path.join(__dirname, 'public'))); //Middleware sets the default location for serving static files.
    
    
});

app.get('/', function(req, res){
    res.render('home');
});

app.get('/tasks', tasks.index);

app.get('/:viewname', function(req, res){
    res.render(req.params.viewname);
});

app.listen(process.env.PORT, process.env.IP);