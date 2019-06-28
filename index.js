const express = require("express");
const bp = require("body-parser");
const { connect } = require("./db");
const registerCategoriesRoutes = require("./categories");
const registerArticlesRoutes = require("./articles");
const registerUsersRoutes = require("./users");
const registerCommentsRoutes = require("./comments");
const app = express();
app.use(bp.json());
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
        console.log("Successfully connected to database!!!");
        app.listen(port, function() {
            console.log("Server listing on local host port 3000");
        });
    })
    .catch(err => {
        console.error(err);
    });
