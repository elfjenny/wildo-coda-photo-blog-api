const express = require("express");
const registerCategoriesRoutes = require("./categories");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("put a /api before every route");
});

app.get("/api", (req, res) => {
    res.send("It works");
});

registerCategoriesRoutes(app);

app.post("/image", (req, res) => {
    res.send("publish a new image");
});
app.post("/login", (req, res) => {
    res.send("need to authenticate");
});

app.listen(3000, function() {
    console.log("Server listing on local host port 3000");
});
