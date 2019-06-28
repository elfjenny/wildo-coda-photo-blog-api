module.exports = app => {
    app.get("/api/comments/:id", (req, res) => {
        res.send("Route to get a specific comment");
    });

    app.get("/api/comments", (req, res) => {
        res.send("Route to get all comments");
    });

    app.post("/api/comments", (req, res) => {
        res.send("Route to post a new comment");
    });

    app.put("/api/comments", (req, res) => {
        res.send("Route to update a comment");
    });

    app.delete("/api/comments/:id", (req, res) => {
        res.send("Route to delete a comment");
    });
};
