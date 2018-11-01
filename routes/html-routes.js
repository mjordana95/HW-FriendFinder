var path = require("path");

 module.exports = function(app){
   //a GET route that displays JSON of all possible friends
   app.get('/', function(req,res){
     res.sendFile(path.join(__dirname, '../Views/home.html'));
   });

   app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, '../Views/survey.html'));
 }
 ) }