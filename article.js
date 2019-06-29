module.exports = app => {
    app.get("/api/articles/:id", (req, res) => {
        res.send("Route to get one article");
    });
};

module.exports = app => {
    app.get("/api/articles", (req, res) => {
        res.send("Route to get all article");
    });
};

module.exports = app => {
    app.get("/api/articles", (req, res) => {
        res.send("Route to get all article");
    });
};

module.exports = app => {
    app.get("/api/articles/:id/comments", (req, res) => {
        res.send("Route to get all comment belonging to one article");
    });
};

module.exports = app => {
    app.post("/api/articles", (req, res) => {
        res.send("Route to post article");
    });
};

module.exports = app => {
    app.put("/api/articles", (req, res) => {
        res.send("Route to update all article");
    });
};

module.exports = app => {
    app.delete("/api/articles/:id", (req, res) => {
        res.send("Route to delete one article");
    });
};