/* ROUTES FOR USER */
/* GET routes */
const { User } = require("./models/user.model");
module.exports = app => {
    app.get("/api/users/:id", (req, res) => {
        res.send("Route to retrieve a single user");
    });

    app.get("/api/users/:id/articles", (req, res) => {
        res.send("Route to retrieve a articles belonging to a single user");
    });

    app.get("/api/users", (req, res) => {
        User.find({})
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                res.status(500);
                res.send(err.message);
            });
    });

    /* POST routes */
    app.post("/api/users", (req, res) => {
        const body = req.body;

        // here I could do validation if I wanted
        User.create(body)
            .then(doc => {
                res.json(doc);
            })
            .catch(err => {
                res.status(500);
                res.send(err.message);
            });

        // username: {
        //     type: String,
        //     required: true
        // },
        // name: {
        //     first: String,
        //     last: String
        // },
        // email: {
        //     type: String,
        //     required: true
        // },
        // password: String
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
