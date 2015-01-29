
// require Express (used for routing and stuff)
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// Including body-parser. See readme for info.
app.use(bodyParser.urlencoded({extended: false}));

// define options that Express will use when sending files to the client (using res.sendFile)
var options = {
    root: ".",
    dotfiles: 'deny'
};

// make the "public" directory available to the client
app.use(express.static('public'));
app.use(express.static('bower_components'));


// Defining routes!

// When your browser wants a page from a site, it will generally send an HTTP "get" request for it. (literally, asking the web server for the specific page or file).
// For instance, say your website is 'www.pets.net' and someone types 'www.pets.net/kittens' into their browser.
// To our server, this will look like a request for '/kittens', and we need to define how we want it to respond.
// What we are doing here is telling our nodejs / Express server what to send back to the browser when it requests certain things.

// Breaking it down:   app.get('/kittens', function(req, res){res.send("kittens!");});
// app -- the name of our Express instance created on line 4
// app.get('/kittens', etc...) -- defining behavior for a 'get' request to our Express instance (app), the request is '/kittens'
// app.get('/kittens', function(req, res){ etc... }) -- defining a function to handle the request for '/kittens' (req = request, res = response)
// app.get('/kittens', function(req, res){ res.send('kittens!"); }); -- responding to the request by sending the string "kittens!" to the browser.


app.get('/kittens', function(req, res){
    res.send("Page under construction!");
});

app.get('/about', function(req, res){
    res.sendFile('public/views/about.html', options);
});

app.get('/', function(req, res){
    res.sendFile('public/views/index.html', options);
});

app.get('/ferret', function(req, res){
    res.sendFile('public/views/ferret.html', options);
});

app.get('/GPACalculator', function(req, res){
    res.sendFile('public/views/GPACalculator.html', options);
});

// Wildcard catches requests for non-existent routes or files and responds with a 404 message (or an html page if you want to make a custom one!)
app.get('*', function(req, res){
    //res.send("404");
    res.sendFile('public/views/404.html', options);
});


// Starts the nodejs server on port 9000
var server = app.listen(9000, function(){
   var host = server.address().address;
   var port = server.address().port;

   console.log("server listening on http://%s:%s", host, port);
});




