var router = require('express').Router();
var tweets = require('../tweetBank.js');


router.get('/', function(request, response, next){
	var all = tweets.list();
	console.log(all);
	response.render('index', {title: "Some tweets", tweets: all});
})

router.get('/:num', function(request, response, next){
	var num = request.params.num;
	var all = tweets.list();
	console.log(num);
	response.render('index', {title: "some Tweets", tweets: [all[num]]});
})

router.get('/users/:name', function(request, response, next){
	var name = request.params.name;
	console.log(tweets.find(name);
	response.render('index', {title: "some Tweets", tweets: [tweets.find(name)]});
})

module.exports = router;