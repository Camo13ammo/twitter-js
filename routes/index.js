var router = require('express').Router();
var tweets = require('../tweetBank.js');


router.get('/', function(request, response, next){
	var all = tweets.list();
	console.log(all);
	response.render('index', {title: "Some tweets", tweets: all, showForm: true });
})

router.get('/:num', function(request, response, next){
	var num = request.params.num;
	var all = tweets.list();
	console.log(num);
	response.render('index', {title: "some Tweets", tweets: [all[num-1]], showForm: true });
})

router.get('/users/:name', function(request, response, next){    
	var person = request.params.name;
	person = person.charAt(0).toUpperCase() + person.slice(1);
	var all = tweets.find({name: person}); 											// <-- we were trying to do tweets.find(person)
	response.render('index', {title: "some Tweets", tweets: all, showForm: true, guy: person});  //person is a value, not a key. Find() can only find all objects
}) 																					//with a certain key!, OR an object who has a specified key passed
																					// WITH a specified value. It can't however JUST search by a value
																					// I used a little charAt nonsense so that if the user types in
																					// users/ayana, it will still find the object "Ayana" with capital 'A'
																					//I also removed the lastName from the names otherwise you can't match 
																					//a value unless you start doing some funky string manipulation to just get the first name

router.post('/', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweets.add(name, text);
  res.redirect('/');
});

router.post('/:num', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweets.add(name, text);
  res.redirect('/');
});

router.post('/users/:name', function(req, res) {

  var name = req.body.name;
  var text = req.body.text;
  tweets.add(name, text);
  res.redirect('/');
});


module.exports = router;


