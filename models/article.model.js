const { Schema, model, SchemaTypes } = require("mongoose");

const schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        images: [String],
        body: String,
        author: {
            type: SchemaTypes.ObjectId,
            required: true
        },
        comments: [SchemaTypes.ObjectId],
        category: SchemaTypes.ObjectId
    },

    { timestamps: true }
);

schema.virtual("id", function() {
    return this._id.toString();
});

module.exports.Article = model("Article", schema);
