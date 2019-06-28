const { Schema, model, SchemaTypes } = require("mongoose");

const schema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        name: {
            first: String,
            last: String
        },
        email: {
            type: String,
            required: true
        },
        password: String
    },
    { timestamps: true }
);

schema.virtual("id", function() {
    return this._id.toString();
});

module.exports.User = model("User", schema);
