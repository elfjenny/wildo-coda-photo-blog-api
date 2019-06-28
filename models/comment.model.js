const { Schema, model, SchemaTypes } = require("mongoose");

const schema = new Schema(
    {
        subject: String,
        body: {
            type: String,
            required: true
        },
        author: {
            type: SchemaTypes.ObjectId,
            required: true
        }
    },
    { timestamps: true }
);

schema.virtual("id", function() {
    return this._id.toString();
});

module.exports.Comment = model("Comment", schema);
