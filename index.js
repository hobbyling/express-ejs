/*var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});*/

var express = require('express');  
 var app = express();  
 app.set('view engine', 'ejs');  
 app.get('/', function(req, res) {  
  res.render('default', {  
   title: '首頁',  
   users: ['Kai', 'aYen', 'Kyousuke']  
  });  
 });  
 app.get('/me', function(req, res) {  
  res.send('<h1>我的FB</h1>' + 'https://www.facebook.com/witkaiy');  
 });  
 app.get('/who/:name?', function(req, res) {  
  var name = req.params.name;  
  res.send(name + ' 在這邊歐');  
 });  
 app.get('/who/:name?/:title?', function(req, res) {  
  var name = req.params.name;  
  var title = req.params.title;  
  res.send('<p>名稱: ' + name + '<br>值稱: ' + title + '</p>');  
 });  
 app.get('*', function(req, res) {  
  res.send('沒有東西噢');  
 });  
 var server = app.listen(3000, function() {  
  console.log('Listening on port 3000');  
 });