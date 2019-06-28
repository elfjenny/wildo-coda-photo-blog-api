const { Schema, model, SchemaTypes } = require("mongoose");

const schema = new Schema({
    name: String,
    color: String,
}, {timestamps});

schema.virtual("id", function() {
    return this._id.toString();
});

module.exports.Category = model("Category", schema);
