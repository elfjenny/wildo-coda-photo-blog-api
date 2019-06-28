/* ROUTES FOR USER */
/* GET routes */

module.exports = app => {
    app.get("/api/users/:id", (req, res) => {
        res.send("Route to retrieve a single user");
    });

    app.get("/api/users/:id/articles", (req, res) => {
        res.send("Route to retrieve a articles belonging to a single user");
    });

    app.get("/api/users", (req, res) => {
        res.send("Route to retrieve all user");
    });

    /* POST routes */
    app.post("/api/users", (req, res) => {
        res.send("Route to send a user to be created");
    });

    /* PUT routes */

    app.put("/api/users", (req, res) => {
        res.send("Route to update a user");
    });

    /* DELETE routes */
    app.delete("/api/users/:id", (req, res) => {
        res.send("Route to delete a user");
    });
};
