module.exports = app => {
    app.get("/api/articles/:id", (req, res) => {
        res.send("Route to get one article");
    });

    app.get("/api/articles", (req, res) => {
        res.send("Route to get all article");
    });

    app.get("/api/articles/:id/comments", (req, res) => {
        res.send("Route to get all comment belonging to one article");
    });

    app.post("/api/articles", (req, res) => {
        res.send("Route to post article");
    });

    app.put("/api/articles", (req, res) => {
        res.send("Route to update all article");
    });

    app.delete("/api/articles/:id", (req, res) => {
        res.send("Route to delete one article");
    });
};
