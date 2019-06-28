const express = require("express");
const { connect } = require("./db");
const registerCategoriesRoutes = require("./categories");
const registerArticlesRoutes = require("./articles");
const registerUsersRoutes = require("./users");
const registerCommentsRoutes = require("./comments");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("put a /api before every route");
});

app.get("/api", (req, res) => {
    res.send("It works");
});
registerCategoriesRoutes(app);
registerArticlesRoutes(app);
registerUsersRoutes(app);
registerCommentsRoutes(app);

app.post("/image", (req, res) => {
    res.send("publish a new image");
});
app.post("/login", (req, res) => {
    res.send("need to authenticate");
});

connect()
    .then(() => {
        app.listen(3000, function() {
            console.log("Server listing on local host port 3000");
        });
    })
    .catch(err => {
        console.error(err);
    });
