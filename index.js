const express = require('express');
const app = express ();
const port = 3000;

app.get("/api", (req, res)=> {
    res.send('It works')
});

app.get("/", (req, res) => { 
    res.send('put a /api before every route')    
 });

 app.get("/articles/:id", (req, res) => { 
    res.send('get a single article')  
});

app.post("/image", (req, res) => { 
    res.send('publish a new image')  
 app.post("/login", (req, res) => {
     res.send('need to authenticate')
 });

 app.post("/comment", (req, res) => {
    res.send('publish a new comment')
});

app.listen(3000, function() {
    console.log("Server listing on local host port 3000");
});
 app.get("/article", (req, res) => {
    res.send("List of articles")
 });

 app.post("/article", (req, res) => {
     const article = req.body
     res.status(200).send(`the article ${article} has been succesfully stored.`)
 });

app.listen(3000, function() {
    console.log("Server listing on local host port 3000");
});