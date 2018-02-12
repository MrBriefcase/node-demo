const express=require("express");
var app=express();
const port=15000;

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

app.listen(port, function(err){
    if(err){
        console.log("hey something is wrong");
        return false;
    }
    else{
        console.log("all good go ahead the gate is open");
    }
});








