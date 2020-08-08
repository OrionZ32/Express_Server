//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
});

app.get("/contact", function(req, res) {
    res.send("orion@mail.com");
});

app.get("/about", function(req, res) {
    res.send("Hello my name is Orion, a Web Developer");
});

app.get("/help", function(req, res) {
    res.send("this is the help section");
});

app.get("/*", function(req, res) {
    res.send("Error");
});

app.listen(3000, function() {
    console.log("Server has started on port 3000");
});