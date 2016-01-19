var express = require('express');
var app = express();
var swig = require ('swig');


// in some file that is in the root directory of our application
var locals = {
    title: 'An Example',
    people: [{
        name: 'Gandalf',
    }, {
        name: 'Frodo'
    }, {
        name: 'Hermione'
    }]
};


swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
    console.log(output);
});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });


app.get("/", function(request, response, next){
	response.render('index', locals);
	next();
})

app.listen(3000, function(){
	console.log("listening on port 3000");
})

app.use(function(request, response, next){
	console.log(request.method + " " + request.path + " " + response.statusCode);
})




