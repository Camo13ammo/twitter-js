var router = require('express').Router();
var tweets = require('../tweetBank.js');


router.get('/', function(request, response, next){
	var all = tweets.list();
	console.log(all);
	response.render('index', {title: "Some tweets", tweets: all});
})

router.get('/tweets/:num', function(request, response, next){
	var num = request.params.num;
	var tweets = tweets.list();
	console.log(num);
	response.render('index', {title: "some Tweets", tweets: [tweets[num]]});
})

module.exports = router;