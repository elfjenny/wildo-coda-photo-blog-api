module.exports = app => {
    app.get("/api/categories", (req, res) => {
        res.send("Route to get all categories is ok");
    });
};
