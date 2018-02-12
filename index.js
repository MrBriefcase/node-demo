// server
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

var greetings=[
    "hola",
    "hey dudes",
    "Nihaoma",
    "Salam Refighi",
    "Ahlan Va sahlan",
    "Priviet"
]

app.get("/greeting", function(req, resp){
    var index=Math.random()*(greetings.length-1);
    index=Math.round(index);
    resp.end(greetings[index]);
});
//this where we receive the greeting and push it into our array
app.get("/add/:greet", (req, resp)=>{
    var greet=req.params.greet;
    greetings.push(greet);
    resp.end("a new greeting added");
});

// Our first route
app.get('/', function (req, res) {
  res.send('Hello Node + GitHub!');
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});







