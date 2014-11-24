var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var app = express();

var blogEngine = require('./blog');

//Setting templating engine(Handlebars)
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.urlencoded({ extended: false }))


//Defining homepage route
app.get('/', function(req, res) {
	res.render('index', {title: "My Blog", entries:blogEngine.getBlogEntries()});
});

app.get('/about', function(req, res) {
	res.render('about', {title: "About Me"});
});

app.get('/article/:id', function(req, res) {
	var entry = blogEngine.getBlogEntry(req.params.id);
	res.render('article', {title: entry.title, blog:entry});
});


app.listen(3000);

