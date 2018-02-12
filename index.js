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

// ALLOW ACCESS *************
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
  res.send('Hello Node + GitHub! Port is: ' + process.env.PORT);
});



// SOCKETS *************
const server = require("http").Server();
const port2 = process.env.PORT || 5000;

var io = require("socket.io")(server);

//this sends a message called joined
io.on("connection",function(socket){
    io.emit("joined");
	socket.on("typing",()=>{
		socket.broadcast.emit("isTyping");
	});
});

server.listen(port2,function(err){
    if (err){
        console.log("there is a problem");
        return false;
    }
    else{
        console.log("all good head over to the server");
    }
});



// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});







