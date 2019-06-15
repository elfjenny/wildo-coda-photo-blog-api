const express = require('express');
const app = express ();
const port = 3000;

app.get("/api", (req, res)=> {
    res.send('It works')
});

app.get("/", (req, res) => { 
    res.send('put a /api before every route')    
 });

app.listen(3000, function() {
    console.log("Server listing on local host port 3000");
});


