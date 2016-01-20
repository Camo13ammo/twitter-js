var express = require('express');
var app = express();
var swig = require ('swig');
var morgan = require('morgan'); //figure this out later
var tweets = require('./tweetBank.js');
var routes = require('./routes');

//These are configuration codes
app.use('/', routes);
app.use(express.static('public'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });

app.listen(3000, function(){
	console.log("listening on port 3000");
})


// in some file that is in the root directory of our application
// var locals = {
//     title: 'An Example',
//     people: [{
//         name: 'Gandalf',
//     }, {
//         name: 'Frodo'
//     }, {
//         name: 'Hermione'
//     }]
// };


// swig.renderFile(__dirname + '/views/index.html', {title: "some Tweets", tweets: tweets.list()}, function (err, output) {
//     console.log(output);   //this is only for rendering in the terminal
// });


// app.use(function(request, response, next){
// 	console.log(request.method + " " + request.path + " " + response.statusCode);
// 	next();
// })

//This is routing code
// app.get("/", function(request, response, next){
// 	response.render('index', {title: "waddap", name: "TheThing"});
// })

// app.get('/tweets', function(request, response, next){
// 	var all = tweets.list();
// 	console.log(all);
// 	response.render('index', {title: "Some tweets", tweets: all});
// })

// app.get('/tweets/:num', function(request, response, next){
// 	var num = request.params.num;
// 	var all = tweets.list();
// 	console.log(num);
// 	response.render('index', {title: "some Tweets", tweets: [all[num]]});
// })

// app.listen(3000, function(){
// 	console.log("listening on port 3000");
// })

// app.use(function(request, response, next){
// 	console.log(request.method + " " + request.path + " " + response.statusCode);
// })




