const { connect } = require("mongoose");
const USER = "wilder";
const pass = "9AClOY0cpWRzbx2l";
const db = "wildo-coda";
const uri = `mongodb+srv://${USER}:${pass}@gasst-free-6soje.mongodb.net/${db}?retryWrites=true&w=majority`;
module.exports.connect = async () => {
    return connect(
        uri,
        { useNewUrlParser: true }
    );
};
