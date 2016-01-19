var express = require('express');
var app = express();




app.get("/", function(request, response, next){
	response.send("some text and then some more text");
	next();
})

app.listen(3000, function(){
	console.log("listening on port 3000");
})

app.use(function(request, response, next){
	console.log(request.method + " " + request.path + " " + response.statusCode);
})
