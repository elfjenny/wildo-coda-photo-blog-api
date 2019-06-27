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
});

app.listen(3000, function() {
    console.log("Server listing on local host port 3000");
});


 