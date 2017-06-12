var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection({
        port: 3306,
        host: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user:"fpvqwgdwq1szr6qs",
        password: "ctodwd33uiwpk8ov",
        database:"lz3v4urmbo68kr9p"
    });
}
else {
    var connection = mysql.createConnection({
        // port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;