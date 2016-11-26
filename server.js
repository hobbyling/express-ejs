// load the things we need
var express = require('express');  
var app = express();

//set the view engine to ejs 
//how we send a view to the user by using res.render(), res.render() will look in a views folder for the view, so we only have to define "page/index"
 app.set('view engine', 'ejs');  

 //use res.render渲染 to load up an ejs view file 

 //index page
 app.get('/', function(req, res) {  
 	var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
 });

 //about page
 app.get('/about', function(req, res){
 	res.render('pages/about');
 });  

 var server = app.listen(3000, function() {  
  console.log('Listening on port 3000');  
 });