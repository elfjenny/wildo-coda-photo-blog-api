const express = require('express)
})

app.get("/api", (req, res)=> {
    res.send('It works')
});
app.listen(3000, function() {
    console.log("Server listing on local host port 3000");
});


