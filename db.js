const { connect } = require("mongoose");
const USER = "wilder";
const PASS = "9AClOY0cpWRzbx2l";
const DB = "wildo-coda";
const uri = `mongodb+srv://${USER}:${PASS}@gasst-free-6soje.mongodb.net/${DB}?retryWrites=true&w=majority`;
module.exports.connect = async () => {
    return connect(
        uri,
        { useNewUrlParser: true }
    );
};
