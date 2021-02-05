// jshint esversion:6
//require express
const bodyParser = require("body-parser");
const { request } = require("express");
const express = require('express');
// app is a function to refer to express modules
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }))

//when a browser sends get request to our homepage, what we should do->callback function

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");

}) // root-> home page




//post key enter page 
app.post("/", function (req, res) {
    console.log("Hello");

    //run node server.js-> command prompt
    //form data
    console.log("Entered name : " + req.body.signature);
    console.log("Message: " + req.body.msg);
    res.send("Message : " + req.body.msg + "   From: " + req.body.signature);



    //generate private key, public key, send to receiver
    //redirect to receiver page, receive public key from form.

    //check if keys match, display respective message to user

})



// listens for any requests sent to our server
//  add a function to indicate that listening has started
app.listen(3000, function () {
    console.log("Server started on port 3000");
});


//response to the request made from the web
//give the server something to display
